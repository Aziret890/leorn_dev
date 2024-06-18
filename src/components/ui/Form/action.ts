'use server'
export async function fetchContacts(contact: object) {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify(contact)

    const res = await fetch('https://liordev.ru/api/v1/contacts/', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    })

    return res.text()
  } catch (error: any) {
    console.error('Failed to fetch:', error.message)
    throw error
  }
}
