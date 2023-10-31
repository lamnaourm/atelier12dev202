import React from 'react'
import styles from './header.module.css'

export default function ({panier}) {
  return (
    <div className={styles.header}>
        <p>ISMO SHOP</p>

        <p>Nombre d'article : {panier.length}</p>
        <p>Montant : {panier.reduce((som, p) => som+p.price, 0)}</p>
    </div>
  )
}
