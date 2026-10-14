import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIaccordion() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panelName) => (event, expanded) => {
        setExpanded(expanded ? panelName : false);
    }

    return (
        <div>
            <Accordion onChange={handleChange("panel1")} expanded={expanded==="panel1"}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >Başlık 1</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda porro sed nisi hic unde rem aspernatur ut voluptatem dignissimos.
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleChange("panel2")} expanded={expanded==="panel2"}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >Başlık 2</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda porro sed nisi hic unde rem aspernatur ut voluptatem dignissimos.
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleChange("panel3")} expanded={expanded==="panel3"}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >Başlık 3</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At assumenda porro sed nisi hic unde rem aspernatur ut voluptatem dignissimos.
                </AccordionDetails>
            </Accordion>

            <hr />
        </div>
    )
}

export default MUIaccordion


//? MUI Accordion (Açılır Panel)

//* Accordion: Tıklanınca açılıp kapanan, içeriği gizleyip gösteren panel oluşturur.
//* AccordionSummary: Panelin başlık ve tıklanabilir üst alanıdır.
//* AccordionDetails: Panel açıldığında gösterilen içerik alanıdır.

//* expandIcon: Açılma/kapanma simgesini(ikon) belirler. Örnek: expandIcon={<ExpandMoreIcon />}


//? expanded ve onChange (Açılma Durumu)
//* expanded: Panelin açık mı kapalı mı olduğunu belirler (true/false).
//* onChange: Panelin açılma veya kapanma(değişme) durumunda çalışır.

// → (event, expanded): MUI tarafından gönderilen olay ve yeni açık/kapalı durumu parametreleridir.


//? Ek Kullanışlı Özellikler
//* disabled: Panelin açılıp kapanmasını engeller.
//* defaultExpanded: Panelin başlangıçta açık olmasını sağlar.
//* disableGutters: Panelin varsayılan dikey boşluklarını azaltır.
//* square: Panelin köşelerindeki yuvarlaklığı kaldırır.
//* TransitionProps: Açılma/kapanma geçişini özelleştirmek için kullanılabilir; desteklenen özellikler MUI sürümüne bağlıdır.
//* sx: Panelin arka plan, kenarlık ve boşluk gibi stillerini belirler.
// → Örnek: <Accordion sx={{ bgcolor: "lightgray" }}>...</Accordion>
