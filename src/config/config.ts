import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const SERVER_PORT = process.env.PORT || 6000;

export const config = {
    mongo: {
        url: MONGO_URL
    },

    server: {
        port: SERVER_PORT
    }
};
