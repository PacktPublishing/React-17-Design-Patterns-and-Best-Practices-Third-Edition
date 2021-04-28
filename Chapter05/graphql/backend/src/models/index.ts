// Dependencies
import { Sequelize } from 'sequelize'

// Configuration
import { $db } from '../../config'

// Interfaces
import { IModels } from '../types'

// Db Connection
const { dialect, port, host, database, username, password } = $db

// Connecting to the database
const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri)

// Models
const models: IModels = {
  User: require('./User').default(sequelize, Sequelize),
  sequelize
}

export default models
