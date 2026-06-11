# URI Shortener Service

## Overview

URI Shortener Service is a RESTful API built using Node.js, Express.js, MongoDB Atlas, and Mongoose. The application allows users to generate shortened URLs, redirect to the original URLs, and track URL usage statistics.

## Features

* Shorten long URLs into unique short codes
* Redirect users to the original URL
* Track the number of clicks for each shortened URL
* Store URL data in MongoDB Atlas
* RESTful API architecture
* Unique short code generation using NanoID

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* NanoID
* Dotenv

## Project Structure

```text
URI-Shortener-Service/
│
├── src/
│   ├── controllers/
│   │   └── urlController.js
│   │
│   ├── models/
│   │   └── Url.js
│   │
│   ├── routes/
│   │   └── urlRoutes.js
│   │
│   └── server.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd URI-Shortener-Service
```

3. Install dependencies

```bash
npm install
```

4. Configure environment variables

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

5. Start the server

```bash
npm run dev
```

## API Endpoints

### Create Short URL

**POST**

```http
/shorten
```

Request Body:

```json
{
  "originalUrl": "https://google.com"
}
```

Response:

```json
{
  "message": "Short URL created",
  "shortCode": "VvmXTT"
}
```

---

### Redirect URL

**GET**

```http
/:shortCode
```

Example:

```http
/VvmXTT
```

Redirects to the original URL.

---

### URL Statistics

**GET**

```http
/stats/:shortCode
```

Example:

```http
/ stats/VvmXTT
```

Response:

```json
{
  "originalUrl": "https://google.com",
  "shortCode": "VvmXTT",
  "clicks": 1
}
```

## Database Schema

| Field       | Type   | Description           |
| ----------- | ------ | --------------------- |
| originalUrl | String | Original long URL     |
| shortCode   | String | Generated unique code |
| clicks      | Number | Number of redirects   |

## Future Enhancements

* Custom short URLs
* URL expiration
* User authentication
* QR code generation
* Advanced analytics dashboard

## Author

Advaita Praveen Kumar Parikkal

## License

This project is developed for internship and learning purposes.
