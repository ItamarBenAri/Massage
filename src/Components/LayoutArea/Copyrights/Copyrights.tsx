import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box } from "@mui/material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import "./Copyrights.css";
import { TiktokIcon } from "../../SharedArea/IconsArea/TiktokIcon/TiktokIcon";

function Copyrights(): JSX.Element {
    return (
        <div className="Copyrights">
            <Box
                component="footer"
                sx={AppComponentsStyle.copyrightsMainBox}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                אודות
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                אנחנו מאמינים שלכולם מגיע להרגיש רגועים ומשוחררים. עבורנו, אין דבר משחרר יותר מלבחור איך להירגע ולהתפנק בסוף יום ארוך.
                                <br /><br />
                                לכן, אנחנו הופכים את חוויית המסאג' לפשוטה ונגישה, כך שכל אחד יכול ליהנות מרגעים של שלווה ורגיעה בדרך שנוחה לו.                            
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                צור קשר
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a title="לחץ כדי לשלוח מייל" href="mailto:jarondamari83@gmail.com">מייל: jarondamari83@gmail.com</a>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a title="לחץ כדי להתקשר" href="tel:0587822048">טלפון: 058-782-2048</a>                           
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                עקבו אחרינו
                            </Typography>
                            <Link href="https://www.youtube.com/results?search_query=%D7%99%D7%A8%D7%95%D7%9F+%D7%93%D7%9E%D7%90%D7%A8%D7%99"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                            >
                                <YouTube />
                            </Link>
                            <Link href="https://www.facebook.com/profile.php?id=100044136550811"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                            >
                                <Facebook />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                sx={AppComponentsStyle.copyrightsLink}
                            >
                                <Instagram />
                            </Link>
                            <Link
                                href="https://www.tiktok.com/explore?lang=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                sx={AppComponentsStyle.copyrightsLink}
                            >
                                <TiktokIcon />
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Typography variant="body2" color="text.secondary" align="center">
                            <a href="https://www.linkedin.com/in/itamar-ben-ari-69678b28b/" target="_blank" rel="noopener noreferrer">{"© "} {new Date().getFullYear()} {"איתמר בן ארי, ישראל. כל הזכויות שמורות."}</a>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default Copyrights;