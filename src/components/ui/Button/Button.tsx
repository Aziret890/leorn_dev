import { FC } from 'react'

type Props = {
  children: string
  className: string
}

const Button: FC<Props> = ({ children, className }) => {
  return <button className={className}>{children}</button>
}

export default Button
