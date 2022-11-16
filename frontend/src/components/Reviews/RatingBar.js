const RatingBar = ({reviews}) => {
    return (
        <div className="rating-bar-container">
            <div className="rating-bar">
                <span>5 star</span>
                <div className="bar">
                    <div className="bar-fill"></div>
                </div>
            </div>
            <div className="rating-bar">
                <span>4 star</span>
                <div className="bar">
                    <div className="bar-fill"></div>
                </div>
            </div>
            <div className="rating-bar">
                <span>3 star</span>
                <div className="bar">
                    <div className="bar-fill"></div>
                </div>
            </div>
            <div className="rating-bar">
                <span>2 star</span>
                <div className="bar">
                    <div className="bar-fill"></div>
                </div>
            </div>
            <div className="rating-bar">
                <span>1 star</span>
                <div className="bar">
                    <div className="bar-fill"></div>
                </div>
            </div>
                
        </div>
    )
}

export default RatingBar;