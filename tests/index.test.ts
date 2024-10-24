// tests/index.test.ts
import { checkExtension, checkMimeType, validExtensions, validMimeTypes } from '../src/index';

describe('checkExtension', () => {
  test('returns true for valid image extensions', () => {
    expect(checkExtension('image.jpg')).toBe(true);
    expect(checkExtension('image.png')).toBe(true);
    expect(checkExtension('image.gif')).toBe(true);
    expect(checkExtension('image.svg')).toBe(true);
  });

  test('returns true for valid document extensions', () => {
    expect(checkExtension('document.pdf')).toBe(true);
    expect(checkExtension('document.docx')).toBe(true);
    expect(checkExtension('presentation.pptx')).toBe(true);
    expect(checkExtension('spreadsheet.xlsx')).toBe(true);
  });

  test('returns true for valid compressed file extensions', () => {
    expect(checkExtension('archive.zip')).toBe(true);
    expect(checkExtension('archive.rar')).toBe(true);
    expect(checkExtension('archive.tar')).toBe(true);
  });

  test('returns false for invalid file extensions', () => {
    expect(checkExtension('file.exe')).toBe(false);
    expect(checkExtension('file.sh')).toBe(false);
    expect(checkExtension('file.bin')).toBe(false);
    expect(checkExtension('file.dmg')).toBe(false);
  });

  test('returns false for file without extension', () => {
    expect(checkExtension('file')).toBe(false);
  });
});

describe('checkMimeType', () => {
  test('returns true for valid image MIME types', () => {
    expect(checkMimeType('image/jpeg')).toBe(true);
    expect(checkMimeType('image/png')).toBe(true);
    expect(checkMimeType('image/gif')).toBe(true);
    expect(checkMimeType('image/svg+xml')).toBe(true);
  });

  test('returns true for valid document MIME types', () => {
    expect(checkMimeType('application/pdf')).toBe(true);
    expect(checkMimeType('application/msword')).toBe(true);
    expect(checkMimeType('application/vnd.openxmlformats-officedocument.wordprocessingml.document')).toBe(true);
    expect(checkMimeType('application/vnd.ms-excel')).toBe(true);
  });

  test('returns true for valid compressed MIME types', () => {
    expect(checkMimeType('application/zip')).toBe(true);
    expect(checkMimeType('application/x-rar-compressed')).toBe(true);
  });

  test('returns false for invalid MIME types', () => {
    expect(checkMimeType('application/octet-stream')).toBe(false);
    expect(checkMimeType('application/x-msdownload')).toBe(false);
    expect(checkMimeType('text/x-php')).toBe(false);
  });
  
  test('returns false for empty MIME type', () => {
    expect(checkMimeType('')).toBe(false);
  });
});

describe('validExtensions and validMimeTypes arrays', () => {
  test('validExtensions contains all necessary file extensions', () => {
    const necessaryExtensions = ['jpg', 'png', 'pdf', 'docx', 'xls'];
    necessaryExtensions.forEach(ext => {
      expect(validExtensions.includes(ext)).toBe(true);
    });
  });

  test('validMimeTypes contains all necessary MIME types', () => {
    const necessaryMimeTypes = ['image/jpeg', 'application/pdf', 'application/vnd.ms-excel'];
    necessaryMimeTypes.forEach(mimeType => {
      expect(validMimeTypes.includes(mimeType)).toBe(true);
    });
  });
});
