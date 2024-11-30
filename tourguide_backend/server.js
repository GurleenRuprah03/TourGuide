const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');
app.use(cors());


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(5000, () => console.log('Server running on port 5000'));


const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
