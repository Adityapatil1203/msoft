// server.js
const express = require('express');
const connectDB = require('./db/db.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/user.routes.js')
const cors = require("cors")
dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())
// Routes
app.use('/api/auth', authRoutes );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
