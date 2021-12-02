const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utilsinputCheck');

// the post route for the voters
router.post('/vote', ({ body }, res) => {
    const errors = inputCheck(body, 'voter_id', 'candidate_id');
    if (errors) {
        res.status(400).json({ errors: errors });
        return;
    }

    const sql = `INSERT INTO votes (voter_id, candidate_id) VALUES (?,?)`;
    const params = [body.voter_id, body.candidate_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body,
            changes: resultaffectedRows
        });
    });

});

// route for the get vote totals
router.get('/votes', (err, res) => {
    const sql =`SELECT candidates.*, parties.name AS party_name, COUNT(candidate_id) AS count
                FROM votes
                LEFT JOIN candidates ON votes.candidate_id = candidates.id
                LEFT JOIN parties ON candidates.party_id = parties.id
                GROUP BY candidate_id ORDER BY count DESC`

    db.query(sql, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
})

module.exports = router;