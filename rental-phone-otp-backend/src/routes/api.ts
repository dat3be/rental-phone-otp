import { Router } from 'express';
import axios from 'axios';
import { API_TOKEN } from '../config/env';

const router = Router();

router.post('/getServices', async (req, res) => {
    const { country } = req.body;
    try {
        const response = await axios.get(`https://api.viotp.com/service/getv2?token=${API_TOKEN}&country=${country}`);
        res.json({ services: response.data.data });
    } catch (error) {
        res.status(500).send('Error fetching services');
    }
});

router.post('/rentPhone', async (req, res) => {
    const { serviceId, country, network, prefix, exceptPrefix, number } = req.body;

    let url = `https://api.viotp.com/request/getv2?token=${API_TOKEN}&serviceId=${serviceId}&country=${country}`;
    if (network) url += `&network=${network}`;
    if (prefix) url += `&prefix=${prefix}`;
    if (exceptPrefix) url += `&exceptPrefix=${exceptPrefix}`;
    if (number) url += `&number=${number}`;

    try {
        const response = await axios.get(url);
        const data = response.data.data;
        const rentedPhone = {
            serviceId,
            price: 1400, // Example price, replace with actual if needed
            phoneNumber: data.phone_number,
            code: '---',
            dateTime: new Date(),
            status: 'Đợi tin nhắn',
            message: '---',
        };
        res.json({ rentedPhone });
    } catch (error) {
        res.status(500).send('Error renting phone number');
    }
});

export default router;
