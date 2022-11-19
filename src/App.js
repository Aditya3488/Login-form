import "./styles.css";
import Layout from "./Components/pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import LoginReg from "./Components/pages/auth/LoginReg";
import SendPasswordResetEmail from "./Components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./Components/pages/auth/ResetPassword";
import Dashboard from "./Components/pages/auth/Dashboard";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<LoginReg />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
