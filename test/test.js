const saveToPdf = require('../dist/saveToPdf');

describe('saveToPdf', () => {
  it('save github.com', () => saveToPdf.default('https://github.com', 'github.pdf'));
  it('save example.com', () => saveToPdf.default('https://example.com', 'example.pdf'));
});
