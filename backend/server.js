import express from 'express';
import path from 'path';
import imageRoute from './routes/image.js'
import cors from 'cors'

const app = express();
app.use(cors());
app.use('/api/image', imageRoute)

const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  const url = new URL('../frontend/build', import.meta.url);
  const indexUrl = new URL('../frontend/build/index.html', import.meta.url);
  console.log("url", url)
  app.use(express.static(url.pathname));

  app.get('/', function (req, res) {
    res.sendFile(indexUrl.pathname);
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
});