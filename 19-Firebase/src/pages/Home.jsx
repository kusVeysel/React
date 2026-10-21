import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase'

function Home() {

  const [user, setUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.displayName);
      }
    });
  }, [])


  return (
    <div>
      Merhaba {user && user}
    </div>
  )
}

export default Home