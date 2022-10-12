import { Link } from "react-router-dom";

const SessionFooter = () => {

    return (
        <div className="session-footer-container">
            <div className="footer-links-box">
                <Link className="footer-links" to="#">Condition of my Github</Link>
                <span className="footer-links-separator"/>
                <Link className="footer-links" to="#">Notice of my LinkedIn</Link>
                <span className="footer-links-separator"/>
                <Link className="footer-links" to="#">Help my Career</Link>
            </div>
            <span className="footer-copyright" >© 2022-present, paymazone.com, Amazon Clone Inc.</span>
        </div>
    )

}

export default SessionFooter;