import { hasSpecial} from "./hasSpecial";

test('Detects presence of special characters', () => {
    expect(hasSpecial('Hello!')).toBe(true);
    expect(hasSpecial('Hello')).toBe(false);
})