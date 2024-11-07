import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/clientSide/home-page/HomePage";
import BookingPage from "../pages/clientSide/booking-page/BookingPage";
import Career from "../pages/clientSide/home-page/Career";
import RealEstateAd from "../pages/clientSide/home-page/Offer";
import AboutUs from './../components/clientSide/AboutUs';



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
                element : <BookingPage></BookingPage>
            },
            {
                path : "career",
                element : <Career></Career>
            },
            {
                path : "offer",
                element : <RealEstateAd></RealEstateAd>
            },{
                path : "about-us",
                element : <AboutUs></AboutUs>
            }
           
        ]
    },

    
]);