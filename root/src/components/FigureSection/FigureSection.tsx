import styles from './FigureSection.module.scss'

interface FigureSectionProps {
  src?: string
  alt?: string
  id?: string
  bgColor?: string
  figTitle?: string
  text?: string
  text2?: string
}

export function FigureSection({ src, alt, id, bgColor, figTitle, text, text2 }: FigureSectionProps) {
  return (
    <figure className={styles.figure}>
      {src && alt && (
        <img
          className={styles.figureImage}
          src={src}
          alt={alt}
          id={id}
        />
      )}

      {text && (
        <figcaption
          className={styles.figcaption}
          style={{ backgroundColor: bgColor }}
        >
          <h3>{figTitle}</h3>
          <article className={styles.article}>
          <p className={styles.figcaptionText}>{text}</p>
          <p>{text2}</p>
          </article>
        </figcaption>
      )}

      {!src && !text && (
        <p className={styles.fallback}>No props supplied</p>
      )}
    </figure>
  )
}
