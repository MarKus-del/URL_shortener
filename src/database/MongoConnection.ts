import { config } from '../config/Constants'
import mongoose from 'mongoose'

export class MongoConnections {
    public async connect(): Promise<void>{
        try {
            await mongoose.connect(config.MONGO_CONNECTIONS, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log("database connected")
        } catch (err) {
            console.error(err.message)
            process.exit(1)
        }
    }
}