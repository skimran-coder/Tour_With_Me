import logo from "../Asset/logo.png"

function NavBar() {
    return(
        <header className="header">
            <div className="title">
                <img src={logo} className="title-img" alt="logo"/>
                <h1 className="heading">Tour With Imran</h1>
            </div>
            
            <div className="nav-bar">
                <p className="home"><i class="fa fa-fw fa-home"></i> Home</p>
                <p className="wishlist"><i class="fa-solid fa-heart wish-icon"></i> Wishlist</p>
            </div>
        </header>
        
    )
}

export default NavBar