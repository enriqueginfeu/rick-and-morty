import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerTitle}>
          Rick And Morty API - { new Date().getFullYear() }
        </div>
    </footer>
  )
}
