import { AdsClick, Call, CheckCircleOutline, HourglassEmpty } from "@mui/icons-material";
import "./OurServicesCard.css";
import { Button, Divider } from "@mui/material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import TherapyModel from "../../../Models/TherapyModel";

type OurServicesCardProps = {
    service: TherapyModel;
};

export function OurServicesCard(props: OurServicesCardProps): JSX.Element {
    return (
        <div className="OurServicesCard">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h3 className="frontTitle">{props.service.name}</h3>
                        <Divider variant="middle" sx={AppComponentsStyle.divider}/>
                        {props.service.areas.map(a => <span key={a}><CheckCircleOutline sx={AppComponentsStyle.cardFrontDetails} />{a}</span>)}
                        <span className="readMore"><AdsClick sx={AppComponentsStyle.cardFrontMoreDetails} />לחץ לפרטים</span>
                    </div>
                    <div className="flip-card-back">
                        <h3 className="backTitle">מחירון טיפול</h3>
                        <Divider variant="middle" sx={AppComponentsStyle.divider} />
                        {props.service.prices.map(p => <span key={p}><HourglassEmpty sx={AppComponentsStyle.cardBackPrice} />{p}</span>)}
                        <a href="tel:0587822048" className="readMore"><Button endIcon={<Call />} color="error">התקשר עכשיו</Button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
