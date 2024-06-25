import "./FloatingButton.css";
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { Add, Call, Sms, WhatsApp } from "@mui/icons-material";
import { useState } from "react";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";

export function FloatingButton(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const sendMessageText = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="FloatingButton">
            <Fab
                mainButtonStyles={{ backgroundColor: "#1976D2" }}
                style={AppComponentsStyle.floatingBtnFab}
                icon={<div className="iconWrapper" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <Add fontSize="large" /> : <Sms sx={AppComponentsStyle.floatingBtnSms} />}
                    </div>}
                text={isOpen ? "סגור" : "צור קשר"}
                event="click"
            >
                <a href="https://wa.me/587822048?text=שלום!+הגעתי+מהאתר,+אשמח+לפרטים" target="_blank" rel="noopener noreferrer" onClick={sendMessageText}>
                    <Action
                        about="שלח הודעת טקסט בוואצפ"
                        text="ווצאפ"
                        style={AppComponentsStyle.floatingBtnWtpAction}
                    >
                        <WhatsApp fontSize="large" />
                    </Action>
                </a>
                <a href="tel:0587822048" onClick={sendMessageText}>
                    <Action
                        about="התקשר בשיחת טלפון"
                        text="טלפון"
                        style={AppComponentsStyle.floatingBtnTelAction}
                        onClick={sendMessageText}
                    >
                        <Call fontSize="large" />
                    </Action>
                </a>
            </Fab>
        </div>
    );
}
