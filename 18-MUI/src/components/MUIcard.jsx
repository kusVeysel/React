import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bmwM4 from '../assets/bmwM4.jpg'

function MUIcard() {
    return (
        <div>
            <Card sx={{ maxWidth: 370 }}>
                <CardMedia
                    sx={{ height: 350}}
                    image={bmwM4}
                    title="Bmw M4"
                    component="img"
                    alt='Bmw M4'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='textDisabled'>
                        BMW M4
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }}>
                        BMW M4, BMW M GmbH tarafından üretilen, 3.0 litrelik sıralı 6 silindirli çift turbo motoruyla yüksek performans sunan, model yılına ve Competition gibi donanım seçeneklerine göre yaklaşık 431 ile 550 beygir güç üretebilen, arkadan itiş veya M xDrive dört tekerlekten çekiş sistemine sahip premium bir spor coupe otomobildir.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" variant='outlined' color='success'>Satın Al</Button>
                    <Button size="small" variant='contained' color='info'>İletişime Geç</Button>
                </CardActions>
            </Card>

            <hr />
        </div>
    )
}

export default MUIcard