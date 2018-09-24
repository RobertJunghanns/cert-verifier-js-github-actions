import domain from '../../../../../src/domain';

describe('domain i18n getSupportedLanguages use case test suite', () => {
  const assertionSupportedLanguages = ['en-US', 'es-ES', 'mt'];

  it('should return an array of supported languages', () => {
    const res = domain.i18n.getSupportedLanguages();
    expect(res).toEqual(assertionSupportedLanguages);
  });
});
