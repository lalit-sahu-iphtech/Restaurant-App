#  Poke Now — Restaurant Ordering Website

A modern, fully responsive restaurant website built with **React** and **Vite**, offering a complete food-ordering experience — from browsing the menu and building a custom poke bowl to checkout, table reservations, gift cards, and order history.

**Repository:** [github.com/lalit-sahu-iphtech/Restaurant-App](https://github.com/lalit-sahu-iphtech/Restaurant-App)

---

## 📖 Overview

Poke Now is a frontend restaurant application focused on delivering a smooth, intuitive food-ordering journey. Users can browse the menu, build their own poke bowl, manage a cart, pick a store location, choose delivery or pickup, check out, track orders, reserve a table, buy gift cards, and manage their profile — all through a clean, mobile-friendly UI.

The app uses the **React Context API** for global state management and **localStorage** for client-side data persistence (no backend required).

---

##  Features

###  Authentication
- Sign in and sign up with form + password validation
- Duplicate email checking
- Auto-login after registration
- Session persistence via `localStorage`
- Logout and protected routes

###  Menu
- Full restaurant menu with category filtering (bowls, drinks, etc.)
- "See All" menu page
- Bestseller and recommended items
- Individual item detail selection

### Custom Poke Bowl Builder
A guided, multi-step flow to build a bowl from scratch:
- Base → Protein → Toppings → Mix-ins → Flavor → Quantity
- Live price calculation as options are selected
- Add the finished custom bowl directly to the cart

###  Cart
- Add, remove, and update item quantities
- Edit customized bowls after adding
- Live cart item counter
- Persistent cart data across sessions

###  Location
- Browse and select store locations
- Delivery or Pickup selection
- Google Maps integration
- Selected location persists into checkout

###  Checkout & Payment
- Order review with edit/delete on cart items
- Voucher support
- Delivery/Pickup selection carried through
- Payment method selection with validation:
  - Card
  - UPI
  - PayPal
  - Cash on Delivery
- Order confirmation screen

###  Orders
- Order history with status
- Reorder previous orders in one click

###  Gift Cards
- Choose an amount and enter sender/recipient details
- Promo code support
- "Send to myself" toggle option

### Table Reservation
- Date and time slot booking
- Login required to book
- Duplicate booking and slot-capacity validation
- Auto-fills name for logged-in users

###  Profile
- View and edit profile (name, email)
- Email duplicate validation
- Logout

###  UI/UX
- Fully responsive (mobile, tablet, desktop)
- Toast notifications, loading and empty states
- Protected routes
- Scroll-to-top on route change
- Responsive navigation bar

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3.1 | UI development |
| Vite | 6.0.0 | Dev server & build tool |
| React Router DOM | 7.0.2 | Client-side routing |
| React Icons | 5.4.0 | Icon library |
| Context API | Built-in React | Global state management |
| localStorage | Browser API | Client-side persistence |
| CSS3 | Standard | Styling & responsiveness |
| ESLint | 9.17.0 | Code quality & linting |
| JavaScript (ES6+) | — | Application logic |

---

##  Project Structure

```text
Restaurant-App/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── img/
│   │   ├── checkoutMenu/
│   │   └── giftImg/
│   │
│   ├── component/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── ProtectedRoute/
│   │   ├── ScrollToTop/
│   │   ├── Toast/
│   │   └── EditItemModal/
│   │
│   ├── context/
│   │   └── ToastContext.jsx
│   │
│   ├── data/
│   │   ├── menuData.js
│   │   └── bowlOptions.js
│   │
│   ├── pages/
│   │   ├── HomePage/
│   │   ├── menuPage/
│   │   ├── SeeAll/
│   │   ├── LocationPage/
│   │   ├── StoreLocation/
│   │   ├── GiftPage/
│   │   ├── CheckoutMenuPage/
│   │   ├── OrderReview/
│   │   ├── Payment/
│   │   ├── ThankYou/
│   │   ├── OrderHistory/
│   │   ├── Profile/
│   │   ├── BookTablePage/
│   │   ├── BowlModalPage/
│   │   ├── AuthPage/
│   │   ├── Auth/
│   │   ├── Cart/
│   │   ├── storyPage/
│   │   ├── Privacypage/
│   │   ├── TermsPage/
│   │   └── SitemapPage/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/lalit-sahu-iphtech/Restaurant-App.git
```

### 2. Navigate into the project
```bash
cd Restaurant-App
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port) — check your terminal output for the exact URL.


---

##  Notes

- This is a **frontend-only** project — all data (cart, auth session, orders, selected location) is persisted in the browser via `localStorage`. Clearing browser storage will reset the app's state.
- Payment methods (Card, UPI, PayPal, COD) are simulated in the UI and are not connected to a real payment gateway.

---

##  Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.
