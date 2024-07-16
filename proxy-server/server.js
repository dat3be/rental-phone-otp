const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const apiToken = 'e294527c11ab48d99a90563fea32d4c3'; // Replace with your actual token

app.get('/api/services', async (req, res) => {
    const { country } = req.query;
    try {
        const response = await axios.get(`https://api.viotp.com/service/getv2?token=${apiToken}&country=${country}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

app.get('/api/networks', async (req, res) => {
    try {
        const response = await axios.get(`https://api.viotp.com/networks/get?token=${apiToken}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch networks' });
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
