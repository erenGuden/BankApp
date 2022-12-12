import Home from "./components/Home";
import Login from "./components/Login";
import NotProtectedRoute from "./routes/NotProtectedRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountDetails from "./components/AccountDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/account-details" element={<AccountDetails />} />
        </Route>
        <Route element={<NotProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
