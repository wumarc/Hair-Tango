
const Home = () => {

    return (
        <div className="container bg-primary vh-100">

        <div className="row justify-content-center align-items-center">
            
            {/* Column 1 */}
            <div className="col-5">
                <h1>Hair Tango</h1>
                <p>
                    A Hair Tango is a professional establishment where individuals receive various hair care and styling services. It offers services such as haircuts, styling, coloring, and treatments. Hair salons employ skilled stylists who provide personalized consultations and recommendations based on clients' desired looks and hair types. They also offer additional services like shampooing, conditioning, blow-drying, and may sell hair care products.
                </p>
                <div className="d-flex" role="search">
                <button className="btn btn-success" href="/book">Book Now</button>
          </div>
            </div>
            
            {/* Column 2 */}
            <div className="col-5">
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                width="600" height="300"/>
            </div>

        </div>
        </div>
    )
}

export default Home;