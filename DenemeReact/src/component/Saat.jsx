import React from 'react'
import '../css/Saat.css'

function Saat(props) {
    const { hour, hour2, minute, minute2, second, second2 } = props;
    return (
        <div className='saat'>
            <div className='left'>
                <div className='solic'>
                    <h6 className='one'>1</h6>
                    <h6 className='two'>2</h6>
                    <h6 className='three'>3</h6>
                    <h6 className='four'>4</h6>
                    <h6 className='five'>5</h6>
                    <h6 className='six'>6</h6>
                    <h6 className='seven'>7</h6>
                    <h6 className='eight'>8</h6>
                    <h6 className='nine'>9</h6>
                    <h6 className='ten'>10</h6>
                    <h6 className='eleven'>11</h6>
                    <h6 className='twelve'>12</h6>
                    <div className='nokta'></div>
                </div>
            </div>
            <div className='right'>
                <div className='digital'>
                    <h3>{hour}</h3>
                    <h3>{hour2}</h3>
                    <h3>:</h3>
                    <h3>{minute}</h3>
                    <h3>{minute2}</h3>
                    <h3>:</h3>
                    <h3>{second}</h3>
                    <h3>{second2}</h3>
                </div>
            </div>
        </div>
    )
}

export default Saat