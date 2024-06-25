import { useRef } from "react";
import "./HomePage.css";
import { Button } from "@mui/material";
import { ContactUsForm } from "../../ContactUsArea/ContactUsForm/ContactUsForm";
import { OurServicesList } from "../../OurServicesArea/OurServicesList/OurServicesList";
import backMassageImage from "../../../Assets/Images/back-massage.jpg";
import massageOilImage from "../../../Assets/Images/massage-oil.jpg";
import handsMassagesImage from "../../../Assets/Images/hands-massage.jpg";
import massageToolsImage from "../../../Assets/Images/massage-tools.jpg";
import useTitle from "../../../Utils/UseTitle";

export function HomePage(): JSX.Element {
    useTitle("מסאג' רפואי 💆 | דף הבית")
    const contactUsRef = useRef(null);
    const scrollToContactUs = () => contactUsRef.current.scrollIntoView({ block: 'center' });
    return (
        <div className="HomePage">
            <div className="header">
                <div className="headerContent">
                    <h1>ברוכים הבאים למסאג'ים מושלמים</h1>
                    <p>המסאג'ים הכי טובים בעיר</p>
                    <Button onClick={scrollToContactUs} color="warning">צור קשר</Button>
                </div>
            </div>

            <div className="content">
                <h1>מי אנחנו</h1>
                <p>אנו מתמחים במסאג'ים מרגיעים ומשקמים, עם צוות מקצועי ומיומן.</p>
                <p>במכון שלנו תוכלו ליהנות ממגוון טיפולים ייחודיים שנועדו לשפר את התחושה הכללית ואת הבריאות הפיזית שלכם.</p>
                <p>בואו ליהנות מחוויה בלתי נשכחת של רוגע ופינוק.</p>
            </div>

            <div className="parallax1"></div>

            <div className="ourServicesContent">
                <h1>השירותים שלנו</h1>
                <OurServicesList limit={5} />
            </div>

            <div className="parallax2"></div>

            <div className="content">
                <h1>הגלריה שלנו</h1>
                <div className="images">
                    <img src={backMassageImage} alt="מסאג' גב" />
                    <img src={massageOilImage} alt="שמן מסאג'" />
                    <img src={handsMassagesImage} alt="מסאג' ידיים" />
                    <img src={massageToolsImage} alt="כלים למסאג'" />
                </div>
            </div>

            <div className="parallax3"></div>

            <div ref={contactUsRef}>
                <ContactUsForm />
            </div>

            <div className="parallax4"></div>
        </div>
    );
}
