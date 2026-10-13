import React, { useState, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton';
import bmwM4 from '../assets/bmwM4.jpg'

function MUIskeleton() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, [])

    return (
        <div>
            {
                loading ? <Skeleton variant='rounded' width={250} height={150} animation="wave" /> : <img src={bmwM4} alt="BmwM4" height={350} width={300} />
            }

            <hr />
        </div>
    )
}

export default MUIskeleton