import express, { request } from 'express'
import message from './routes'

const app = express()

app.get('/', message)

app.listen(3333)