import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
export default function Home() {

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Calculator</div>
      <Link href="/calculator" className={styles['home-button']}>
        <button className={styles['home-button']}>Calculator Page</button>
      </Link>
    </div>


  );
}