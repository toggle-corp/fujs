import { union, intersection } from './core';

export function getTrigrams(word: string) {
    const newWord = word.trim()
        .toLowerCase()
        .replace(/[^a-zA-z0-9]/g, ' ')
        .replace(/\s+/g, '  ');
    const formattedWord = `  ${newWord} `;

    const trigrams = [];
    for (let i = 0; i < formattedWord.length - 2; i += 1) {
        const trigram = formattedWord.substr(i, 3);
        if (trigram[1] !== ' ' || trigram[2] !== ' ') {
            trigrams.push(trigram);
        }
    }
    return new Set(trigrams);
};

export function getTrigramSimilarity(foo: string, bar: string) {
    const fooTrigrams = getTrigrams(foo);
    const barTrigrams = getTrigrams(bar);

    const common = intersection(fooTrigrams, barTrigrams);
    const all = union(fooTrigrams, barTrigrams);
    return common.size / all.size;
};

