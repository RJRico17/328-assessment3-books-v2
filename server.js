import express from 'express';
import reviewsRouter from './routes/review.routes.js';

const app = express();

//configure middleware (static folder for /public and router...)
app.use(express.static("public"));

app.get('/', reviewsRouter);

const PORT = 3000;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));