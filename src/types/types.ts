export interface contactForm {
  full_name: string
  email: string
  phone: string
  company: string | any
  message: string
}

export interface ICommentsResponse {
  id: number
  name: string
  company: string
  text: string
  photo: string | null
}
