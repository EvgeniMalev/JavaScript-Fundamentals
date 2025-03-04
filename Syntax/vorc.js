function solve(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const sum = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    if (vowels.includes(str[0])) {
        return 'true' + '\n' + sum; 
    } else {
        return 'false' + '\n' + sum; 
    }
}
