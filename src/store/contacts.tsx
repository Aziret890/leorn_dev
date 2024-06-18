import { create } from 'zustand'

type Contact = {
  full_name: string
  email: string
  phone: string
  company: string
  message: string
}

type Store = {
  contact: Contact
  isSend: boolean
  setContact: (value: Partial<Contact>) => void
  setIsSend: () => void
}

export const useStore = create<Store>((set) => ({
  contact: { full_name: '', email: '', phone: '', company: '', message: '' },
  isSend: false,
  setIsSend: () => set({ isSend: true }),
  setContact: (value) =>
    set((state) => ({
      contact: { ...state.contact, ...value },
    })),
}))
