import styles from './Navbar.module.scss'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  items?: NavItem[]
}

export function Navbar({ items = [] }: NavbarProps) {
  return (
    <nav className={styles.navbar}>

      <ul className={styles.navList}>
        {items.map((item) => (
          <li key={item.href} className={styles.navItem}>
            <a href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
        <div className={styles.logo}><span>Leo</span><span>-Lov</span></div>
    </nav>
  )
}
