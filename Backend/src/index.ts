import express, { Request, Response } from 'express';
import connectMongoDB from './config/db';
import cors from 'cors';
import audiobooksRoute from './routes/audiobookRoute';

const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
    console.log(`➡️  ${req.method} ${req.originalUrl}`);
    next();
  });
  

//ROUTES
app.use('/api/audiobooks', audiobooksRoute)

connectMongoDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
