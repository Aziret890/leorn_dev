import Image from 'next/image'

import done from '@/assets/images/done.svg'

const FormIsDone = () => {
  return (
    <div className="comments__from-done">
      <Image src={done} alt="done" />
      <h2 className="comments__title">
        Спасибо! Форма была успешно отправлена.
      </h2>
    </div>
  )
}

export default FormIsDone
