import { useState } from "react";
import Calendar from 'moedim';

const Book = () => {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })

    const [showMessage, setShowMessage] = useState(false)
    const [date, setDate] = useState()

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
            
            <div class="fs-2 fw-bold mb-2 mt-4">Book An Appointment With Us</div>

            <div className="col-8 px-5 border border-light-subtle border-3 mt-3">

                <div className="row mt-4">                        
                        <div className="col-6">
                            <div><b>Date:</b></div>
                            <Calendar value={date} onChange={(d) => setDate(d)} />         
                        </div>

                        <div className="col-5">

                            <div class="mb-3">
                                <label><b>Time:</b></label>
                                <select class="form-control form-control-md">
                                    <option value="Choose a time">Choose a time</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label><b>Service:</b></label>
                                <select class="form-control form-control-md">
                                    <option value="Choose a Service">Choose a Service</option>
                                    <option value="Man Hair Cut">Man Hair Cut</option>
                                    <option value="Woman Hair Cut">Woman Hair Cut</option>
                                    <option value="Child Hair Cut">Child Hair Cut</option>
                                    <option value="Man Wash and Blow">Man Wash and Blow</option>
                                    <option value="Woman Wash and Blow">Woman Wash and Blow</option>
                                    <option value="Child Wash and Blow">Child Wash and Blow</option>
                                    <option value="Man Hair Treatment">Man Hair Treatment</option>
                                    <option value="Woman Hair Treatment">Woman Hair Treatment</option>
                                    <option value="Child Hair Treatment">Child Hair Treatment</option>
                                </select>
                            </div>


                            <div class="mb-3">
                                <label><b>Stylist:</b></label>
                                <select class="form-control form-control-md">
                                    <option value="Choose a Stylist">Choose a Stylist</option>
                                    <option value="Maximilian Stormbringer">Maximilian Stormbringer</option>
                                    <option value="Aurora Nightshade">Aurora Nightshade</option>
                                    <option value="Orion Blackwood">Orion Blackwood</option>
                                    <option value="David Lee">David Lee</option>
                                </select>
                            </div>

                        </div>
                </div>
                
                <form>
                    <div class="mb-3 mt-3">
                        <label for="exampleInputEmail1" class="form-label"><b>Name</b></label>
                        <input class="form-control"/>
                    </div> 
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><b>Email</b></label>
                        <input class="form-control" />
                    </div>

                    <button type="submit" class="btn btn-primary col-12 mb-4" onClick={(e) => {submit(e)}}>
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