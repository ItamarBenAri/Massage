import useTitle from "../../../Utils/UseTitle";
import "./LoadingProgressPage.css";

export function LoadingProgressPage(): JSX.Element {
    useTitle("מסאג' רפואי 💆 | טוען...")
    return (
        <div className="LoadingProgressPage">
            <div className="ring">טוען...
                <span></span>
            </div>
        </div>
    );
}
