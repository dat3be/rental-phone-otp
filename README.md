# Rental Phone OTP Service

This project is a web application for renting phone numbers to receive OTP (One-Time Password) messages. The application allows users to quickly rent phone numbers for various services and provides a history of rentals and top-ups.

## Features

- **Quick Rent**: Rent phone numbers quickly for various services.
- **Payment Methods**: Different payment methods for renting phone numbers.
- **Payment History**: View history of all top-ups and transactions.
- **Service List**: List of available services for renting phone numbers.
- **Account Information**: View and manage account information.
- **Referral Program**: Invite friends and earn rewards.
- **API Documentation**: Documentation for the available APIs.

## Technologies Used

- **Frontend**: React, Ant Design
- **Backend**: Node.js, Express (for proxy server)
- **HTTP Client**: Axios

## Setup and Installation

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/rental-phone-otp.git
    cd rental-phone-otp
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the proxy server:**
    ```bash
    node proxy-server/server.js
    ```

4. **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

## Project Structure

```bash
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── AccountInfo.tsx
│   │   ├── CustomRent.tsx
│   │   ├── FastRent.tsx
│   │   ├── Navbar.tsx
│   │   ├── PaymentHistory.tsx
│   │   ├── PaymentMethods.tsx
│   │   ├── Referral.tsx
│   │   ├── ServiceList.tsx
│   │   ├── Sidebar.tsx
│   │   ├── HistoryRent.tsx
│   │   ├── GeneralHistory.tsx
│   │   ├── Security.tsx
│   │   ├── ApiDocs.tsx
│   ├── css
│   │   ├── style.css
│   │   ├── accountInfo.css
│   │   ├── referral.css
│   ├── pages
│   │   └── RentPhone.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
├── proxy-server
│   └── server.js
├── .gitignore
├── package.json
├── README.md
```

## API

The application uses an external API to fetch available services. To avoid CORS issues, a proxy server is used.

### Proxy Server

The proxy server is set up using Node.js and Express to handle API requests and avoid CORS issues. The proxy server runs on port 4000.

#### Endpoint

- **Get Services**: `/api/service/getv2?token=<your_token>&country=vn`

### Example Usage

To fetch available services, send a GET request to: http://localhost:4000/api/service/getv2?token=e294527c11ab48d99a90563fea32d4c3&country=vn


### Proxy Server Code

The proxy server is defined in `proxy-server/server.js`:

```javascript
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000; // You can change the port if needed

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
    res.status(500).json({ error: 'Error fetching data from API' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
```

Ensure the proxy server is running by executing:
```bash
node proxy-server/server.js
```

## Notes

- Ensure the proxy server is running to avoid CORS issues during development.
- Adjust the API token and endpoint as per your requirements.
- When deploying to production, ensure to configure the server to handle CORS properly or use a backend service to manage API requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


