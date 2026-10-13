
import React, { useState, useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

function MUIprogress() {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0
                }

                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 100)
            })
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <Stack spacing={2}>
                <CircularProgress />
                <CircularProgress color="warning" />
                <LinearProgress />
                <LinearProgress color="secondary" />
                <LinearProgress
                    color="inherit"
                    variant="determinate"
                    value={30}
                />

                <LinearProgress
                    variant="determinate"
                    value={progress}
                    aria-label="Export data"
                    color='success'
                />
            </Stack>

            <hr />
        </div>
    )
}

export default MUIprogress
