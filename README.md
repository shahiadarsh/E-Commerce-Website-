# E-Commerce Application

This is a React-based e-commerce application with authentication, admin, shopping functionalities, and a backend server using Express and MongoDB.

## Features
- User authentication (Login/Register)
- Admin dashboard with product, order, and feature management
- Shopping layout with home, listing, checkout, and account pages
- Payment integration with PayPal
- Protected routes with authentication checks
- Redux for state management
- REST API backend with Express and MongoDB

## Tech Stack
- React
- React Router
- Redux Toolkit
- Tailwind CSS
- PayPal Integration
- Express.js
- MongoDB

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   npm install
   cd server
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run server
   ```
4. Start the development frontend server:
   ```sh
   npm start
   ```

## Folder Structure
```
/
  ├── server
  │   ├── routes
  │   ├── models
  │   ├── server.js
  ├── src
  │   ├── components
  │   │   ├── auth
  │   │   ├── admin-view
  │   │   ├── shopping-view
  │   │   ├── common
  │   ├── pages
  │   │   ├── auth
  │   │   ├── admin-view
  │   │   ├── shopping-view
  │   │   ├── not-found
  │   ├── store
  │   ├── App.jsx
  │   ├── index.js
```

## API Endpoints
### Authentication
- `POST /api/auth/login` - Login user
- `POST /api/auth/register` - Register user

### Admin
- `GET /api/admin/products` - Fetch all products
- `GET /api/admin/orders` - Fetch all orders

### Shopping
- `GET /api/shop/products` - Fetch products
- `POST /api/shop/cart` - Manage shopping cart
- `POST /api/shop/address` - Manage user addresses
- `POST /api/shop/order` - Place an order
- `GET /api/shop/search` - Search for products
- `POST /api/shop/review` - Submit a product review

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
