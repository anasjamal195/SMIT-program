import React from 'react'
import {page_style,column,font,card} from './Home_page_styled'
export default function Home_page() {
  return (
    <div className='container-fluid' style = {page_style}>
        
        <div className='container-fluid row '>
           
            <div className='container col-md-6 ' style={column.left}>
               <div style={font.heading}>Building Things is our passion</div>
            </div>
            <div className='container col-md-6' style = {column.right}>

                <div className='container-fluid row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-8'>
                        <div className='container-fluid' style={card}>
                            <div style={font.card_heading}>Feature Project</div>
                            <div style={font.card_body}>The National University of Architecture</div>
                            <div className='row'>
                                <div className='col-md-6' style={font.card_btn}>Next</div>
                                <div className='col-md-6' style={font.card_btn}>Back</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
