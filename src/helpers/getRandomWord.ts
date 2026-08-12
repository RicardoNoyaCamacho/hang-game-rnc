const words: string[] = [
    'AGUACATE',
    'GATO',
    'PERRO',
    'MANDARINA',
    'COREA',
]

export function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length)

    return words[randomIndex];
}