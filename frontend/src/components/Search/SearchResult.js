import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearches, getSearches } from "../../store/search";
import SearchResultItem from "./SearchResultItem";


const SearchResult = () => {
    const dispatch = useDispatch();
    const {searchTerm} = useParams();
    const term = searchTerm;
    const results = useSelector(getSearches);
    const resultList = results.map(product => <SearchResultItem key={product.id} product={product} />)

    useEffect(()=>{
        dispatch(fetchSearches(term));
    }, [dispatch, term])

    return (
        <div className="result-container" >
            {resultList.length > 0 && 
                <div className="result-inner">
                    <h1 className="result-header" >RESULTS</h1>
                    {resultList}
                </div>
            }
            {!resultList.length > 0 && 
            <div className="no-result-container">
                <h1 className="no-result-h1" >No Results for "{searchTerm}"</h1>
                <span className="no-result-span" >Try use a different term instead</span>
            </div>}
        </div>
    )
}

export default SearchResult;