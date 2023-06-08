

const ContactUs = () => {
    return (
    <div>

        <div>
            <h4>Get In Touch!</h4>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Message</label>
                    <input type="password" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <p>Get in touch with us and we will get back to your shortly</p>
        </div>

        <div>
            <h4>Our Location</h4>
            {/* Map */}
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9863531271885!2d-75.69122242323446!3d45.42977643573416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05031f5b834b%3A0x18c70ed203b29f53!2sHair%20Tango!5e0!3m2!1sen!2sca!4v1686197082856!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>

            <h4>Our Opening Hours</h4>

            <ul>Monday: 9am - 5pm</ul>
            <ul>Tuesday: 9am - 5pm</ul>
            <ul>Wednesday: 9am - 5pm</ul>
            <ul>Thursday: 9am - 5pm</ul>
            <ul>Friday: 9am - 5pm</ul>
            <ul>Saturday: Closed</ul>
            <ul>Sunday: Closed</ul>

        </div>

        
    </div>
)}

export default ContactUs;