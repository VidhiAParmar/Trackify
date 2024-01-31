import mongoose from 'mongoose';
import DBConnectionError from '../utils/mongodb-connection-error.js';

import { MONGODB_URL, DB_NAME } from './serverConfig.js';

const connectToMongo = async () => {
    try {
        await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
        console.log("Successfully connected to database.");
    } catch (error) {
        throw new DBConnectionError(error);
    }
}

export default connectToMongo;
