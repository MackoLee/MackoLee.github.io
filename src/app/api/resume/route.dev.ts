import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * 개발 모드 전용 API Route
 * 
 * 파일 확장자가 .dev.ts 이므로 next.config.ts의 pageExtensions 설정에 의해
 * 개발 모드에서만 인식됩니다. 빌드 시에는 이 파일이 무시됩니다.
 */

const RESUME_FILE_PATH = path.join(process.cwd(), 'src/data/resume.json');

// GET: 파일에서 데이터 읽기
export async function GET() {
  try {
    const fileContent = await fs.readFile(RESUME_FILE_PATH, 'utf-8');
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to read resume file:', error);
    return NextResponse.json(
      { error: 'Failed to read resume file' },
      { status: 500 }
    );
  }
}

// POST: 데이터를 파일로 저장
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const jsonContent = JSON.stringify(data, null, 2);
    await fs.writeFile(RESUME_FILE_PATH, jsonContent, 'utf-8');
    return NextResponse.json({ success: true, message: 'Resume saved successfully' });
  } catch (error) {
    console.error('Failed to write resume file:', error);
    return NextResponse.json(
      { error: 'Failed to write resume file' },
      { status: 500 }
    );
  }
}
