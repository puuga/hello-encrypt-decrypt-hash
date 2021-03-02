import bcrypt from 'bcrypt'

const saltRounds = 10
const salt = 'd37d1e6d-cd3e-4fb6-b6a9-a4f3997bed9f'

export async function hash (message = '') {
    const hash = await bcrypt.hash(message, saltRounds)
    return hash
}

export async function compare (messageToCompare = '', hash = '') {
    const match = await bcrypt.compare(messageToCompare, hash)
    return match
}