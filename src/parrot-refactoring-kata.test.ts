import { describe, expect, it } from 'vitest';
import { ParrotRefactoringKata } from 'src/parrot-refactoring-kata.ts';

describe('Parrot Refactoring Kata', () => {
    it('Creating an instance of the ParrotRefactoringKata class should work', () => {
        const parrotRefactoringKata = new ParrotRefactoringKata();
        expect(parrotRefactoringKata).toBeDefined();
    });
});
