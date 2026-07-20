import { use, useState } from 'react'

function Sayac() {
    const [count, setCount] = useState(0);

    const arttir = () => {
        setCount(count + 1);
    }
    //setCount'un değeri değiştiğinde(veya ne yazılıysa) , component komple baştan render edilir
    return (
        <>
            <div>{count}</div>
            <button onClick={arttir}>Arttır</button>
            <button onClick={() => { setCount(count - 1) }}>Azalt</button>
            <hr />
        </>
    )
}

export default Sayac