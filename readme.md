# Mighty MERN app

Admin dashboard with authentication protection and the ability to add new products.

## Usage

Rename the .envexample to .env and add your MONGO_URI

### Install dependencies

```
# Backend deps
npm install

# Frontend deps
cd frontend
npm install
```

### Run Server

```
npm run server
```

### Scenario

- Show a list of products (the products should be fetched from a database). Each product has the following data: SKU, title and image.
- Add the option to add a new product (should be added to the database as well).
- Add the option to edit an existing product (should be edited in the database as well).
- Add the option to remove an existing product (should be removed from the database as well).
- Add a logout button that redirects to the login page.
- Make the page responsive for mobile and desktop devices.
