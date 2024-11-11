import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/clientSide/home-page/HomePage";
import BookingPage from "../pages/clientSide/booking-page/BookingPage";
import Career from "../pages/clientSide/home-page/Career";
import RealEstateAd from "../pages/clientSide/home-page/Offer";
import AboutUs from './../components/clientSide/AboutUs';
import Contact from "../components/clientSide/Contact";
import CompanyProfilePage from "../pages/clientSide/company-profile-page/CompanyProfilePage";
import MissionVision from "../pages/clientSide/mission-and-vission/MissionVisionPage";
import CorporateStructurePage from "../pages/clientSide/corporate-structure/CorporateStructurePage";
import CSRPage from "../pages/clientSide/corporate-responsibility-page/CorporateResponsibilityPage";
import CertificationPage from "../pages/clientSide/certification-page/CertificationPage";
import TestimonialCard from "../pages/clientSide/home-page/Reviews";
import VideoGalleryPage from "../pages/clientSide/video-gallery-page/VideoGalleryPage";
import CareerDetailsPage from './../pages/clientSide/carrer-page/CareerDetailsPage';



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
            },{
                path : "contact-us",
                element : <Contact></Contact>
            },
            {
                path : "company-profile",
                element : <CompanyProfilePage></CompanyProfilePage>
            },
            {
                path : "mission",
                element : <MissionVision></MissionVision>
            },
            {
                path : "corporate-structure",
                element : <CorporateStructurePage></CorporateStructurePage>
            },
            {
                path : "corporate-social-responsibility",
                element : <CSRPage></CSRPage>
            }
            ,{
                path : "certification",
                element : <CertificationPage></CertificationPage>
            },
            {
                path : "client-review",
                element : <TestimonialCard></TestimonialCard>
            }
            ,
            {
                path : "video-gallery",
                element : <VideoGalleryPage></VideoGalleryPage>
            },
            {
                path:"career-details",
                element:<CareerDetailsPage></CareerDetailsPage>
            }
           
        ]
    },

    
]);