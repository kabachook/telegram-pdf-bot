const saveToPdf = require('../dist/saveToPdf');

describe('saveToPdf', () => {
  it('should save github.com', () => saveToPdf.default('https://github.com', 'github.pdf'));
  it('should save example.com', () => saveToPdf.default('https://example.com', 'example.pdf'));
});
