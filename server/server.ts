import * as Path from 'node:path'
import express from 'express'
import request from 'superagent'
import cors, { CorsOptions } from 'cors'

const server = express()

server.use('/api/v1/zen/random', async(req, res) => {
  try {
    const response = await request.get('https://zenquotes.io/api/random')
    res.json(response.body)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

server.use(express.json())
server.use(cors('*' as CorsOptions))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
