import crypto from 'crypto'

const AES_KEY = 'hFtN7RrBdLSQnAnEpS6YN5C6hSWvlLM7'
const AES_IV = 'mphfZJFh0lLeQ5yk'
const ENCRYPTION_TYPE = 'aes-256-cbc'
const ENCRYPTION_ENCODING = 'base64'
const BUFFER_ENCRYPTION = 'utf-8'

export function encrypt (message = '') {
    if (message === '') {
      return ''
    }
  
    const key = Buffer.from(AES_KEY, BUFFER_ENCRYPTION)
    const iv = Buffer.from(AES_IV, BUFFER_ENCRYPTION)
    const cipher = crypto.createCipheriv(ENCRYPTION_TYPE, key, iv)
    const encrypted = cipher.update(message, BUFFER_ENCRYPTION, ENCRYPTION_ENCODING)
      + cipher.final(ENCRYPTION_ENCODING)
    return encrypted
}
  
export function decrypt (base64String = '') {
    const buff = Buffer.from(base64String, ENCRYPTION_ENCODING)
    const key = Buffer.from(AES_KEY, BUFFER_ENCRYPTION)
    const iv = Buffer.from(AES_IV, BUFFER_ENCRYPTION)
    const decipher = crypto.createDecipheriv(ENCRYPTION_TYPE, key, iv)
    const deciphered = decipher.update(buff).toString() + decipher.final().toString()
    return deciphered
}