export function hasSpecial(word: string): boolean {
    const specials = ['!', '?', '$'];
    for (const character of word) {
        if (specials.includes(character)) {
            return true;
        }
    }
    return false;
}