import React from 'react'

// Tanımlanmamış veya geçersiz rotalara girildiğinde 
// (Route path='*' ile yakalanarak) gösterilecek sayfa bileşeni.
function NotFoundPage() {
  return (
    <div>
      <h1>404 - Sayfa Bulunamadı</h1>
    </div>
  )
}

export default NotFoundPage