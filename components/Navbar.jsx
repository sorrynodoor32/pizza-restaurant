import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import Phone from "../public/image/telephone.png"
import Logo from "../public/image/logo.png"
import Cart from "../public/image/cart.png"
import Link from "next/link"
import {useSelector} from "react-redux"

const Navbar = () => {
  const {quantity} = useSelector((state)=>state.cart)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={Phone} alt="phone" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>
            ORDER NOW!
          </div>
          <div className={styles.text}>
            0905 924 323
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={"/"}>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href="/">
            <Image src={Logo} width="160" height="70" alt="logo"/>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src={Cart} width="32" height="32" alt="logo"/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
