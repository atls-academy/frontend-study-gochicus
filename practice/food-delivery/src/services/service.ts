async function getResource(url) {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  }

  return res.json()
}
async function sendFormData(url: string, data: string) {
  const result: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })

  return result.json()
}

export { getResource }
export { sendFormData }
