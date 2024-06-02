const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

function sliding<T>(array: Array<T>, size: number): Array<Array<T>> {
    size = Math.max(size, 0)
    const length = array == null ? 0 : array.length
    if (!length || size < 1) {
        return []
    }
    const newSize = length - size + 1
    const result = new Array(newSize)
    for (let index = 0; index < newSize; index++) {
        result[index] = array.slice(index, index + size)
    }
    return result
}

export { getRandomInt, sliding }