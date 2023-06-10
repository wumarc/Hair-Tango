import { useState } from "react";
import NavBar from "./NavBar";

const Book = () => {

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
        <div>
            <div className="col-8 px-5">
                <div class="fs-2 fw-bold mb-2 mt-4">Book An Appointment With Us</div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input class="form-control" />
                    </div>
                    <div class="mb-3">
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Time
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">09:00</a></li>
                            <li><a class="dropdown-item">10:00</a></li>
                            <li><a class="dropdown-item">11:00</a></li>
                            <li><a class="dropdown-item">12:00</a></li>
                            <li><a class="dropdown-item">13:00</a></li>
                            <li><a class="dropdown-item">14:00</a></li>
                            <li><a class="dropdown-item">15:00</a></li>
                            <li><a class="dropdown-item">16:00</a></li>
                            <li><a class="dropdown-item">17:00</a></li>
                            <li><a class="dropdown-item">18:00</a></li>
                            <li><a class="dropdown-item">19:00</a></li>
                        </ul>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Man Hair Cut</a></li>
                            <li><a class="dropdown-item">Woman Hair Cut</a></li>
                            <li><a class="dropdown-item">Child Hair Cut</a></li>
                            <li><a class="dropdown-item">Man Wash and Blow</a></li>
                            <li><a class="dropdown-item">Woman Wash and Blow</a></li>
                            <li><a class="dropdown-item">Child Wash and Blow</a></li>
                            <li><a class="dropdown-item">Man Hair Treatment</a></li>
                            <li><a class="dropdown-item">Woman Hair Treatment</a></li>
                            <li><a class="dropdown-item">Child Hair Treatment</a></li>
                        </ul>
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Stylist
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Maximilian Stormbringer</a></li>
                            <li><a class="dropdown-item">Aurora Nightshade</a></li>
                            <li><a class="dropdown-item">Orion Blackwood</a></li>
                            <li><a class="dropdown-item">David Lee</a></li>
                        </ul>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={(e) => {submit(e)}}>
                        Book
                    </button>
                </form>
                
                { showMessage &&
                    <p>Your email has been send and received, we will get back to your shortly!</p>
                }
            </div>

        </div>
    )
}

export default Book;