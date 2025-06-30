import express from 'express';
import db from '../../db.js';
import bcrypt from 'bcrypt';

const router = express.Router();


router.post('/create-admin', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await db.execute('INSERT INTO admins (username, password_hash) VALUES (?, ?)', [username, hash]);
  res.send('Admin created');
});


// POST /api/admins/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.execute('SELECT * FROM admins WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const admin = rows[0];
    const match = await bcrypt.compare(password, admin.password_hash);

    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // optionally: generate JWT here
    res.json({ message: 'Login successful', admin: { id: admin.id, username: admin.username } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
