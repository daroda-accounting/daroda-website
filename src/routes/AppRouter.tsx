import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ContactPage } from "../pages/ContactPage";
import { BookPage } from "../pages/BookPage";
import { TestimonialsPage } from "../pages/TestimonialsPage";
import { SpeechBookingPage } from "../pages/SpeechBookingPage";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "../pages/TermsOfServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "book", element: <BookPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "speech-booking", element: <SpeechBookingPage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "terms-of-service", element: <TermsOfServicePage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}