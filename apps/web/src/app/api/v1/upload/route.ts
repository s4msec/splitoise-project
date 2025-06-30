import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file = data.get('icon') as Blob;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Determine file type
    const mimeType = file.type;

    if (!mimeType.startsWith('image/')) {
      return NextResponse.json({ error: 'File is not an image' }, { status: 400 });
    }

    // Get the directory choice from query parameters
    const { searchParams } = new URL(request.url);
    const directory = searchParams.get('directory') === 'locales' ? 'media/locales' : 'media/projects';

    const uploadDir = path.join(process.cwd(), 'public', directory);
    await fs.mkdir(uploadDir, { recursive: true });

    const imageId = randomUUID();
    const webpFilePath = path.join(uploadDir, `${imageId}.webp`);

    if (mimeType === 'image/gif') {
      // Convert GIF to animated WebP and resize to 100x100 pixels
      await sharp(buffer, { animated: true })
        .resize(100, 100, { fit: 'cover' })
        .webp({ quality: 80, effort: 4 })
        .toFile(webpFilePath);

      return NextResponse.json({ status: 'success', file: `${imageId}.webp`, type: 'animated-webp' });
    } else {
      // Convert other images to static WebP and resize to 100x100 pixels
      await sharp(buffer)
        .resize(100, 100, { fit: 'cover' })
        .webp({ quality: 80, effort: 4 })
        .toFile(webpFilePath);

      return NextResponse.json({ status: 'success', file: `${imageId}.webp`, type: 'static-webp' });
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}