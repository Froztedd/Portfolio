import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure your SMTP transport (replace with your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'hotmail', 'yahoo', or use 'smtp' for custom
    auth: {
      user: 'your.email@gmail.com', // <-- replace with your email
      pass: 'yourpassword',         // <-- replace with your app password or real password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'your.email@gmail.com', // <-- replace with your email
      subject: `Portfolio Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send message.' });
  }
} 