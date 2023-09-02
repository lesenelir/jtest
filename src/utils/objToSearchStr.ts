const objToSearchStr = (obj: Record<string, string | number>) => {
  // [a=1, b=2]
  const res: string[] = []

  for (const [key, value] of Object.entries(obj)) {
    const str = `${key}=${value}`
    res.push(str)
  }

  return res.join("&")
}

export default objToSearchStr
