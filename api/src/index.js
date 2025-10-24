import express from 'express';
import cors from 'cors';
import routes from './router.js';

const app = express();

// Add cors
app.use(cors());
// Add routes
app.use(routes);

app.get('/', (req, res) => {

});

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'))