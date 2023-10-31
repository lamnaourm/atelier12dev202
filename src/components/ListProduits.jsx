import React, { Component } from 'react'
import styles from './listproduits.module.css'
import axios from 'axios'
import Produit from './Produit'

export default class ListProduits extends Component {

    state = {
        categories: [],
        selectedCategory: -1,
        produits: []
    }
    render() {
        return (
            <div className={styles.listproduit}>
                <select name="selectedCategory" id="selectedCategory" value={this.state.selectedCategory} onChange={e => this.setState({ selectedCategory: e.target.value })}>
                    <option value="0">Tous les produits</option>
                    {
                        this.state.categories.map(c =>
                            <option key={c.id} value={c.id}>{c.name}</option>
                        )
                    }
                </select>
                <div className={styles.gridproduits}>
                    {this.state.produits.map(p => 
                        <Produit key={p.id} image={p.images[0]} titre={p.title} description={p.description} prix={p.price}/>
                        )}
                </div>
            </div>
        )
    }

    componentDidMount() {
        const getData = async () => {
            const res = await axios.get('https://api.escuelajs.co/api/v1/categories');
            return res.data
        }

        getData().then(categories => this.setState({ categories, selectedCategory:0 }))
    }

    componentDidUpdate(prevprops, prevstate) {
        if (prevstate.selectedCategory != this.state.selectedCategory) {
            const getData = async () => {
                let res 
                if(this.state.selectedCategory==0)
                    res = await axios.get('https://api.escuelajs.co/api/v1/products');
                else
                    res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${this.state.selectedCategory}/products`);
                
                    return res.data
            }

            getData().then(produits => this.setState({ produits }))
        }
    }
}
