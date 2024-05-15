import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

interface SectionProps {
  children: React.ReactNode
  classNames?: string
}

function Section({ children, classNames }: SectionProps) {
  return <section className={cx(['container', classNames])}>{children}</section>
}

export default Section
