import styles from './App.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import FullScreenMessage from '@components/shared/FullScreenMessage'
import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import { Wedding } from '@models/wedding'
import ImagesGallery from './components/sections/ImagesGallery'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  // 데이터 호출
  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (!response.ok) {
          throw new Error('데이터를 불러오지 못했습니다')
        }

        return response.json()
      })
      .then((data) => {
        setWedding(data)
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <FullScreenMessage type="loading" />
  }

  if (isError) {
    return <FullScreenMessage type="error" />
  }

  if (!wedding) {
    return null
  }

  return (
    <div className={cx('container')}>
      <Heading date={wedding.date} />
      <Video />
      <ImagesGallery images={wedding.galleryImages} />
    </div>
  )
}

export default App
