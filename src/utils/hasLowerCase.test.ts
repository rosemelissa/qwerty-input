import { hasLowerCase } from "./hasLowerCase";

test('Presence of lowercase letters detected correctly', () => {
    expect(hasLowerCase('Hello World')).toBe(true);
    expect(hasLowerCase('HELLO WORLD')).toBe(false);
    expect(hasLowerCase('!@#$ ')).toBe(false);
    
})