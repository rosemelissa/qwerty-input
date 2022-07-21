import {hasSpecial} from './hasSpecial';
import {hasUpperCase} from './hasUpperCase';
import {hasLowerCase} from './hasLowerCase';

export function isInputStrong(word: string): boolean {
    return ((word.length >= 7) && (hasSpecial(word)) && (hasUpperCase(word)) && (hasLowerCase(word)))
}

// the input is at least 7 characters in length
// it has at least one uppercase character
// it has at least one lowercase character
// it has at least one special character (pick five to focus on here, you don't need to be exhaustive)