import request from 'superagent'
import { ZenQuote } from '../models/zenQuote'

const serverURL = '/api/v1/zen'

export async function getRandomQuote(): Promise<ZenQuote> {
  const res = await request.get(`${serverURL}/random`)
  return res.body
}

