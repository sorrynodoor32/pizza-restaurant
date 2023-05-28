import Image from "next/image"
import styles from "../styles/PizzaCard.module.css"
import Link from "next/link"

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/product/${pizza._id}`} passHref>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain"/>
        </div>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.desc}>
          {pizza.desc}
        </p>
      </Link>
    </div>
  )
}

export default PizzaCard
