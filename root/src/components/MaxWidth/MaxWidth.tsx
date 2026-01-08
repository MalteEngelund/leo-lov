import style from './MaxWidth.module.scss'


interface MaxWidthInterface {
  children: React.ReactNode
}

export function MaxWidth({ children }: MaxWidthInterface) {
  return <div className={style.maxWidth}>{children}</div>
}