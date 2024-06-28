import Accessibilik from "accessibility-react-widget";
import Copyrights from "../Copyrights/Copyrights";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";
import { FloatingButton } from "../../SharedArea/FloatingButton/FloatingButton";
import { ScrollToUpButton } from "../../SharedArea/ScrollToUpButton/ScrollToUpButton";
import { Toastify } from "../../SharedArea/Toastify/Toastify";
import { useEffect, useState } from "react";
import { LoadingProgressPage } from "../../SharedArea/LoadingProgressPage/LoadingProgressPage";

function Layout(): JSX.Element {
    const [docReady, setDocReady] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('load', ()=>{
            setDocReady(true);
            alert(process.env.REACT_APP_RECAPTCHA_SITE_KEY);
        });
    }, []);
    return (
        <div className="Layout">
            {!docReady && <LoadingProgressPage />}
            {docReady &&
                <div>
                    <header>
                        <Header />
                    </header>
                    <main>
                        <Routing />
                        <Accessibilik />
                        <FloatingButton />
                        <ScrollToUpButton />
                        <Toastify />
                    </main>
                    <footer>
                        <Copyrights />
                    </footer>
                </div>
            }
        </div>
    );
}

export default Layout;
