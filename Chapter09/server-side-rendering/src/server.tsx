import React from 'react'
import express, { Request, Response } from 'express'
import { renderToString } from 'react-dom/server'
import path from 'path'
import App from './App'
import template from './template'

const app = express()

app.use(express.static(path.resolve(__dirname, './dist/public')))

app.get('/', (req: Request, res: Response) => {
  const body = renderToString(<App />)
  const html = template(body)
  res.send(html)
})

app.listen(3000, () => console.log('Listening on port 3000'))