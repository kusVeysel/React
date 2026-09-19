import React, { useState } from 'react'
import '../css/dovizkuru.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_afiet92OcUSrbvNo2IG3H84Zfhux4BeNv3ESw9pm";


function dovizkuru() {

  const [amount, setAmount] = useState(0);
  const [dovizden, setDovizden] = useState('USD');
  const [result, setResult] = useState(0);
  const [dovize, setDovize] = useState('TRY');

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${dovizden}`);
    setResult(((response.data.data[dovize]) * amount).toFixed(2));
  }

  return (
    <div className='currency-div'>
      <div style={{ fontFamily: 'arial', backgroundColor: 'black', color: '#fff', width: '100%', textAlign: 'center' }}>
        <h3>DOVİZ KURU UYGULAMASI</h3>
      </div>

      <div style={{ marginTop: '25px' }}>
        <input type="numer" className='amount'
          value={amount}
          onChange={(e) => { setAmount(e.target.value) }}
        />
        <select className='from-currency-option'
          onChange={(e) => { setDovizden(e.target.value) }}
        >
          <option >USD</option>
          <option >EUR</option>
          <option >TRY</option>
        </select>

        <FaRegArrowAltCircleRight style={{ fontSize: '25px', marginRight: '10px', marginLeft: '10px' }} />

        <select className='to-currency-option'
          onChange={(e) => { setDovize(e.target.value) }}
        >
          <option >USD</option>
          <option >EUR</option>
          <option selected>TRY</option>
        </select>

        <input type="numer" className='result'
          value={result}
          onChange={(e) => { setResult(e.target.value) }}
        />

      </div>
      <button className='exchange-button'
        onClick={exchange}
      >Çevir</button>

    </div>
  )
}

export default dovizkuru