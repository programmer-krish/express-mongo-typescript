import mongoose from 'mongoose';
import { config } from './config';
import { log } from '../logger';
/**
 * Database Connection
 */
const connectDb = async () => {
    try {
        await mongoose.connect(`${config.mongo.url}`, {
            retryWrites: true
        });
        log.info(`Mongo connected Successfully`);
    } catch (error) {
        log.info(error);
    }
};

export { connectDb };
