'use client'
import { FC, useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useStore } from '@/store/contacts'
import { fetchContacts } from './action'

const Form: FC = () => {
  const { contact, setContact, isSend, setIsSend } = useStore()
  const [errors, setErrors] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const phoneRegex = /^\+?[0-9\- ]+$/

  function handleChange(event: any) {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }



  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const { full_name, email, phone, message } = contact
    const newErrors: any = {}

    if (!full_name) {
      newErrors.full_name = 'Пожалуйста, укажите ваше полное имя'
    }

    if (!email) {
      newErrors.email = 'Пожалуйста, укажите ваш email'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Некорректно введен email'
    }

    if (!phone) {
      newErrors.phone = 'Пожалуйста, укажите ваш телефон'
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Некорректно введен номер телефона'
    }

    if (!message) {
      newErrors.message = 'Пожалуйста, напишите ваше сообщение'
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetchContacts(contact)
        console.log(res)
        setIsSend()
      } catch (error) {
        console.error('Error submitting the form:', error)
      }
    } else {
      setErrors(newErrors)
      const firstErrorInput = document.querySelector('.form__input.error')
      if (firstErrorInput) {
        firstErrorInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    setIsLoading(false)
  }

 

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <Input
            type="text"
            title="Алексей Косараев"
            className={`form__text ${errors.full_name ? 'error' : ''}`}
            label="Полное имя"
            name="full_name"
            onChange={handleChange}
            error={errors.full_name}
          />
          <Input
            type="email"
            title="consult@mail.com"
            className={`form__text ${errors.email ? 'error' : ''}`}
            label="Email"
            name="email"
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            type="tel"
            title="+996 444 666 777"
            className={`form__text ${errors.phone ? 'error' : ''}`}
            label="Телефон или мессенджер"
            name="phone"
            onChange={handleChange}
            error={errors.phone}
          />
          <Input
            type="text"
            title="Компания"
            className="form__text"
            label="Компания (необязательно)"
            name="company"
            onChange={handleChange}
          />
        </div>

        <p className="form__text">
          Сообщение
          <textarea
            onChange={handleChange}
            name="message"
            className={`form__text ${errors.message ? 'error' : ''}`}
            placeholder="Кратко расскажите нам о вашем проекте и ваших текущих целях. Чем мы можем вам помочь?"
          ></textarea>
          {errors.message && (
            <span className="error form__textarea-error">{errors.message}</span>
          )}
        </p>

        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <Button className="form__btn-orange">отправить сообщение</Button>
        )}
      </form>
    </>
  )
}

export default Form
