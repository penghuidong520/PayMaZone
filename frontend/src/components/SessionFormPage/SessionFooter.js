import { Link } from "react-router-dom";

export const noteLinkGit = <a className="footer-links" href="https://github.com/penghuidong520" >Github</a>
export const noteLinkLinkedIn = <a className="footer-links" href="https://www.linkedin.com/in/penghui-dong-4007b816a/">Personal LinkedIn</a>


const SessionFooter = () => {

    return (
        <div className="session-footer-container">
            <div className="session-footer-divider" />
            <div className="footer-links-box">
                <a className="footer-links" href="https://github.com/penghuidong520">Condition of my Github</a>
                <span className="footer-links-separator"/>
                <a className="footer-links" href="https://www.linkedin.com/in/penghui-dong-4007b816a/">Notice my LinkedIn</a>
                <span className="footer-links-separator"/>
                <Link className="footer-links" to="#">Help my Career</Link>
            </div>
            <span className="footer-copyright" >© 2022-present, paymazone.com, Amazon Clone Inc.</span>
        </div>
    )

}

export default SessionFooter;