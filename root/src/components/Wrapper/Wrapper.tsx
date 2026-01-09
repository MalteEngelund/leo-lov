import style from './wrapper.module.scss'


interface WrapperInterface {
  children: React.ReactNode
  id?: string
}

export function Wrapper({ children, id }: WrapperInterface) {
  return <div className={style.wrapperClass} id={id}>{children}</div>
}