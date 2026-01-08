import style from './CardHeader.module.scss'

interface CardHeaderProps {
  src?: string
  alt?: string
  bgColor?: string
  text?: string
}

export function CardHeader({ src, alt, bgColor, text}: CardHeaderProps) {
  if (src && alt) {
    return <img className={style.cardHeaderImage} src={src} alt={alt} />
  } else if (bgColor && text)
    return (
      <div style={{backgroundColor: bgColor}}>
        <p className={style.cardHeaderText}>{text}</p>
      </div>
    )

    return <p>No props supplied</p>
}