import data from "../data";

function EmptyTour({setTours}) {
    function refreshHandler() {
        setTours(data)
    }

    return(
    <div className="empty-page">
        <h1 className="empty-text">
            No Tours Left 
        </h1>

        <button onClick={refreshHandler} className="refresh-btn">
            Refresh
        </button>
    </div>
    )
}

export default EmptyTour;