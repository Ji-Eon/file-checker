// src/index.ts

export const validExtensions = [
    'jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', // 기본 이미지 파일 형식
    'svg', 'webp', 'ico', 'heic', 'heif', 'raw', 'psd', 'ai', 'eps', // 추가 이미지 파일 형식
    'pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', // 문서 및 프레젠테이션 형식
    'csv', 'txt', 'rtf', // 텍스트 및 데이터 파일
    'zip', 'rar', '7z', 'tar', 'gz' // 압축 파일 형식
  ];
  
  export const validMimeTypes = [
    'image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/tiff', // 기본 이미지 MIME 타입
    'image/svg+xml', 'image/webp', 'image/x-icon', 'image/heic', 'image/heif', // 추가 이미지 MIME 타입
    'image/x-raw', 'image/vnd.adobe.photoshop', 'application/postscript', 'application/illustrator', // RAW, PSD, AI, EPS
    'application/pdf', // PDF
    'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Word 문서 MIME 타입
    'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // PowerPoint
    'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel
    'text/csv', 'text/plain', 'application/rtf', // CSV, 텍스트 파일
    'application/zip', 'application/x-rar-compressed', 'application/x-7z-compressed', 'application/x-tar', 'application/gzip' // 압축 파일 MIME 타입
  ];
/**
 * 파일 확장자를 체크합니다.
 * @param filename 파일 이름
 * @returns 파일이 유효한 확장자를 가지는지 여부
 */
export function checkExtension(filename: string): boolean {
  const ext = filename.split('.').pop();
  return validExtensions.includes(ext || '');
}

/**
 * 파일의 MIME 타입을 체크합니다.
 * @param mimeType 파일의 MIME 타입
 * @returns 유효한 MIME 타입 여부
 */
export function checkMimeType(mimeType: string): boolean {
  return validMimeTypes.includes(mimeType);
}
