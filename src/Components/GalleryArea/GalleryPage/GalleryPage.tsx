import "./GalleryPage.css";
import backMassageImage from "../../../Assets/Images/back-massage.jpg";
import massageOilImage from "../../../Assets/Images/massage-oil.jpg";
import handsMassagesImage from "../../../Assets/Images/hands-massage.jpg";
import massageToolsImage from "../../../Assets/Images/massage-tools.jpg";
import { Collections } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import useTitle from "../../../Utils/UseTitle";

export function GalleryPage(): JSX.Element {
    useTitle("מסאג' רפואי 💆 | גלרייה")
    return (
        <div className="GalleryPage">
            <h1>
                <Box sx={AppComponentsStyle.header}>
                    <Typography variant="h3" component="span" sx={AppComponentsStyle.headerText}>
                        <Collections fontSize="large" sx={AppComponentsStyle.headerIcon} />
                        &nbsp;הגלריה שלנו
                    </Typography>
                </Box>
            </h1>
            <div className="responsive">
                <div className="gallery">
                    <img src={backMassageImage} alt="מסאג' גב" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>


            <div className="responsive">
                <div className="gallery">
                    <img src={massageOilImage} alt="שמן מסאג'" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <img src={handsMassagesImage} alt="מסאג' ידיים" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <img src={massageToolsImage} alt="כלים למסאג'" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={backMassageImage} alt="מסאג' גב" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>


            <div className="responsive">
                <div className="gallery">
                    <img src={massageOilImage} alt="שמן מסאג'" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <img src={handsMassagesImage} alt="מסאג' ידיים" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <img src={massageToolsImage} alt="כלים למסאג'" width="600" height="400" />
                    <div className="desc">ראובן סיוון אסף ממילון בן־יהודה את כל המילים המסומנות בסימן המיוחד לחידושיו ופרסמן במאמר.</div>
                </div>
            </div>

            <div className="clearfix"></div>
        </div>
    );
}
