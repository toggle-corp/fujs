import {
    getTrigrams,
    getTrigramSimilarity,
} from './stringSimilarity';

test('should get trigram chars for a word', () => {
    expect(getTrigrams('test')).toEqual(new Set(['  t', ' te', 'tes', 'est', 'st ']));
    expect(getTrigrams('.@#teSt')).toEqual(new Set(['  t', ' te', 'tes', 'est', 'st ']));
    expect(getTrigrams('tc')).toEqual(new Set(['  t', ' tc', 'tc ']));
    expect(getTrigrams('may@tc.com')).toEqual(new Set([
        '  c',
        '  m',
        '  t',
        ' co',
        ' ma',
        ' tc',
        'ay ',
        'com',
        'may',
        'om ',
        'tc ',
    ]));
    expect(getTrigrams('t')).toEqual(new Set(['  t', ' t ']));
    expect(getTrigrams('This za')).toEqual(new Set(['  t', '  z', ' th', ' za', 'his', 'is ', 'thi', 'za ']));
});

test('should get trigram chars for a string', () => {
    const string = 'Chateau blanc';
    const trigrams = new Set([
        '  b', '  c', ' bl', ' ch', 'anc', 'ate', 'au ', 'bla', 'cha',
        'eau', 'hat', 'lan', 'nc ', 'tea',
    ]);
    expect(getTrigrams(string)).toEqual(trigrams);
});

test('should get trigrams Similarity for two stinrgs', () => {
    expect(getTrigramSimilarity('Chateau blanc', 'Chateau Cheval Blanc')).toBeCloseTo(0.736842);
    expect(getTrigramSimilarity('Ellenton CDP', 'Elle Cahon')).toBeCloseTo(0.333333);
    expect(getTrigramSimilarity('Ellaville city', 'Elle Cahon')).toBeCloseTo(0.3);
    expect(getTrigramSimilarity('Ellendale city', 'Elle Cahon')).toBeCloseTo(0.3);
    expect(getTrigramSimilarity('Ellendale city', 'Elle Cahon')).toBeCloseTo(0.3);
    expect(getTrigramSimilarity('Rising Sun city', 'rising sun')).toBeCloseTo(0.6875);
    expect(getTrigramSimilarity('Rising Sun city', 'rising sun')).toBeCloseTo(0.6875);
    expect(getTrigramSimilarity('Rising Sun town', 'rising sun')).toBeCloseTo(0.6875);
    expect(getTrigramSimilarity('Rising Star town', 'rising sun')).toBeCloseTo(0.4);
    expect(getTrigramSimilarity('Risingsun village', 'rising sun')).toBeCloseTo(0.380952);
    expect(getTrigramSimilarity('may@tc.com', 'tc')).toBeCloseTo(0.2727273);
    expect(getTrigramSimilarity('Rising Sun-Lebanon CDP', 'rising sun')).toBeCloseTo(0.478261);
});
