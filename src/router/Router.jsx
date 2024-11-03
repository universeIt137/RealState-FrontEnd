import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import BookingFrom from "../components/booking-from/BookingFrom";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/booking-form",
                element : <BookingFrom></BookingFrom>
            },
        ]
    },

    
]);