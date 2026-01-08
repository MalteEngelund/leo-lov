import style from './Header.module.scss'


interface HeaderProps {
  children: React.ReactNode
}


export function Header({children}: HeaderProps){

  return (
    <header className={style.headerStyle}>
      {children}
    </header>
  )
}