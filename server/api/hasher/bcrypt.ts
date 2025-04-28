import { H3Event } from 'h3'
import { hash } from 'bcrypt'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  const { value, cost } = body
  return await hash(value, cost)
})
