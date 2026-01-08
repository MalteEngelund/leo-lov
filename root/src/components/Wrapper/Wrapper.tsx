import style from './wrapper.module.scss'


interface WrapperInterface {
  children: React.ReactNode
}

export function Wrapper({ children }: WrapperInterface) {
  return <div className={style.wrapperClass}>{children}</div>
}