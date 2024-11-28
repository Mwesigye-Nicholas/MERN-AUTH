# 🛡️ Authentication API

Welcome to the **Authentication API** built with **Node.js**, **Express**, and **MongoDB**. This API offers a robust solution for user authentication, including registration, login, and profile management.

## 🌟 Features

- **User Registration:** Create a new user account.
- **User Authentication:** Log in and receive a JWT.
- **User Logout:** Clear authentication cookies.
- **Profile Management:** View and update user profiles.
- **Error Handling:** Comprehensive error handling middleware.

## 📦 Getting Started

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (14.x or later)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### ⚡ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mwesigye-Nicholas/MERN-AUTH
   ```

2. Navigate into the project directory:

   ```bash
   cd server.js
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add your configuration settings:
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### 🚀 Running the API

Start the server:

```bash
npm start
```

Your API will be running on `http://localhost:5000`.

## 📄 API Endpoints

### User Routes

| Method | Endpoint             | Description                       |
| ------ | -------------------- | --------------------------------- |
| POST   | `/api/users`         | Register a new user               |
| POST   | `/api/users/auth`    | Authenticate a user and get token |
| POST   | `/api/users/logout`  | Log out the user and clear cookie |
| GET    | `/api/users/profile` | Retrieve user profile             |
| PUT    | `/api/users/profile` | Update user profile               |

### 📜 Sample Requests

#### Register a New User

```bash
curl -X POST http://localhost:5000/api/users \
-H "Content-Type: application/json" \
-d '{"username": "exampleUser", "password": "examplePass"}'
```

#### Authenticate User

```bash
curl -X POST http://localhost:5000/api/users/auth \
-H "Content-Type: application/json" \
-d '{"username": "exampleUser", "password": "examplePass"}'
```

#### Logout User

```bash
curl -X POST http://localhost:5000/api/users/logout \
-H "Content-Type: application/json" \
-C "your_cookie_here"
```

#### Get User Profile

```bash
curl -X GET http://localhost:5000/api/users/profile \
-C "your_cookie_here"
```

#### Update User Profile

```bash
curl -X PUT http://localhost:5000/api/users/profile \
-H "Content-Type: application/json" \
-C "your_cookie_here" \
-d '{"username": "updatedUser", "email": "newemail@example.com"}'
```

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)

## 🤝 Contributing

Contributions are welcome! Please open a pull request or issue if you have suggestions or improvements.

## 📫 Contact

For any inquiries, you can reach me at [nicholastoshack@gmail.com]
