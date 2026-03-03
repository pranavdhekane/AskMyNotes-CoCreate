const pdfParse = require('pdf-parse');

/**
 * Extract text from PDF buffer
 */
async function extractTextFromPDF(buffer) {
  const data = await pdfParse(buffer);
  return data.text;
}

/**
 * Extract text from TXT buffer
 */
function extractTextFromTXT(buffer) {
  return buffer.toString('utf-8');
}

/**
 * Chunk text into smaller pieces
 */
function chunkText(text) {
  const chunkSize = 1000;
  const chunks = [];
  let start = 0;
  let index = 0;

  while (start < text.length) {
    const end = start + chunkSize;
    const chunk = text.slice(start, end);

    chunks.push({
      content: chunk.trim(),
      chunkIndex: index
    });

    start = end;
    index++;
  }

  return chunks;
}

module.exports = {
  extractTextFromPDF,
  extractTextFromTXT,
  chunkText
};