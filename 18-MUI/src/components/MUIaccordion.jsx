import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIaccordion() {

    const [expanded, setExpanded] = useState('' | false);

    const handleChange = (panelName) => (event, expanded) => {
        setExpanded(expanded ? panelName : false);
    }

    return (
        <div>
            <Accordion onChange={handleChange("panel1")} expanded={expanded==="panel1"}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >Bölüm 1</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda porro sed nisi hic unde rem aspernatur ut voluptatem dignissimos.
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleChange("panel2")} expanded={expanded==="panel2"}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >Bölüm 2</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda porro sed nisi hic unde rem aspernatur ut voluptatem dignissimos.
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleChange("panel3")} expanded={expanded==="panel3"}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >Bölüm 3</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda porro sed nisi hic unde rem aspernatur ut voluptatem dignissimos.
                </AccordionDetails>
            </Accordion>

            <hr />
        </div>
    )
}

export default MUIaccordion