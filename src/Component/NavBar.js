
const NavBar = () => {

    return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/">Hair Tango</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" id="home">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item" id="about_us">
              <a className="nav-link active" href="/about_us">About Us</a>
            </li>
            <li className="nav-item" id="service_and_pricing">
              <a className="nav-link active" href="/pricing">Service & Pricing</a>
            </li>
            <li className="nav-item" id="contact_us">
              <a className="nav-link active" href="/contact_us">Contact Us</a>
            </li>
          </ul>

          <div className="d-flex" role="search">
            <button className="btn btn-success"><a className="nav-link active" href="/book">Book Now</a></button>
          </div>

        </div>
      </div>
    </nav>

    );

}

export default NavBar;