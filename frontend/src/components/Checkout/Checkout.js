
const Checkout = () => {
    return (
        <div className="checkout-container">
            <div className="checkout-inner-container" >
                <h1 className="checkout-header">Thank you for shopping at PayMaZone</h1>
                <span className="checkout-span checkout-span-note" >Your cart has been cleared</span>
                {/* <br /> */}
                <span className="checkout-span checkout-span-note" >PayMaZone will provide best quality of services</span>
                {/* <br/> */}
                <span className="checkout-span checkout-portfolio" >If you would like to know more about me</span>
                {/* <br/> */}
                <span className="checkout-span checkout-portfolio" >Checkout &nbsp;
                    <a href="https://penghuidong520.github.io/PortfolioPage/" target="_blank" id="checkout-portfolio-link" >My Portfolio</a> 
                </span>

            </div>
        </div>
    )
}

export default Checkout;