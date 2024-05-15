import Section from '@shared/Section'
import classNames from 'classnames/bind'
import { format, getDay, parseISO } from 'date-fns'
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

interface HeadingProps {
  date: string
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
function Heading({ date }: HeadingProps) {
  const weddingDate = parseISO(date)

  return (
    <Section classNames={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{days[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
