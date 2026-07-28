import { use, useState } from 'react'

function Degis() {
    const [firstName, setFirstname] = useState('Veysel');
    //değişken tipi [değişkene erişirken ve ismini kullanırkenki ismi, ismi yeni bir değerle güncelleyebilmeek için fonksiyon adı] = useState('Başlangıç değeri(default değer)');

    const [lastName, setLastname] = useState('Kus');

    const handleChange = () => {
        setLastname('Abuzer');
    }
    return (
        <>
            {firstName} {lastName}
            <div>
                <button onClick={() => setFirstname("Cayci")}>İsmi Değiştir</button>

                <button onClick={handleChange}>Soyismi Değiştir</button>
            </div>
            <hr />
        </>
    )
}

export default Degis