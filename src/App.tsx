import styles from './App.module.scss'
import classNames from 'classnames/bind'
import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import ImagesGallery from '@components/sections/ImagesGallery'
import Intro from '@components/sections/Intro'
import Invitation from '@components/sections/Invitation'
import Calendar from '@components/sections/Calendar'
import Map from '@components/sections/Map'
import Contact from '@components/sections/Contact'
import Share from '@components/sections/Share'
import AttendCountModal from '@components/AttendCountModal'
import useWedding from '@/hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding } = useWedding()

  if (!wedding) {
    return null
  }

  return (
    <div className={cx('container')}>
      <Heading date={wedding.date} />
      <Video />
      <Intro
        groomName={wedding.groom.name}
        brideName={wedding.bride.name}
        locationName={wedding.location.name}
        date={wedding.date}
        message={wedding.message.intro}
      />
      <Invitation message={wedding.message.invitation} />
      <ImagesGallery images={wedding.galleryImages} />
      <Calendar date={wedding.date} />
      <Map location={wedding.location} />
      <Contact groom={wedding.groom} bride={wedding.bride} />
      <Share
        groomName={wedding.groom.name}
        brideName={wedding.bride.name}
        date={wedding.date}
      />
      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
