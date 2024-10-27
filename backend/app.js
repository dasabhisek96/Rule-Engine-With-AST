const express = require('express');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/ruleRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/rules', ruleRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

