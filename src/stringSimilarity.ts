import { union, intersection } from './core';

/**
 * Get trigrams from a sentence
 * @param sentence
 */
export function getTrigrams(sentence: string) {
    const newWord = sentence.trim()
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

/**
 * Get trigram similarity between two sentences
 * @param foo first string
 * @param bar second string
 */
export function getTrigramSimilarity(foo: string, bar: string) {
    const fooTrigrams = getTrigrams(foo);
    const barTrigrams = getTrigrams(bar);

    const common = intersection(fooTrigrams, barTrigrams);
    const all = union(fooTrigrams, barTrigrams);
    return common.size / all.size;
};

