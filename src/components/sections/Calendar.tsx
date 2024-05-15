import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Calendar.module.scss'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const cx = classNames.bind(styles)

interface CalendarProps {
  date: string
}

const css = `
    .rdp-caption {
        display: none;
    }
    .rdp-cell {
        cursor: default;
    }
    .rdp-head_cell {
        font-size: 14px;
        font-weight: bold;
    }
    .rdp-day_selected {
        background-color: var(--red);
        font-weight: bold;
    }
    .rdp-day_selected:hover {
        background-color: var(--red);
        font-weight: bold;
    }
`

function Calendar({ date }: CalendarProps) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('text-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('text-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
