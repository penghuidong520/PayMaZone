import { Link } from "react-router-dom"

const Footer = () => {

    const handleTop = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer-container-outer">
            <div className="footer-top" onClick={handleTop} >
                <span>
                    Back to top
                </span>
            </div>
            <div className="footer-container">
                <div className="footer-container-inner">
                    <div className="footer-category" >
                        <span className="footer-title">Get to Know Us</span>
                        <div className="footer-list">
                            <a className="home-footer-links" href="https://github.com/penghuidong520" target="_blank">
                                <i className="fa-brands fa-square-github">&nbsp; &nbsp; </i>
                                Github
                            </a>
                            <a href="https://www.linkedin.com/in/penghui-dong-4007b816a/" target="_blank" className="home-footer-links">
                                <i className="fa-brands fa-linkedin footer-icons">&nbsp; &nbsp;</i>
                                LinkedIn
                            </a>
                            <a href="https://angel.co/u/penghui-dong" target="_blank" className="home-footer-links">
                                <i className="fa-brands fa-angellist footer-icons">&nbsp; &nbsp;</i>
                                AngelList
                            </a>
                            <a href="https://penghuidong520.github.io/PortfolioPage/" target="_blank" className="home-footer-links">
                            <i className="fa-solid fa-user">&nbsp; &nbsp;</i>
                                Portfolio
                            </a>
                        </div>
                    </div>
                    <div className="footer-category" >
                        <span className="footer-title">Tech Stack</span>
                        <div className="footer-list" >
                            <a href="https://reactjs.org" className="home-footer-links" target="_blank">React</a>
                            <a href="https://react-redux.js.org" className="home-footer-links" target="_blank">Redux</a>
                            <a href="https://aws.amazon.com/s3/" className="home-footer-links" target="_blank">AWS S3</a>
                            <a href="https://rubyonrails.org/" className="home-footer-links" target="_blank">Ruby on Rails</a>
                            <a href="https://www.postgresql.org/" className="home-footer-links" target="_blank">PostgreSQL</a>
                        </div>
                    </div>
                    <div className="footer-category" >
                        <span className="footer-title">Category List</span>
                        <Link to="/products" className="home-footer-links" >All Products</Link>
                        <Link to="/category/1" className="home-footer-links">Electronics</Link>
                        <Link to="/category/2" className="home-footer-links" >Health & Household</Link>
                        <Link to="/category/3" className="home-footer-links" >Sports</Link>
                        <Link to="/category/4" className="home-footer-links" >Pet Supplies</Link>
                        <Link to="/category/5" className="home-footer-links" >Games</Link>
                    </div>
                </div>
            </div>
            <div className="home-footer-copyright">
                <span>
                    © 2022 Array Corporation. Made with ♥ by <a href="https://github.com/penghuidong520" target="_blank" className="copyright-link" >Penghui(Payton) Dong</a>. PayMaZone is a fullstack clone of Amazon.
                </span>
            </div>
        </div>

    )
}

export default Footer;
{/* <a href="https://github.com/penghuidong520" target="_blank" className="footer-icon-link">
    <i classNameName="fa-brands fa-github footer-icons"></i>
</a>
<a href="https://www.linkedin.com/in/penghui-dong-4007b816a/" target="_blank" className="footer-icon-link">
    <i class="fa-brands fa-linkedin footer-icons"></i>
</a>
<a href="https://angel.co/u/penghui-dong" target="_blank" className="footer-icon-link">
    <i class="fa-brands fa-angellist footer-icons"></i>
</a>
<a href="https://penghuidong520.github.io/PortfolioPage/" target="_blank" className="footer-link">My Portfolio</a> */}