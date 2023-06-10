
const Home = () => {

    return (
        <div className="container mt-5 pt-5">

        <div className="row justify-content-center align-items-center mt-5 pt-5">
            
            {/* Column 1 */}
            <div className="col-5">
                <h1>Hair Tango</h1>
                <p>
                    A Hair Tango is a professional establishment where individuals receive various hair care and styling services. It offers services such as haircuts, styling, coloring, and treatments. Hair salons employ skilled stylists who provide personalized consultations and recommendations based on clients' desired looks and hair types. They also offer additional services like shampooing, conditioning, blow-drying, and may sell hair care products.
                </p>
                <div className="d-flex" role="search">
                
                <button className="btn btn-success"><a className="nav-link active" href="/book">Book Now</a></button>
          </div>
            </div>
            
            {/* Column 2 */}
            <div className="col-5">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg" class="d-block w-100" alt="..." style={{borderRadius: "5px", width: "300px", height: "250px"}}/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/6167193b1a6be74e6426ca35/04ac7358-3ff8-4585-bf5b-eb2d39738a0f/DSC01537-2.jpg" class="d-block w-100" alt="..." style={{borderRadius: "5px", width: "300px", height: "250px"}}/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.fresha.com/locations/location-profile-images/35852/417885/8c0cda45-0764-416d-b73a-b128d6831e51.jpg" class="d-block w-100" alt="..." style={{borderRadius: "5px", width: "300px", height: "250px"}}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Home;