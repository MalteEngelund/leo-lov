import style from './CardFooter.module.scss'

interface CardFooterProps {
  children: React.ReactNode
}



export function CardFooter({children}: CardFooterProps){
  

  return(
    <div className="cardFooterStyle">
      {children}
    </div>
  )
}