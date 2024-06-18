import React, { FC } from 'react'

type Props = {
  type: string
  title: string
  className: string
  label: string
  name: string
  onChange: any
  error?: string // Добавляем опциональное свойство для сообщения об ошибке
}

const Input: FC<Props> = ({
  type,
  title,
  className,
  label,
  name,
  onChange,
  error,
}) => {
  return (
    <div className={`form__group ${error ? 'has-error' : ''}`}>
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      {error && <span className="error">{error}</span>}
      <div className="input-wrapper">
        <input
          className={`form__input`}
          type={type}
          placeholder={title}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Input
