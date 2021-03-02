import { hash, compare } from './bcrypt.mjs'
import { encrypt, decrypt } from './encrypt-decrypt.mjs'

async function run () {
    const message = 'hello world'
    const messageEncrypted = encrypt(message)
    console.log(`encrypt ${message}`, messageEncrypted)
    console.log(`decrypt ${messageEncrypted}`, decrypt(messageEncrypted))

    const messageHash = await hash(message)
    console.log(`hash ${message}`, messageHash)
    console.log(`compare ${message}`, await compare(message, messageHash))
}

run()