import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// ... import other dependencies as needed

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static file serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = process.env.NODE_ENV === 'production'
  ? path.join(process.cwd(), 'dist/public')
  : path.join(__dirname, '../dist/public');
app.use(express.static(staticPath));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel API!' });
});

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

export default app;
