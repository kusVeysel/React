import React from 'react'

function Course({ course }) {
    const { title, description, price, image } = course;
    return (
        <>
            <div className='col-3'>
                <div className='card p-3 w-100 h-100 rounded-3 shadow'>
                    <img src={image} className='card-img-top' />
                    <hr />
                    <div className='card-body'>
                        <h1 className='text-danger'>{title}</h1>
                        <h5 className='text-black'>{description}</h5>
                    </div>
                    <div className='card-footer'>
                        <h3 className='text-info'>{price} ₺</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course