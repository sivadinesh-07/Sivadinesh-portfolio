const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// ─── Send Contact Message ────────────────────────────────────────────────────
const sendMessage = async (req, res) => {
    const { name, email, message } = req.body;

    // Basic presence check (Mongoose handles detailed validation)
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'Please provide name, email, and message.',
        });
    }

    try {
        // 1. Save to MongoDB
        const newMessage = await Message.create({ name, email, message });

        // 2. Send notification email (optional — only runs if SMTP env vars are set)
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await sendNotificationEmail({ name, email, message });
        }

        res.status(201).json({
            success: true,
            message: 'Your message has been received! I will get back to you soon.',
            data: { id: newMessage._id },
        });
    } catch (error) {
        // Handle Mongoose validation errors gracefully
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((e) => e.message);
            return res.status(400).json({ success: false, error: errors.join(', ') });
        }
        console.error('❌ Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error. Please try again later.',
        });
    }
};

// ─── Nodemailer Helper ────────────────────────────────────────────────────────
const sendNotificationEmail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS, // Use an App Password, not your real password
        },
    });

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `📩 New Portfolio Message from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #6c63ff, #4a90e2); padding: 24px; text-align: center;">
                    <h2 style="color: #fff; margin: 0;">New Portfolio Inquiry</h2>
                </div>
                <div style="padding: 28px;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="border-left: 4px solid #6c63ff; margin: 0; padding: 12px 16px; background: #f9f9f9; border-radius: 4px; color: #333;">
                        ${message.replace(/\n/g, '<br>')}
                    </blockquote>
                </div>
                <div style="background: #f5f5f5; padding: 12px; text-align: center; font-size: 12px; color: #888;">
                    Sent via Sivadinesh R — Portfolio Contact Form
                </div>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
};

// ─── Get All Messages (admin use) ────────────────────────────────────────────
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: messages.length, data: messages });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error.' });
    }
};

module.exports = { sendMessage, getMessages };
