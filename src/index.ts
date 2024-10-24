// src/index.ts

export const validExtensions = [
  'jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', // Basic image file formats
  'svg', 'webp', 'ico', 'heic', 'heif', 'raw', 'psd', 'ai', 'eps', // Additional image file formats
  'pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', // Document and presentation formats
  'csv', 'txt', 'rtf', // Text and data files
  'zip', 'rar', '7z', 'tar', 'gz' // Compressed file formats
];

export const validMimeTypes = [
  'image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/tiff', // Basic image MIME types
  'image/svg+xml', 'image/webp', 'image/x-icon', 'image/heic', 'image/heif', // Additional image MIME types
  'image/x-raw', 'image/vnd.adobe.photoshop', 'application/postscript', 'application/illustrator', // RAW, PSD, AI, EPS
  'application/pdf', // PDF
  'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Word document MIME types
  'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // PowerPoint
  'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel
  'text/csv', 'text/plain', 'application/rtf', // CSV, text files
  'application/zip', 'application/x-rar-compressed', 'application/x-7z-compressed', 'application/x-tar', 'application/gzip' // Compressed file MIME types
];

/**
* Checks the file extension.
* @param filename File name
* @returns Whether the file has a valid extension
*/
export function checkExtension(filename: string): boolean {
const ext = filename.split('.').pop();
return validExtensions.includes(ext || '');
}

/**
* Checks the file's MIME type.
* @param mimeType File's MIME type
* @returns Whether the MIME type is valid
*/
export function checkMimeType(mimeType: string): boolean {
return validMimeTypes.includes(mimeType);
}
