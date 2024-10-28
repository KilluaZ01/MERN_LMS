import AuthPage from "./pages/auth";
import { Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}
