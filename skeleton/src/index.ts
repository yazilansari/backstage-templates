import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: '${{ values.name }}',
  });
});

app.get('/', (_req, res) => {
  res.json({
    service: '${{ values.name }}',
    description: '${{ values.description }}',
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Service listening on port ${port}`);
});
