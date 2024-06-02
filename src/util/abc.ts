function nodeCompare(note1: string, note2: string) {
    // note: /(\^|_)?([A-G])('|,)*/
    function noteRank(note: string): number {
        let rank = 0
        if (note[0] === "^") rank += 0.5
        else if (note[0] === "_") rank -= 0.5
        if (rank !== 0) note = note.slice(1)
        const letterRank: ObjectMap<number> = { 'C': 1, 'D': 2, 'E': 3, 'F': 4, 'G': 5, 'A': 6, 'B': 7 }
        rank += letterRank[note[0].toUpperCase()]
        note = note.slice(1)
        if (note[0] === "'") rank += note.length * 7
        else if (note[0] === ",") rank -= note.length * 7
        return rank
    }
    const rank1 = noteRank(note1)
    const rank2 = noteRank(note2)
    if (rank1 > rank2) return 1
    else if (rank1 < rank2) return -1
    else return 0
}

export { nodeCompare }