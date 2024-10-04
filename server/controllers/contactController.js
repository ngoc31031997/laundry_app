const db = require('../config/firebase');

// API endpoint để xử lý form liên hệ
const handleContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Kiểm tra thông tin đầu vào
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin.' });
  }

  try {
    // Lưu thông tin vào Firestore
    await db.collection('contacts').add({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return res.status(201).json({ message: 'Thông tin đã được gửi thành công!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ error: 'Đã xảy ra lỗi khi gửi thông tin.' });
  }
};

module.exports = { handleContactForm };
