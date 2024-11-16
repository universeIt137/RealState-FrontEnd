import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/clientSide/home-page/HomePage";
import BookingPage from "../pages/clientSide/booking-page/BookingPage";
import Career from "../pages/clientSide/home-page/Career";
import RealEstateAd from "../pages/clientSide/home-page/Offer";
import Contact from "../components/clientSide/Contact";
import CompanyProfilePage from "../pages/clientSide/company-profile-page/CompanyProfilePage";
import MissionVision from "../pages/clientSide/mission-and-vission/MissionVisionPage";
import CorporateStructurePage from "../pages/clientSide/corporate-structure/CorporateStructurePage";
import CSRPage from "../pages/clientSide/corporate-responsibility-page/CorporateResponsibilityPage";
import CertificationPage from "../pages/clientSide/certification-page/CertificationPage";
import VideoGalleryPage from "../pages/clientSide/video-gallery-page/VideoGalleryPage";
import CareerDetailsPage from './../pages/clientSide/carrer-page/CareerDetailsPage';
import ProjectDetails from "../pages/clientSide/project-details-page/ProjectDetails";
import ImageGallery from './../pages/clientSide/image-gallery-page/ImageGallery';
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/adminSide/dasboard/Dashboard";
import ManageContent from "../pages/adminSide/websiteContentRelatedPages/ManageContent";
import ClientReview from "../components/clientSide/ClientReview";
import AboutUs from './../pages/clientSide/about-us-page/AboutUs';
import ChairmanSpeachDrop from "../components/clientSide/ChairmanSpeachDrop";



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
                element : <ClientReview></ClientReview>
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
            ,
            {
                path : "project-details",
                element : <ProjectDetails></ProjectDetails>
            },
            {
                path : "image-gallery",
                element : <ImageGallery></ImageGallery>
            },
            {
                path : "about-us",
                element : <AboutUs></AboutUs>
            },
            {
                path : "chairman-speech",
                element : <ChairmanSpeachDrop></ChairmanSpeachDrop>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "add-content",
                element: <ManageContent></ManageContent>
            }
        ]
    }

    
]);