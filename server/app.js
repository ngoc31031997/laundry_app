const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { handleContactForm } = require('./controllers/contactController');
require('dotenv').config({ path: './local.env' });// Để đọc các biến môi trường từ .env

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
// Định nghĩa API endpoint sử dụng controller
app.post('/api/contact', handleContactForm);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
