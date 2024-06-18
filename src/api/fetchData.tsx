export const fetchData = async (endpoint: any) => {
  const API = `https://liordev.ru/api/v1/${endpoint}`

  const res = await fetch(API)
  const { results } = await res.json()
  
  if (!res) {
    return {
      notFound: true,
    }
  }
  return results
}
