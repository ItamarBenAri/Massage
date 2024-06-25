import useTitle from "../../../Utils/UseTitle";
import { ContactUsForm } from "../ContactUsForm/ContactUsForm";
import "./ContactUsPage.css";

export function ContactUsPage(): JSX.Element {
    useTitle("מסאג' רפואי 💆 | צור קשר")
    return (
        <div className="ContactUsPage">
            <ContactUsForm />
        </div>
    );
}
