import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BlogPage,
  BlogsPage,
  ContactUsPage,
  HomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
} from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
