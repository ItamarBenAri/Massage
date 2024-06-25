import { therapiesData } from "../../../Constants/TherapiesData/TherapiesData";
import { OurServicesCard } from "../OurServicesCard/OurServicesCard";
import "./OurServicesList.css";

type OurServicesListProps = {
    limit?: number;
}

export function OurServicesList(props: OurServicesListProps): JSX.Element {
    return (
        <div className="OurServicesList">
			{therapiesData.slice(0, props.limit).map(s => <OurServicesCard key={s.id} service={s} />)}
        </div>
    );
}
