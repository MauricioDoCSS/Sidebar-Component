import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<>products</>} />
        <Route path="/calendar" element={<>calendar</>} />
        <Route path="/suppliers" element={<>suppliers</>} />
        <Route path="/reports" element={<>reports</>} />
        <Route path="/notifications" element={<>notifications</>} />
        <Route path="/settings" element={<>settings</>} />
        <Route path="/support" element={<>support</>} />
      </Route>
    </Routes>
  );
};
