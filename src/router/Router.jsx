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
import UpdateContent from "../pages/adminSide/websiteContentRelatedPages/UpdateContent";
import ManageChairman from "../pages/adminSide/chairmainRelatedPages/ManageChairman";
import UpdateChairman from "../pages/adminSide/chairmainRelatedPages/UpdateChairman";
import ManageProjectOverview from "../pages/adminSide/projectOverviewRelatedPage/ManageProjectOverview";
import ManageFeaturePage from "../pages/adminSide/projectFeatureRelatedPage/ManageFeaturePage";
import AboutUs from './../pages/clientSide/about-us-page/AboutUs';
import ChairmanSpeachDrop from "../components/clientSide/ChairmanSpeachDrop";
import BlogDetails from "../pages/clientSide/blog-details-page/BlogDetails";
import AddReview from "../pages/adminSide/reviewRelatedPages/AddReview";
import ManageAboutUs from "../pages/adminSide/aboutPageRelated/ManageAboutUs";
import UpdateAboutUs from "../pages/adminSide/aboutPageRelated/UpdateAboutUs";
import UpdateReview from "../pages/adminSide/reviewRelatedPages/UpdateReview";
import UploadFrom from "../pages/adminSide/whyBestProjectPages/UploadFrom";
import UpdateForm from "../pages/adminSide/whyBestProjectPages/UpdateForm";
import ScheduleList from "../pages/adminSide/schedule/ScheduleList";
import ClientReviewDropDown from "../components/clientSide/ClientReviewDropDown";
import AddCSR from "../pages/adminSide/csrRelatedPages/AddCSR";
import ManageCSR from "../pages/adminSide/csrRelatedPages/ManageCSR";
import UpdateCSR from "../pages/adminSide/csrRelatedPages/UpdateCSR";
import BannerUpload from "../pages/adminSide/bannerRelatedPage/BannerUpload";
import ManageBannerPage from "../pages/adminSide/bannerRelatedPage/ManageBannerPage";
import BannerUpdatePage from "../pages/adminSide/bannerRelatedPage/BannerUpdatePage";
import AddCertificate from "../pages/adminSide/certificateRelatedPages/AddCertificate";
import ManageCertificate from "../pages/adminSide/certificateRelatedPages/ManageCertificate";
import UpdateCertificate from "../pages/adminSide/certificateRelatedPages/UpdateCertificate";
import ManageOffer from "../pages/adminSide/offerRelatedPages/ManageOffer";
import UploadVideo from "../pages/adminSide/videoGalleryRelatedPage/UploadVideo";
import ManageVideoGallery from "../pages/adminSide/videoGalleryRelatedPage/ManageVideoGallery";
import AddCareer from "../pages/adminSide/careerRelatedPages/AddCareer";
import ManageCareer from "../pages/adminSide/careerRelatedPages/ManageCareer";
import UpdateCareer from "../pages/adminSide/careerRelatedPages/UpdateCareer";
import ApplyForm from "../pages/clientSide/carrer-page/ApplyForm";
import VideoGalleryUpdate from "../pages/adminSide/videoGalleryRelatedPage/VideoGalleryUpdate";
import UploadImg from "../pages/adminSide/imgGalleryRelatedPage/UploadImg";
import UpdateImg from "../pages/adminSide/imgGalleryRelatedPage/UpdateImg";
import ManageApply from "../pages/adminSide/careerRelatedPages/ManageApply";



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
                element : <ClientReviewDropDown></ClientReviewDropDown>
            }
            ,
            {
                path : "video-gallery",
                element : <VideoGalleryPage></VideoGalleryPage>
            },
            {
                path:"career-details/:id",
                element:<CareerDetailsPage></CareerDetailsPage>
            }
            ,
            {
                path: "apply-form/:id",
                element: <ApplyForm></ApplyForm>
            },
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
            },
            {
                path : "blog-details/:id",
                element : <BlogDetails></BlogDetails>
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
            },
            {
                path: "update-content/:id",
                element: <UpdateContent></UpdateContent>
            },
            {
                path: "add-chairman",
                element: <ManageChairman></ManageChairman>
            },
            {
                path: "update-chairman/:id",
                element: <UpdateChairman></UpdateChairman>
            },

            {
                path: "add-overview",
                element: <ManageProjectOverview></ManageProjectOverview>
            },
            {
                path: "add-features",
                element: <ManageFeaturePage></ManageFeaturePage>
            },
            {
                path: "add-review",
                element: <AddReview></AddReview>
            },
            {
                path: "update-review/:id",
                element: <UpdateReview></UpdateReview>
            },
            {
                path: "manage-aboutPage",
                element: <ManageAboutUs></ManageAboutUs>
            },
            {
                path: "update-about/:id",
                element: <UpdateAboutUs></UpdateAboutUs>
            },
            {
                path : "best-upload-form",
                element : <UploadFrom></UploadFrom>
            },
            {
                path : "update/:id",
                element : <UpdateForm></UpdateForm>
            },
            {
                path : "schedule-list",
                element : <ScheduleList></ScheduleList>
            },
            // csr related routes 
            {
                path: "add-csr",
                element: <AddCSR></AddCSR>
            },
            {
                path: "manage-csr",
                element: <ManageCSR></ManageCSR>
            },
            {
                path: "update-csr/:id",
                element: <UpdateCSR></UpdateCSR>
            },
            {
                path :  "banner-upload",
                element : <BannerUpload></BannerUpload>
            },
            {
                path :  "manage-banner",
                element : <ManageBannerPage></ManageBannerPage>
            },
            {
                path : "update-banner/:id",
                element : <BannerUpdatePage></BannerUpdatePage>
            },
            // certificate related routes 
            {
                path: "add-certificate",
                element: <AddCertificate></AddCertificate>
            },
            {
                path: "manage-certificate",
                element: <ManageCertificate></ManageCertificate>
            },
            {
                path: "update-certificate/:id",
                element: <UpdateCertificate></UpdateCertificate>
            },
            // offer related routes 
            {
                path: "manage-offer",
                element: <ManageOffer></ManageOffer>
            },
            // video gallery related api
            {
                path : "upload-video",
                element : <UploadVideo></UploadVideo>
            },
            {
                path : "video-update/:id",
                element : <VideoGalleryUpdate></VideoGalleryUpdate>
            },
            {
                path : "manage-video",
                element : <ManageVideoGallery></ManageVideoGallery>
            },
            // img gallery related routes
            {
                path : "img-upload",
                element : <UploadImg></UploadImg>
            },
            {
                path : "img-update/:id",
                element : <UpdateImg></UpdateImg>
            },
            // career related routes 
            {
                path: "add-career",
                element: <AddCareer></AddCareer>
            },
            {
                path: "manage-career",
                element:<ManageCareer></ManageCareer>
            },
            {
                path: "update-career/:id",
                element: <UpdateCareer></UpdateCareer>
            },
            // apply related routes 
            {
                path: "manage-apply",
                element: <ManageApply></ManageApply>
            }
            
        ]
    }

    
]);