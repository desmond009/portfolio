const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT } = require('./config/server');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Static Files (Resume, etc.)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resume.pdf'));
});

// Routes
app.use('/api', contactRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
