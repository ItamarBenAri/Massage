
import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../page404/page404";
import { ContactUsPage } from "../../ContactUsArea/ContactUsPage/ContactUsPage";
import { HomePage } from "../../HomeArea/HomePage/HomePage";
import { OurServicesPage } from "../../OurServicesArea/OurServicesPage/OurServicesPage";
import { AboutUsPage } from "../../AboutUsArea/AboutUsPage/AboutUsPage";
import { GalleryPage } from "../../GalleryArea/GalleryPage/GalleryPage";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* App Routes */}
                <Route path="/Massage" element={<HomePage />} />
                <Route path="/Massage/services" element={<OurServicesPage />} />
                <Route path="/Massage/about-us" element={<AboutUsPage />} />                
                <Route path="/Massage/gallery" element={<GalleryPage />} />
                <Route path="/Massage/contact-us" element={<ContactUsPage />} />

                {/* Default Route: */}
                <Route path="/" element={<Navigate to="/Massage" />} />

                {/* Page not found route: */}
                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;
