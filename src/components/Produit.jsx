import React from 'react'
import styles from './produit.module.css'

export default function Produit({produit, addPanier}) {
  return (
    <div className={styles.produit}>
        <img src={produit.images[0]} alt={produit.title} />
        <h1>{produit.title}</h1>
        <p>{produit.description}</p>
        <h3>Prix : {produit.price}</h3>
        <button onClick={() => addPanier(produit)}>Ajouter au panier</button>
    </div>
  )
}
