import { MedicalServices } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import { OurServicesList } from "../OurServicesList/OurServicesList";
import "./OurServicesPage.css";
import useTitle from "../../../Utils/UseTitle";

export function OurServicesPage(): JSX.Element {
    useTitle("מסאג' רפואי 💆 | השירותים שלנו")
    return (
        <div className="OurServicesPage">
            <h1>
                <Box sx={AppComponentsStyle.header}>
                    <Typography variant="h3" component="span" sx={AppComponentsStyle.headerText}>
                        <MedicalServices fontSize="large" sx={AppComponentsStyle.headerIcon} />
                        &nbsp;השירותים שלנו
                    </Typography>
                </Box>
            </h1>
            <OurServicesList />
        </div>
    );
}
