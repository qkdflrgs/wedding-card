import classNames from 'classnames/bind'
import styles from './Dimmed.module.scss'

const cx = classNames.bind(styles)

interface DimmedProps {
  children: React.ReactNode
}

function Dimmed({ children }: DimmedProps) {
  return <div className={cx('dimmed')}>{children}</div>
}

export default Dimmed
