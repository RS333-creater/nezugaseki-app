const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // nodemailerの設定（Gmail例。必要に応じて編集してください）
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_EMAIL@gmail.com', // 送信元メールアドレス
      pass: 'YOUR_APP_PASSWORD'     // アプリパスワード
    }
  });

  const mailOptions = {
    from: '@yahoo.co.jp', // 認証したアドレス
    to: email, // フォームで入力されたアドレス
    subject: '自動返信メール',
    text: `お名前: ${name}\nメール: ${email}\n電話番号: ${phone}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: '送信成功' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '送信失敗', error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 