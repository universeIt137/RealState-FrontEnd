import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import BookingFrom from "../components/booking-from/BookingFrom";
import AboutUs from "../pages/about-page/AboutUs";
import HomePage from "../pages/home-page/HomePage";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <HomePage></HomePage>
            },
            {
                path : "/booking-form",
                element : <BookingFrom></BookingFrom>
            },
            {
                path : "about-us",
                element  : <AboutUs></AboutUs>
            }
        ]
    },

    
]);