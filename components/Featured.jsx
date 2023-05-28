import Image from "next/image"
import styles from "../styles/Featured.module.css"
import LeftArrow from "../public/image/arrowl.png"
import RightArrow from "../public/image/arrowr.png"
import { useState } from "react"

const Featured = () => {
    const [slideNumber,setSlideNumber] = useState(0)
    const images = [
        "/image/featured.avif",
        "/image/featured2.avif",
        "/image/featured3.avif",
    ]

    const handleClick = (direction) =>{
        if(direction === "l"){
            setSlideNumber(slideNumber !== 0 ? slideNumber - 1 : 2)
        }
        if(direction === "r"){
            setSlideNumber(slideNumber !== 2 ? slideNumber + 1 : 0)
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} onClick={()=>handleClick("l")}>
            <Image src={LeftArrow} alt="" objectFit="contain"  layout="fill" style={{left:0}}/>
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100 * slideNumber}vw)` }}>
            {images.map((image, index)=>(
                <div className={styles.imgContainer} key={index}>
                    <Image src={image} objectFit="contain" alt="" layout="fill"/>
                </div>
            ))}
        </div>
        <div className={styles.arrowContainer} style={{right: 0}} onClick={()=>handleClick("r")}>
            <Image src={RightArrow} alt="" layout="fill" objectFit="contain"/>
        </div>
    </div>
  )
}

export default Featured
