import { hasUpperCase } from "./hasUpperCase";

test('Presence of uppercase letters detected correctly', () => {
    expect(hasUpperCase('Hello World')).toBe(true);
    expect(hasUpperCase('hello world')).toBe(false);
    expect(hasUpperCase('1234!@#$ ')).toBe(false);
})