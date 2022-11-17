const RatingBar = ({reviews}) => {
    let val5, val4, val3, val2, val1;
    val5 = val4 = val3 = val2 = val1 = 0;
    let count5, count4, count3, count2, count1;
    count5 = count4 = count3 = count2 = count1 = 0;
    const total = reviews.length
    reviews.forEach(review => {
        if (review.rating === 5) {count5 += 1; }        
        else if(review.rating === 4){count4 += 1;}                  
        else if (review.rating === 3){ count3 += 1; }                    
        else if (review.rating === 2) { count2 += 1; }       
        else if (review.rating === 1) { count1 += 1; }
    })
    if (reviews.length > 0) {
        val5 = Math.floor((count5 / total)*100);
        val4 = Math.floor((count4 / total)*100);
        val3 = Math.floor((count3 / total)*100);
        val2 = Math.floor((count2 / total)*100);
        val1 = Math.floor((count1 / total)*100);
    }
    return (
        <div className="rating-bar-container">
            <div className="rating-row">
                <span className="rating-text">5 star</span>
                <div className="rating-bar">
                    <div className="fill-percent" style={{width: `${val5}%`}}></div>
                </div>
                <span className="rating-text">{val5}%</span>
            </div>
            <div className="rating-row">
                <span className="rating-text">4 star</span>
                <div className="rating-bar">
                    <div className="fill-percent" style={{width: `${val4}%`}}></div>
                </div>
                <span className="rating-text">{val4}%</span>
            </div>
            <div className="rating-row">
                <span className="rating-text">3 star</span>
                <div className="rating-bar">
                    <div className="fill-percent" style={{width: `${val3}%`}}></div>
                </div>
                <span className="rating-text">{val3}%</span>
            </div>
            <div className="rating-row">
                <span className="rating-text">2 star</span>
                <div className="rating-bar">
                    <div className="fill-percent" style={{width: `${val2}%`}}></div>
                </div>
                <span className="rating-text">{val2}%</span>
            </div>
            <div className="rating-row">
                <span className="rating-text">1 star</span>
                <div className="rating-bar">
                    <div className="fill-percent" style={{width: `${val1}%`}}></div>
                </div>
                <span className="rating-text">{val1}%</span>
            </div>
                
        </div>
    )
}

export default RatingBar;