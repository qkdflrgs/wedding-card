function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dj5lzbwi7/image/upload/${option}/v1715883185/${format}/${filename}.${format}`
}

export default generateImageUrl
