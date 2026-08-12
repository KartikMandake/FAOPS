import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001; // Backend will run on 3001

app.use(cors());
app.use(express.json());

// Connect to SQLite Database (will create the file if it doesn't exist)
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create the table and initialize the counter
    db.run(`CREATE TABLE IF NOT EXISTS visitor_stats (
      id INTEGER PRIMARY KEY,
      total_count INTEGER,
      today_count INTEGER,
      last_updated TEXT
    )`, () => {
      // Check if row exists, if not insert base stats
      db.get(`SELECT * FROM visitor_stats WHERE id = 1`, (err, row) => {
        if (!row) {
          const today = new Date().toISOString().split('T')[0];
          db.run(`INSERT INTO visitor_stats (id, total_count, today_count, last_updated) VALUES (1, 2619, 12, ?)`, [today]);
        }
      });
    });
  }
});

// Helper function to get current date string (YYYY-MM-DD)
const getTodayString = () => new Date().toISOString().split('T')[0];

// Simple SQL query endpoint for frontend
app.get('/api/visitors', (req, res) => {
  const today = getTodayString();

  // First, check if the day has changed to reset the daily counter
  db.get(`SELECT last_updated FROM visitor_stats WHERE id = 1`, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (row && row.last_updated !== today) {
      // It's a new day! Reset today_count to 1 and update date
      db.run(`UPDATE visitor_stats SET today_count = 1, last_updated = ? WHERE id = 1`, [today]);
    } else {
      // Same day, just increment today_count
      db.run(`UPDATE visitor_stats SET today_count = today_count + 1 WHERE id = 1`);
    }

    // Always increment total_count
    db.run(`UPDATE visitor_stats SET total_count = total_count + 1 WHERE id = 1`, () => {
      // Finally, select and return the updated data
      db.get(`SELECT total_count, today_count FROM visitor_stats WHERE id = 1`, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
