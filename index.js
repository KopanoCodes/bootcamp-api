import express from 'express';

import longestWord from './wordWidget.js';
import shortestWord from './wordWidget.js';
import wordLengths from './wordWidget.js';
import totalPhoneBill from './totalPhoneBill.js';
import enoughAirtime from './enoughAirtime.js';

const app = express();

app.use(express.static('public'));

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/wordWidget', (req, res) => {
    const sentence = req.query.sentence;

    if (!sentence) {
        return res.json({
            error: 'Please enter a sentence'
        });
    }

    const result = processSentence(sentence);

    res.json({
        "longestWord": result.longestWord,
        "shortestWord": result.shortestWord,
        "sum": result.wordCount
    });
});


app.post('/api/totalPhoneBill/total', (req, res) => {
    const bill = req.body.bill;

    res.json({
        "total": totalPhoneBill(bill),
    });
});

app.post('/api/enoughAirtime', (req, res) => {
    const usage = req.body.usage;
    const funds = req.body.funds;

    res.json({
        "available": enoughAirtime(usage, funds),
    });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
