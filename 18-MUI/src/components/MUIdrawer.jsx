import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIdrawer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Aç
            </Button>

            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(false)}
                
            >
                <Box sx={{ width: '500px', textAlign: 'center' }}>
                    <h1>Başlık</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Tempora, voluptatibus.
                        Accusantium asperiores earum, sequi vel
                        itaque error qui nostrum unde?
                    </p>
                </Box>
            </Drawer>

            <hr />
        </div>
    );
}

export default MUIdrawer;
