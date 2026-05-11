const express = require('express');
const Unblocker = require('unblocker');
const app = express();

// Initialize the unblocker with a prefix for proxy URLs
const unblocker = new Unblocker({ prefix: '/proxy/' });

app.use(unblocker);

app.get('/', (req, res) => {
    res.send('Your Web Unblocker is running! Visit /proxy/https://google.com to test.');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}).on('upgrade', unblocker.onUpgrade);
