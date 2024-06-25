import "./AboutUsPage.css";
import backMassageImage from "../../../Assets/Images/back-massage.jpg";
import massageOilImage from "../../../Assets/Images/massage-oil.jpg";
import handsMassagesImage from "../../../Assets/Images/hands-massage.jpg";
import massageToolsImage from "../../../Assets/Images/massage-tools.jpg";
import { Groups } from "@mui/icons-material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import { Box, Typography } from "@mui/material";
import useTitle from "../../../Utils/UseTitle";

export function AboutUsPage(): JSX.Element {
    useTitle("מסאג' רפואי 💆 | אודותינו")
    return (
        <div className="AboutUsPage">
            <h1>
                <Box sx={AppComponentsStyle.header}>
                    <Typography variant="h3" component="span" sx={AppComponentsStyle.headerText}>
                        <Groups fontSize="large" sx={AppComponentsStyle.headerIcon} />
                        &nbsp;אודותינו
                    </Typography>
                </Box>
            </h1>

            <div className="image-text-pair">
                <p>פסקה כוללת משפטים ספורים. גודל מקובל לפסקה נע בין 50 ל-150 מילים. פסקה קצרה מדי עשויה להעיד על רעיון בוסר שלא זכה לפיתוח, ובמצב זה יש לשקול את השמטתה או הרחבתה. פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.</p>
                <img src={backMassageImage} alt="מסאג' גב" />
            </div>

            <div className="image-text-pair">
                <p>פסקה כוללת משפטים ספורים. גודל מקובל לפסקה נע בין 50 ל-150 מילים. פסקה קצרה מדי עשויה להעיד על רעיון בוסר שלא זכה לפיתוח, ובמצב זה יש לשקול את השמטתה או הרחבתה. פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.</p>
                <img src={massageOilImage} alt="שמן מסאג'" />
            </div>

            <div className="image-text-pair">
                <p>פסקה כוללת משפטים ספורים. גודל מקובל לפסקה נע בין 50 ל-150 מילים. פסקה קצרה מדי עשויה להעיד על רעיון בוסר שלא זכה לפיתוח, ובמצב זה יש לשקול את השמטתה או הרחבתה. פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.</p>
                <img src={handsMassagesImage} alt="מסאג' ידיים" />
            </div>

            <div className="image-text-pair">
                <p>פסקה כוללת משפטים ספורים. גודל מקובל לפסקה נע בין 50 ל-150 מילים. פסקה קצרה מדי עשויה להעיד על רעיון בוסר שלא זכה לפיתוח, ובמצב זה יש לשקול את השמטתה או הרחבתה. פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.</p>
                <img src={massageToolsImage} alt="כלים למסאג'" />
            </div>
        </div>
    );
}
