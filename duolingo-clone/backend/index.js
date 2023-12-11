// backend/index.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

app.get('/', (req, res) => {
  res.send('Duolingo Clone Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
