/* import styles from './FigureSection.module.scss'

interface IframeFigureProps {
  src?: string
  width?: string
  height?: string
  stylo?: string
  allowFullScreen?: boolean
  loading?: string
  referrerPolicy?: string
  bgColor?: string
  text?: string

}

export function IframeFigure({ src, width, height, stylo, allowFullScreen, loading, referrerPolicy, bgColor, text }: IframeFigureProps) {
  return (
    <figure className={styles.figure}>
      {src && (
        <iframe
          className={styles.figureImage}
          src={src}
          width={width}
          height={height}
          style={stylo}
          allowFullScreen={allowFullScreen}
          loading={loading}
          referrerPolicy={referrerPolicy}
        />
      )}

      {text && (
        <figcaption
          className={styles.figcaption}
          style={{ backgroundColor: bgColor }}
        >
          <p className={styles.figcaptionText}>{text}</p>
        </figcaption>
      )}

      {!src && !text && (
        <p className={styles.fallback}>No props supplied</p>
      )}
    </figure>
  )
}
 */