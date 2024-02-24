import Image from "next/image"
import Link from "next/link"

import styles from "../styles/header.module.css"



export default function Header({currentPage}) {

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>

          <Link href='/' legacyBehavior>
            <a>
              <Image src="/logo.jpg" width={100} height={100} alt="logo rick and morty" />
            </a>
          </Link>
          <div>
            <h2>
              Rick And Morty API
            </h2>
          </div>
        </div>
    </header>
  )
}
