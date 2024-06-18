import Image from 'next/image'
import React from 'react'
import done from '@/assets/images/done.svg'

const FormSent = () => {
  return (
    <div className="sent">
      <div className="sent__circle-orange"></div>
      <Image src={done} alt="done" />
      <h3 className="sent__title">Спасибо! Форма была успешно отправлена.</h3>
      <div className="sent__circle-green"></div>
    </div>
  )
}

export default FormSent
