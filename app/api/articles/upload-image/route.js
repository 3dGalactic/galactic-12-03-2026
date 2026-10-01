import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') || formData.get('image');

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { success: false, error: 'No image file provided' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let publicUrl;
    let safeName = null;

    try {
      const uploadDir = path.join(process.cwd(), 'public', 'articles');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Determine extension
      const originalName = file.name || 'image.png';
      const extMatch = originalName.match(/\.([a-zA-Z0-9]+)$/);
      const ext = extMatch ? `.${extMatch[1].toLowerCase()}` : '.png';

      safeName = `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}${ext}`;
      const targetPath = path.join(uploadDir, safeName);

      fs.writeFileSync(targetPath, buffer);
      publicUrl = `/articles/${safeName}`;
    } catch (fsErr) {
      console.warn('Filesystem is read-only (serverless/Vercel). Storing image as Base64 Data URI:', fsErr.message);
      const mimeType = file.type || 'image/png';
      publicUrl = `data:${mimeType};base64,${buffer.toString('base64')}`;
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: safeName || 'custom-image',
      message: 'Image uploaded successfully'
    });
  } catch (error) {
    console.error('Image upload error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to upload image' },
      { status: 500 }
    );
  }
}
