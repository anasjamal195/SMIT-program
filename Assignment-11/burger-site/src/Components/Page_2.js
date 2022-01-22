import React from 'react'
import './css_components/Page_2.css'
import image_chef1 from "../img/PNG's/Chef-1.png"
import image_chef2 from "../img/PNG's/Chef-2.png"
import image_chef3 from "../img/PNG's/Chef-3.png"

export const Page_2 = () => {
    return (
        <div className='container-fluid body2'>
            <div className='container mx-auto content-body2'>
                <div className='heading-text2'>
                    Our Chefs
                </div>
                <div className='body-text2'>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Fuga, error nostrum?
                Molestiae ut facere minima officia repellendus
                </div>
                <div className='container-fluid row row2'>
                    <div className='col-md-4 card2'>
                        <img src = {image_chef1} alt='image'></img>
                        <div className='card2-heading'>AIDEN HUNTER</div>
                        <div className='card2-body'>Founder</div>
                        
                    </div>
                    <div className='col-md-4 card2'>
                        <img src = {image_chef2} alt='image'></img>
                        <div className='card2-heading'>ETHEL RAMSEY</div>
                        <div className='card2-body'>Co-Founder</div>
                    </div>
                    <div className='col-md-4 card2'>
                        <img src = {image_chef3} alt='image'></img>
                        <div className='card2-heading'>FANNIE STEWART</div>
                        <div className='card2-body'>Co-Founder</div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
