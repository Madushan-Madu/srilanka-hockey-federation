const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS for all routes

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import Routes
const newsRoutes = require('./routes/newsRoutes');
const tournamentRoutes = require('./routes/tournamentRoutes');
const associationRoutes = require('./routes/associationRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const officialsRoutes = require('./routes/officialsRoutes');
const authRoutes = require('./routes/authRoutes'); // For potential admin login

// Use Routes
app.use('/api/news', newsRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/associations', associationRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/officials', officialsRoutes);
app.use('/api/auth', authRoutes); // Admin authentication

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});