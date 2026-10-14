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
//* expandIcon: Açılma/kapanma simgesini belirler. Örnek: expandIcon={<ExpandMoreIcon />}

//? expanded ve onChange (Açılma Durumu)
//* expanded: Panelin açık mı kapalı mı olduğunu belirler (true/false).
//* onChange: Panelin açılma veya kapanma durumunda çalışır.
//* useState(false): Başlangıçta tüm panellerin kapalı olmasını sağlar.
//* setExpanded: Açık panelin durumunu günceller.
//* expanded={expanded === "panel1"}: Yalnızca panel1 seçiliyse bu paneli açık tutar.

//? handleChange Fonksiyonu
//* handleChange("panel1"): Hangi panelin kontrol edildiğini belirtir.
//* (event, expanded): MUI tarafından gönderilen olay ve yeni açık/kapalı durumu parametreleridir.
//* setExpanded(expanded ? panelName : false): Panel açılırsa adını kaydeder, kapanırsa false yapar.
//* Bu yöntemle aynı anda yalnızca bir panelin açık olması sağlanır.

//? Ek Kullanışlı Özellikler
//* disabled: Panelin açılıp kapanmasını engeller.
//* defaultExpanded: Panelin başlangıçta açık olmasını sağlar.
//* disableGutters: Panelin varsayılan dikey boşluklarını azaltır.
//* square: Panelin köşelerindeki yuvarlaklığı kaldırır.
//* TransitionProps: Açılma/kapanma geçişini özelleştirmek için kullanılabilir; desteklenen özellikler MUI sürümüne bağlıdır.
//* sx: Panelin arka plan, kenarlık ve boşluk gibi stillerini belirler.
//* Örnek: <Accordion sx={{ bgcolor: "lightgray" }}>...</Accordion>

//? Not
//* expanded ve onChange birlikte kullanıldığında Accordion kontrollü hale gelir.
//* Her panel için farklı bir isim kullanılır: "panel1", "panel2" gibi.
//* Mevcut kodda aynı anda yalnızca bir panel açık kalabilir.
//* Birden fazla panelin bağımsız açılmasını istiyorsan her panelin durumunu ayrı ayrı yönetmelisin.
//* Örnek: <Accordion><AccordionSummary expandIcon={<ExpandMoreIcon />}>Başlık</AccordionSummary><AccordionDetails>İçerik</AccordionDetails></Accordion>