import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

function MUIcheckbox() {

    const [confirms, setConfirms] = useState([false, false, false, false]);

    const controlCheck = () => {
        const labels = ['ilkokul', 'ortaokul', 'lise', 'üniversite'];

        const selected = confirms
            .map((confirm, index) => confirm ? labels[index] : null)
            .filter(Boolean);

        if (selected.length > 0) {
            alert(`Seçili checkbox(lar): ${selected.join(', ')}`);
        } else {
            alert('Hiçbir checkbox seçilmedi.');
        }
    };

    const handleCheck = (index, checked) => {
        setConfirms(prev => {
            const updated = [...prev];
            updated[index] = checked;
            return updated;
        });
    };

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    Eğitim Durumu
                </FormLabel>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[0]}
                                onChange={(e) => handleCheck(0, e.target.checked)}
                            />
                        }
                        label="ilkokul"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[1]}
                                onChange={(e) => handleCheck(1, e.target.checked)}
                            />
                        }
                        label="ortaokul"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[2]}
                                onChange={(e) => handleCheck(2, e.target.checked)}
                            />
                        }
                        label="lise"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirms[3]}
                                onChange={(e) => handleCheck(3, e.target.checked)}
                            />
                        }
                        label="üniversite"
                        labelPlacement="end"
                    />
                </FormGroup>

                <Button
                    variant="outlined"
                    size="medium"
                    color="info"
                    onClick={controlCheck}
                >
                    Checkboxları Kontrol Et
                </Button>

            </FormControl>
            <hr />
        </>
    );
}

export default MUIcheckbox;
