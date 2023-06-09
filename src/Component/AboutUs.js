import React from "react";

const AboutUs = () => {
    
    return (
        
    <div className="container mb-5 pb-5">

        <div class="">
        
        {/* About Us */}
        <div class="col align-self-center mt-3">
            
            <div class="fs-2 fw-bold mb-2">About Us</div>
            
            <div>
            With a passion for hair and years of experience, our expert team at Hair Tango is dedicated to delivering exceptional hairstyling services. Our history is rooted in a commitment to excellence, as our founder assembled a talented team who continually refine their skills through advanced training. We celebrate diversity and pride ourselves on tailoring our expertise to meet the unique needs of each client. Experience the transformative power of a great hairstyle in our welcoming salon environment. Join us as we shape the hair industry one client at a time.
            </div>

        </div>
        
        {/* Our team */}
        <div class="col align-self-center mt-3 pt-4">

            <div class="fs-2 fw-bold mb-2">Our Team</div>

            <div class="row">
                
                <div class="col-3">

                <div class="d-flex justify-content-center">
                    <img 
                    src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    class="img-thumbnail rounded-circle"
                    Style="max-width:40%;"
                    alt="..."
                    />
                </div>

                <div class="fs-4 d-flex justify-content-center">
                    Maximilian Stormbringer
                    <i class="fa fa-instagram mt-2 mx-1" 
                        style={{
                            fontSize:"22px", 
                            cursor: "pointer",
                        }}>
                    </i>
                </div>

                <div class="fw-light">
                    With an artistic eye and a passion for hair color, Maximilian is a master of creating stunning and vibrant hair transformations. he knows how to bring out the best in your hair with his expert color blending techniques.
                </div>

                </div>
                
                <div class="col-3">

                <div class="d-flex justify-content-center">
                    <img 
                    src="https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    class="img-thumbnail rounded-circle"
                    Style="max-width:40%;"
                    alt="..."
                    />
                </div>

                <div class="fs-4 d-flex justify-content-center">
                    Aurora Nightshade
                    <i class="fa fa-instagram mt-2 mx-1" 
                        style={{
                            fontSize:"22px", 
                            cursor: "pointer",
                        }}>
                    </i>
                </div>
                
                <div class="fw-light">
                    The Precision Cutter: Known for his meticulous attention to detail, Aurora is a true master of precision cutting. He can flawlessly sculpt any type of hair, from long layers to edgy pixie cuts, ensuring a perfect balance and shape.
                </div>

                </div>
                
                <div class="col-3">
                
                <div class="d-flex justify-content-center">
                    <img 
                    src="https://images.pexels.com/photos/7116213/pexels-photo-7116213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    class="img-thumbnail rounded-circle"
                    Style="max-width:40%;"
                    alt="..."
                    />
                </div>

                <div class="fs-4 d-flex justify-content-center">
                    Orion Blackwood
                    <i class="fa fa-instagram mt-2 mx-1" 
                        style={{
                            fontSize:"22px", 
                            cursor: "pointer",
                        }}>
                    </i>
                </div>
                
                <div class="fw-light">
                    The Texture Wizard: When it comes to working with textured hair, Orion is an unrivaled expert. Whether you have natural curls, waves, or coils, she knows the secrets to enhance and define your hair's unique texture.
                </div>

                </div>

                <div class="col-3">

                <div class="d-flex justify-content-center">
                    <img 
                    src="https://images.pexels.com/photos/3785991/pexels-photo-3785991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    class="img-thumbnail rounded-circle"
                    Style="max-width:40%;"
                    alt="..."
                    />
                </div>

                <div class="fs-4 d-flex justify-content-center">
                    David Lee
                    <i class="fa fa-instagram mt-2 mx-1" 
                        style={{
                            fontSize:"22px", 
                            cursor: "pointer",
                        }}>
                    </i>
                </div>
                
                <div class="fw-light">
                    David is a seasoned hair stylist with a passion for timeless elegance. With years of experience, he specializes in classic hairstyles that exude sophistication and grace.
                </div>

                </div>

            </div>

        </div>

        </div>

    </div>

    );

}


export default AboutUs;