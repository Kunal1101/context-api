# React Context API & React Router Project

## 🚀 Project Overview

This is a React project that demonstrates the use of **Context API** for state management and **React Router** for navigation.

### 🔹 Features

✔ User lands on the **Home Page**.  
✔ Navigates to the **Register Form**.  
✔ Submits the form, and data is stored using **Context API**.  
✔ Redirects to the **Dashboard**, where the submitted data is displayed.

---

## 📂 Project Structure

```
📦 my-react-app
├── 📂 src
│   ├── 📂 Components
│   │   ├── 📄 App.jsx
│   │   ├── 📄 Register.jsx
│   │   ├── 📄 Dashboard.jsx
│   ├── 📂 Context
│   │   ├── 📄 UserContextProvider.jsx
│   ├── 📄 index.js
│   ├── 📄 styles.css
├── 📄 package.json
├── 📄 README.md
```

---

## ⚙ Technologies Used

- **React** – Core library
- **React Router** – For navigation
- **Context API** – To manage global state
- **Tailwind** – For UI

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Kunal1101/context-api
cd context-api
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Development Server

```sh
npm start
```

The app will run at **http://localhost:3000/**.

---

## 🚦 Project Flow

### 1️⃣ Home Page (`/`)

- Users land on the home page, which acts as the entry point.
- Users navigate to the **Register Page** to fill out the form.

### 2️⃣ Register Page (`/register`)

- Users enter their **first name, last name, email, and age**.
- Data is stored in **React Context API**.
- After submission, the user is **redirected to the Dashboard**.

### 3️⃣ Dashboard Page (`/dashboard`)

- Displays the submitted **user details** using **Context API**.
- If no data is found, it shows **"Data not found."**

---

## 🔧 Key Code Implementations

### 🌐 React Router Setup (`index.js`)

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import App from "./Components/App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Register />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

---

### 🗂 Context API for State Management (`UserContextProvider.jsx`)

```jsx
import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userAge, setUserAge] = useState(null);

  const setUserData = (userData) => {
    if (userData) {
      setUserFirstName(userData.firstName);
      setUserLastName(userData.lastName);
      setUserEmail(userData.email);
      setUserAge(userData.age);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userFirstName,
        userLastName,
        userEmail,
        userAge,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

## 🙌 Contributing

Feel free to fork this repo and submit **pull requests**! 🎉

### ⭐ Happy Coding! 🚀
