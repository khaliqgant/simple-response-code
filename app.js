const express = require('express');
const app = express();
const PORT = 3009;

app.post('*', (req, res) => {
    const responseCode = 200;
    res.sendStatus(responseCode);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
