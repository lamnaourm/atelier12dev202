import React from 'react'
import styles from './produit.module.css'

export default function Produit({image, titre, description, prix}) {
  return (
    <div className={styles.produit}>
        <img src={image} alt={titre} />
        <h1>{titre}</h1>
        <p>{description}</p>
        <h3>Prix : {prix}</h3>
        <button>Ajouter au panier</button>
    </div>
  )
}
