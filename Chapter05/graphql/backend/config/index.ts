// Dependencies
import dotenv from 'dotenv'

// Configuration
import config from './config.json'

// Loading .env vars
dotenv.config()

// Types
type Db = {
  dialect: string
  host: string
  port: string
  database: string
  username: string
  password: string
}

type Security = {
  secretKey: string
  expiresIn: string
}

type Server = {
  port: number
}

// Extracting data from .env file
const {
  DB_DIALECT = '',
  DB_PORT = '',
  DB_HOST = '',
  DB_DATABASE = '',
  DB_USERNAME = '',
  DB_PASSWORD = '',
} = process.env

const db: Db = {
  dialect: DB_DIALECT,
  port: DB_PORT,
  host: DB_HOST,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD
}

// Configuration
const { security, server } = config

export const $db: Db = db
export const $security: Security = security
export const $server: Server = server
