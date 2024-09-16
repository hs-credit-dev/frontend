import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

export type headerProps = {
  actionType: "standard" | "text" | "none" | undefined;
};

const Header = ({ actionType }: headerProps) => {
  return (
    <header id={styles.head}>
      <Image src="/logo.png" width={201} height={71} alt="hs.credit logo" />
      <div id={styles.headActions}>
        <div id={styles.avatar}>G</div>
        <div id={styles.logout}>
          <Image src="/left-bar.svg" width={26} height={26} alt="logout" />
        </div>
      </div>
    </header>
  );
};

export default Header;
