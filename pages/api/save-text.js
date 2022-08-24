const fs = require('fs');

export default function handler(req, res) {
    const text = req.body.text;
    console.log(text);
    //open the file and write the text to it
    fs.writeFile('./save-text.txt', text, (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(200).json({ text: 'success' });
        }
    });
}