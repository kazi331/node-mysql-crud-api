import cors from 'cors';
import express from 'express';
import booksRoute from './routes/books.js';
import usersRoute from './routes/users.js';

// MIDDLEWARES
const app = express();
app.use(express.json());
app.use(cors())


// routers 
app.use('/api/users', usersRoute);
app.use('/api/books', booksRoute)



// default home route 
app.get('/', (req, res) => {
    res.json('Welcome');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Connected');
})