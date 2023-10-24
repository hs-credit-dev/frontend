import Image from 'next/image';
import styles from "./header.module.css";


export default function Header(){

    return(
        <header id={styles.head}>
            <Image src="/logo.png" width={201} height={71} alt="hs.credit logo"/>
            <div id={styles.headActions}>
                <div>name</div>
                <Image src="left-bar.svg" width={22} height={22} alt='logout'/>
            </div>
        </header>
    )
}