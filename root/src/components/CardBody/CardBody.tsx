import style from './CardBody.module.scss'


interface CardBodyProps {
  children: React.ReactNode
}



export function CardBody({children}: CardBodyProps){
  

  return(
    <section className={style.cardBodyStyle}>
      {children}
    </section>
  )
}