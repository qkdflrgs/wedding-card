import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './ImagesGallery.module.scss'
import ImageViewer from '../ImageViewer'
import { useState } from 'react'
import generateImageUrl from '@/utils/generateImageUrl'

const cx = classNames.bind(styles)

interface ImagesGalleryProps {
  images: string[]
}

function ImagesGallery({ images }: ImagesGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(-1)

  const open = selectedIdx !== -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, index) => (
            <li
              key={index}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(index)
              }}
            >
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  type="image/webp"
                />
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  alt="사진첩 이미지"
                />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImagesGallery
