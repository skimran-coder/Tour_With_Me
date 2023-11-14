import logo from "../Asset/logo.png"

const Header = ({currentTab, setCurrentTab}) => {

    function switchTab(e) {
        if (currentTab === "home") {
            setCurrentTab("wishlist")
        }
        else{
            setCurrentTab("home")
        }
    }

    return(
        <header className="header">
            <div className="title">
                <img src={logo} className="title-img" alt="logo"/>
                <h1 className="heading">Tour With Imran</h1>
            </div>
            
            <div className="nav-bar">
                <p className="home" onClick={switchTab}><i className="fa fa-fw fa-home"></i> Home</p>
                <p className="wishlist" onClick={switchTab}><i className="fa-solid fa-heart wish-icon"></i> Wishlist</p>
            </div>
        </header>
        
    )
}

export default Header