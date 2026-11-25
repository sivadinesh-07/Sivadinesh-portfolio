const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
    origin: process.env.CLIENT_ORIGIN || '*', // Set CLIENT_ORIGIN in .env for production
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB before handling database-backed API requests
const ensureDB = async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error('Database connection error in middleware:', error.message);
        res.status(503).json({
            success: false,
            error: 'Database connection unavailable. Please try again later.',
        });
    }
};

// ─── Routes ───────────────────────────────────────────────────────────────────
// Support both /api/contact and /contact (for Vercel rewrites or direct mounting)
app.use('/api/contact', ensureDB, contactRoutes);
app.use('/contact', ensureDB, contactRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: '🚀 Portfolio API is running' });
});

app.get('/api', (req, res) => {
    res.json({ status: 'ok', message: '🚀 Portfolio API is running' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, error: 'Internal server error' });
});

// ─── Start Server (when run directly) ─────────────────────────────────────────
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
