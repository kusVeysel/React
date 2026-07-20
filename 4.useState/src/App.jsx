import { use, useState } from 'react'
import './App.css'
import Degis from './Degis';
import Sayac from './Sayac';

function App() {

  // String tckn = "123456789";
  // String firstName = "Veysel";
  // Reactaki karşılığı aşşağıda
  // useState : hooks

  const [names, setNames] = useState(["Enes", "Adem", "Yakup", "Ali"]);

  const [userInfo, setUserInfo] = useState({ username: "veysel", password: "1234" });

  return (
    <>
      <Degis />

      <Sayac />

      <div>
        {
          names.map((name, index) => (
            <div key={index}>{name}</div>
          ))
        }
      </div>

      <div>
        {userInfo.username} {userInfo.password}
      </div>

    </>
  )
}

export default App
