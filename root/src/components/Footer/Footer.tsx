import style from './Footer.module.scss'


interface FooterProps {
  children: React.ReactNode
}


export function Footer({children}: FooterProps){

  return (
    <footer className={style.footerStyle}>
      {children}
    </footer>
  )
}