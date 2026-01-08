import style from './Card.module.scss'


interface CardProps {
  children: React.ReactNode
}


export function Card({children}: CardProps){

  return (
    <div className={style.cardStyle}>
      {children}
    </div>
  )
}