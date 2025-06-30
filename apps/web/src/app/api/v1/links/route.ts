// route.ts
"use server";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper: Validate and convert a single link object.
// Returns an object with converted values or throws an error.
async function validateAndPrepareLink(data: {
  splitId: string;
  hidden?: boolean;
  url: string;
  type: string | number;
  prob?: string | number;
  ecpm?: string | number;
}) {
  const { splitId, hidden, url, type, prob, ecpm } = data;

  // Validate required fields
  if (!splitId || !url || type === undefined) {
    throw new Error('Os campos "splitId", "url" e "type" são obrigatórios.');
  }

  // Convert splitId to a number
  const splitIdNumber = Number(splitId);
  if (isNaN(splitIdNumber)) {
    throw new Error('splitId deve ser um número válido.');
  }

  // Check if the split exists
  const splitExists = await prisma.app.split.findUnique({
    where: { id: splitIdNumber },
  });
  if (!splitExists) {
    throw new Error('Split não encontrado.');
  }

  // Convert type to number
  const typeNumber = typeof type === 'number' ? type : Number(type);
  if (isNaN(typeNumber)) {
    throw new Error('type deve ser um número válido.');
  }

  // Convert prob to number (default to 0 if not provided)
  let probNumber: number = 0;
  if (prob !== undefined && prob !== null && prob !== '') {
    probNumber = typeof prob === 'number' ? prob : Number(prob);
    if (isNaN(probNumber)) {
      throw new Error('prob deve ser um número válido.');
    }
  }

  // Convert ecpm to number (default to 0 if not provided)
  let ecpmNumber: number = 0;
  if (ecpm !== undefined && ecpm !== null && ecpm !== '') {
    ecpmNumber = typeof ecpm === 'number' ? ecpm : Number(ecpm);
    if (isNaN(ecpmNumber)) {
      throw new Error('ecpm deve ser um número válido se informado.');
    }
  }

  return {
    splitId: splitIdNumber,
    hidden,
    url,
    type: typeNumber,
    prob: probNumber,
    ecpm: ecpmNumber,
  };
}

// POST method: Supports both single and batch creation.
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    // If the request contains an array under the "links" property,
    // process batch creation.
    if (Array.isArray(body.links)) {
      const linksData = body.links;
      const createdLinks = [];

      for (const linkData of linksData) {
        // Validate and prepare each link object.
        let prepared;
        try {
          prepared = await validateAndPrepareLink(linkData);
        } catch (error: any) {
          return NextResponse.json(
            { error: error.message },
            { status: 400 }
          );
        }

        const link = await prisma.app.link.create({
          data: prepared,
        });
        createdLinks.push(link);
      }

      return NextResponse.json(
        { status: 'success', links: createdLinks },
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Process a single link object.
      let prepared;
      try {
        prepared = await validateAndPrepareLink(body);
      } catch (error: any) {
        return NextResponse.json(
          { error: error.message },
          { status: 400 }
        );
      }

      const link = await prisma.app.link.create({
        data: prepared,
      });

      return NextResponse.json(
        { status: 'success', link },
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Erro ao criar Link:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor ao criar Link.' },
      { status: 500 }
    );
  }
}

// PUT method for updating multiple links in a single API call.
export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    // Expecting an array of update objects in the request body.
    const updates: Array<{
      id: number;
      splitId?: string;
      url?: string;
      type?: string | number;
      prob?: string | number;
      ecpm?: string | number;
      hidden?: boolean;
    }> = await request.json();

    if (!Array.isArray(updates)) {
      return NextResponse.json(
        { error: 'Request body must be an array of update objects.' },
        { status: 400 }
      );
    }

    const results = [];

    for (const item of updates) {
      // Validate that each update object has an id.
      if (!item.id) {
        return NextResponse.json(
          { error: 'Cada item deve conter o campo "id".' },
          { status: 400 }
        );
      }

      const updatedData: { [key: string]: any } = {};

      if (item.splitId !== undefined) {
        const splitIdNumber = Number(item.splitId);
        if (!isNaN(splitIdNumber)) {
          updatedData.splitId = splitIdNumber;
        }
      }

      if (item.url !== undefined) {
        updatedData.url = item.url;
      }

      if (item.type !== undefined) {
        const typeNumber = typeof item.type === 'number' ? item.type : Number(item.type);
        if (!isNaN(typeNumber)) {
          updatedData.type = typeNumber;
        }
      }

      if (item.prob !== undefined && item.prob !== null && item.prob !== '') {
        const probNumber = typeof item.prob === 'number' ? item.prob : Number(item.prob);
        if (!isNaN(probNumber)) {
          updatedData.prob = probNumber;
        }
      }

      if (item.ecpm !== undefined && item.ecpm !== null && item.ecpm !== '') {
        const ecpmNumber = typeof item.ecpm === 'number' ? item.ecpm : Number(item.ecpm);
        if (!isNaN(ecpmNumber)) {
          updatedData.ecpm = ecpmNumber;
        }
      }

      if (item.hidden !== undefined && item.hidden !== null) {
        const hiddenBoolean = typeof item.hidden === 'boolean' ? item.hidden : Boolean(item.hidden);
        updatedData.hidden = hiddenBoolean;
      }

      // Update each link
      const updatedLink = await prisma.app.link.update({
        where: { id: item.id },
        data: updatedData,
      });
      results.push(updatedLink);
    }

    return NextResponse.json(
      { status: 'success', links: results },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao atualizar links:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor ao atualizar links.' },
      { status: 500 }
    );
  }
}

// DELETE method: Deletes multiple links based on a list of IDs.
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    // Expect the request body to have an "ids" array
    if (!Array.isArray(body.ids)) {
      return NextResponse.json(
        { error: 'O campo "ids" deve ser um array de números.' },
        { status: 400 }
      );
    }

    // Convert each id to a number and filter out any invalid numbers.
    const ids: number[] = body.ids
      .map((id: any) => Number(id))
      .filter((id: number) => !isNaN(id));

    if (ids.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum id válido fornecido.' },
        { status: 400 }
      );
    }

    // Delete links where id is in the list.
    const deleteResult = await prisma.app.link.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return NextResponse.json(
      { status: 'success', deletedCount: deleteResult.count },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao deletar links:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor ao deletar links.' },
      { status: 500 }
    );
  }
}
