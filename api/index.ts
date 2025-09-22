import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Snehal Portfolio API is running' 
  });
});

// Basic contact form handler (placeholder)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In a real app, you'd save this to a database or send an email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.' 
  });
});

// Serve static files for any other routes
app.get('*', (req, res) => {
  const staticPath = path.join(__dirname, '../dist/public');
  res.sendFile(path.join(staticPath, 'index.html'));
});

export default app;
