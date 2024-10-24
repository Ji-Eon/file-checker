
## file-format-checker

`file-format-checker` is a lightweight and simple library that allows you to validate file formats based on their extension and MIME type. It also integrates with TypeScript and Jest for unit testing, making it easy to ensure the correctness of file format validation in your projects.

### Features

- Validate file extensions for common formats (e.g., images, documents, compressed files)
- Validate MIME types to ensure the file content is correct
- Easily extendable for custom file formats
- Supports TypeScript and Jest for testing

---

Supported File Formats and MIME Types
This library supports a wide range of common file formats and their associated MIME types. Here's a breakdown of the supported formats:

### Image Formats
#### Extensions
[ jpg, jpeg, png, gif, bmp, tiff, svg, webp, ico, heic, heif, raw, psd, ai, eps ]
#### MIME Types
image/jpeg
image/png
image/gif
image/bmp
image/tiff
image/svg+xml
image/webp
image/x-icon
image/heic
image/heif
image/x-raw
image/vnd.adobe.photoshop
application/postscript
application/illustrator
Document Formats:
Extensions: pdf, doc, docx, ppt, pptx, xls, xlsx, csv, txt, rtf
MIME Types:
application/pdf
application/msword
application/vnd.openxmlformats-officedocument.wordprocessingml.document
application/vnd.ms-powerpoint
application/vnd.openxmlformats-officedocument.presentationml.presentation
application/vnd.ms-excel
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
text/csv
text/plain
application/rtf

### Compressed File Formats
#### Extensions
[ zip, rar, 7z, tar, gz ] 
#### MIME Types
application/zip
application/x-rar-compressed
application/x-7z-compressed
application/x-tar
application/gzip

### Installation

To install the `file-format-checker` library, simply run the following command:

```bash
npm install file-format-checker
```

For TypeScript and testing support, make sure you also install the necessary development dependencies:

```bash
npm install --save-dev jest ts-jest @types/jest typescript
```

---

### Usage

After installing the library, you can use it to validate file extensions and MIME types in your project.

#### Example of checking file extensions:

```javascript
import { checkExtension } from 'file-format-checker';

console.log(checkExtension('image.jpg'));  // true
console.log(checkExtension('file.exe'));   // false
```

#### Example of checking MIME types:

```javascript
import { checkMimeType } from 'file-format-checker';

console.log(checkMimeType('image/jpeg'));  // true
console.log(checkMimeType('application/x-msdownload'));  // false
```

---


### Keywords

Here are some keywords that are useful for categorizing your library when publishing on NPM:

- `file-format`
- `file-extension`
- `mime-type`
- `file-validation`
- `typescript`
- `jest`
- `file-checker`
- `file-upload`

---

### License

This library is licensed under the MIT License. You can freely use, modify, and distribute the code as long as you adhere to the terms of the license.

---

With this README in place, you're ready to publish your library to NPM. You can always extend the README to provide more examples or document additional features as your library grows.

To publish your package, run the following commands:

