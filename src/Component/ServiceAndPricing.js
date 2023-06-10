

const ServiceAndPricing = () => {
    return (    
        <div className="container">
            <div className="row justify-content-center align-items-center mt-3 pt-3">
                
                <div className="col-8">

                    <h3 className="mb-4"><b>Service And Pricing</b></h3>

                    <h5>Hair Cut</h5>
                    <table class="table table-bordered text-center mb-0">
                        <thead>
                        <tr>
                            <th>Men</th>
                            <th>Women</th>
                            <th>Child</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>$40</td>
                            <td>$50</td>
                            <td>$5</td>
                        </tr>
                        </tbody>
                    </table>
                    <p style={{fontSize: "13px"}}>A hair cut service involves the professional trimming, shaping, or restructuring of hair to achieve a desired length, shape, or style. It typically includes cutting both the ends and layers of the hair to create a fresh look or maintain the current style.</p>

                    <h5 className="pt-5">Styling: Wash and Blow</h5>
                    <table class="table table-bordered text-center mb-0">
                        <thead>
                        <tr>
                            <th>Men</th>
                            <th>Women</th>
                            <th>Child</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>$10</td>
                            <td>$20</td>
                            <td>$25</td>
                        </tr>
                        </tbody>
                    </table>
                    <p style={{fontSize: "13px"}}> This service combines washing and blow-drying techniques to create a stylish and polished appearance for the hair. It begins with a thorough cleansing and conditioning of the hair, followed by blow-drying with the use of brushes and heat tools to add volume, smoothness, or desired texture.</p>
                    
                    <h5 className="pt-5">Hair Treatment</h5>
                    <table class="table table-bordered text-center mb-0">
                        <thead>
                        <tr>
                            <th>Men</th>
                            <th>Women</th>
                            <th>Child</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>$10</td>
                            <td>$20</td>
                            <td>$25</td>
                        </tr>
                        </tbody>
                    </table>
                    <p style={{fontSize: "13px"}}>Hair treatment services encompass a variety of procedures aimed at improving the health, condition, and appearance of the hair. These treatments typically involve the application of specialized products, such as masks, serums, or oils, to address specific concerns like dryness, damage, frizz, or lack of shine.</p>

                </div>
            </div>
        </div>
    )
}

export default ServiceAndPricing;