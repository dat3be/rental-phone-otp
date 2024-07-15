const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000; // Bạn có thể thay đổi cổng nếu cần

app.use(cors());

app.get('/api/service/getv2', async (req, res) => {
  try {
    const response = await axios.get('https://api.viotp.com/service/getv2', {
      params: {
        token: 'e294527c11ab48d99a90563fea32d4c3',
        country: 'vn'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu từ API' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server đang chạy tại http://localhost:${port}`);
});
