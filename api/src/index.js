import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import routes from './router.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

// Setup mongoose
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'furniture-sept-2025'
    });

    console.log('Successfully connected to db!');
    
} catch (err) {
    console.log('Cannot connect to db!');
    console.log(err);
}

// Add cors
app.use(cors());

// Add json parser
app.use(express.json());

// Authmiddleware
app.use(authMiddleware);

// Add routes
app.use(routes);

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'))