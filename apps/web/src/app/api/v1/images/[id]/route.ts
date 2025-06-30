import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const directory = searchParams.get('directory') === 'locales' ? 'media/locales' : 'media/projects';
    
    const filePath = path.join(process.cwd(), 'public', directory, id);

    try {
      await fs.access(filePath);
    } catch (err) {
      return new NextResponse('File not found', { status: 404 });
    }

    const file = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();

    const contentTypes: Record<string, string> = {
      '.webp': 'image/webp',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
    };

    const contentType = contentTypes[ext] || 'application/octet-stream';

    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error retrieving file:', error);
    return new NextResponse('Failed to retrieve file', { status: 500 });
  }
}