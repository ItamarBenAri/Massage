import { ArrowCircleUp } from "@mui/icons-material";
import "./ScrollToUpButton.css";
import { useEffect, useRef, useState } from "react";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";

export function ScrollToUpButton(): JSX.Element {

    const [isVisible, setIsVisible] = useState(false);
    const topRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 0) setIsVisible(true);
        else setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => topRef.current.scrollIntoView({ block: 'center' });

    return (
        <div className="ScrollBtn">
            <div className="pageTop" ref={topRef}></div>
            <div className="ScrollToUpButton">
                <div className={`Scroll ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop} title="גלול למעלה">
                    <ArrowCircleUp sx={AppComponentsStyle.scrollToUpBtn} />
                </div>
            </div>
        </div>
    );
}
