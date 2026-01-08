import style from "./MainHeader.module.scss";

 interface MainHeaderProps {
  src?: string
  alt?: string
  bgColor?: string
  titleH1?: string
  titleH3?: string
}

/*
export function MainHeader({ src, alt, bgColor, titleH1, titleH3 }: MainHeaderProps) {
  
  
  if (src && alt) {
    return <img className={style.cardHeaderImage} src={src} alt={alt} />
  } else if (bgColor && titleH1)
    return (
      <hgroup style={{backgroundColor: bgColor}}>
        <h1 className={style.mainHeaderh1}>{titleH1}</h1>
        <h3 className={style.mainHeaderh3}>{titleH3}</h3>
      </hgroup>
    )

    return <p>No props supplied</p>
} */

export function MainHeader({ src, alt, bgColor, titleH1, titleH3}: MainHeaderProps) {
  return (
    <header style={{ backgroundColor: bgColor }} className={style.container}>
      {src && (
        <img className={style.cardHeaderImage} src={src} alt={alt ?? ""} />
      )}
      {(titleH1 || titleH3) && (
        <hgroup className={style.hgroup}>
          {titleH1 && (
            <h1 className={style.mainHeaderh1}><span>Leo</span><span>-Lov</span></h1>
          )}
          {titleH3 && <h3 className={style.mainHeaderh3}>{titleH3}</h3>}
        </hgroup>
      )}
    </header>
  );
}
