import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './ImagesGallery.module.scss'

const cx = classNames.bind(styles)

interface ImagesGalleryProps {
  images: string[]
}

function ImagesGallery({ images }: ImagesGalleryProps) {
  return (
    <Section title="사진첩">
      <ul className={cx('wrap-images')}>
        {images.map((src, index) => (
          <li key={index} className={cx('wrap-image')}>
            <img src={src} alt="사진첩 이미지" />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default ImagesGallery
