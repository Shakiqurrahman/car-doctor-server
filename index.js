import express from 'express';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Car Doctor!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})