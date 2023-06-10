import { useState } from "react"


const ContactUs = () => {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })

    const [showMessage, setShowMessage] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        setShowMessage(true)
        setForm({
            name: "",
            phone: "",
            email: "",
            message: ""
        })
    }

    return (
    <div className="container mt-3">
        <div className="row">
            
            <div className="col-6 px-5">
            <div class="fs-2 fw-bold mb-2">Get In Touch!</div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Message</label>
                        <input type="password" class="form-control" />
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={(e) => {submit(e)}}>
                        Submit
                    </button>

                </form>
                
                { showMessage &&
                    <p>Your email has been send and received, we will get back to your shortly!</p>
                }
                
            </div>

            <div className="col-6 px-5">

                <div>
                    <div class="fs-2 fw-bold mb-2">Our Location</div>
                    
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9863531271885!2d-75.69122242323446!3d45.42977643573416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05031f5b834b%3A0x18c70ed203b29f53!2sHair%20Tango!5e0!3m2!1sen!2sca!4v1686197082856!5m2!1sen!2sca" width="320" height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    
                    <div className="d-flex flex-row">
                        <i class="fa fa-location-arrow" style={{fontSize:"22px"}}></i>
                        <p>&nbsp; 180 York St, Ottawa, ON K1N 1J6</p>
                    </div>
                    
                    <div className="d-flex flex-row">
                        <i class="fa fa-mobile" style={{fontSize:"22px"}}></i>
                        <p>&nbsp; &nbsp; (888)-888-8888</p>
                    </div>
                </div>

                <div>
                    <div class="fs-2 fw-bold mb-2">Our Opening Hours</div>
                    <ul className="mb-0 px-0">Monday: 9am - 5pm</ul>
                    <ul className="mb-0 px-0">Tuesday: 9am - 5pm</ul>
                    <ul className="mb-0 px-0">Wednesday: 9am - 5pm</ul>
                    <ul className="mb-0 px-0">Thursday: 9am - 5pm</ul>
                    <ul className="mb-0 px-0">Friday: 9am - 5pm</ul>
                    <ul className="mb-0 px-0">Saturday: Closed</ul>
                    <ul className="mb-0 px-0">Sunday: Closed</ul>
                </div>

            </div>

        </div>
    </div>
)}

export default ContactUs;