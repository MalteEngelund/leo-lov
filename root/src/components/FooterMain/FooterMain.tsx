import styles from './FooterMain.module.scss'


interface FooterItem {
  label: string
  href?: string
}

interface FooterSection {
  title: string
  items: FooterItem[]
}

interface FooterProps {
  sections: FooterSection[]
}


export function FooterMain({ sections }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        {sections.map((section) => (
          <div key={section.title} className={styles.section}>
            <h4 className={styles.title}>{section.title}</h4>

            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className={styles.link}>
                      {item.label}
                    </a>
                  ) : (
                    <span className={styles.text}>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
