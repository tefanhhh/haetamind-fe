import { H3Event } from 'h3'
import { compare } from 'bcrypt'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  const { value, hash } = body
  const isMatch = await compare(value, hash)
  return isMatch ? 'Match' : 'Not match'
})
