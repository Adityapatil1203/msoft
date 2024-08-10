const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/user.routes.js');
const cors = require('cors');
const pool = require('./db/db.js'); // Import the connection pool
const formGunhaRoutes = require('./routes/formGunha.routes.js')
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gunha', formGunhaRoutes);

const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Test the database connection to ensure the pool is working
    pool.query('SELECT 1')
        .then(() => console.log('Database pool is connected'))
        .catch(err => {
            console.error('Database connection failed:', err);
            process.exit(1);
        });
});
