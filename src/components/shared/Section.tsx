import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

interface SectionProps {
  children: React.ReactNode
  classNames?: string
  title?: string
}

function Section({ children, classNames, title }: SectionProps) {
  return (
    <section className={cx(['container', classNames])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  )
}

export default Section
