import useTitle from "../../../Utils/UseTitle";
import imageSource from "../../../Assets/Images/404.gif";
import "./page404.css";

function Page404(): JSX.Element {

    // Set title to the page
    useTitle("מסאג' רפואי 💆 | 404 הדף לא נמצא")
    
    return (
        <div className="page404">
            <img src={imageSource} alt="404 הדף אינו נמצא" />
        </div>
    );
}

export default Page404;
