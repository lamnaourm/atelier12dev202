import React, { Component } from 'react'
import styles from './listproduits.module.css'
import axios from 'axios'

export default class ListProduits extends Component {

    state = {
        categories: [],
        selectedCategory:0,
    }
    render() {
        return (
            <div>
                <select name="selectedCategory" id="selectedCategory" value={this.state.selectedCategory} onChange={e => this.setState({selectedCategory:e.target.value})}>
                    <option value="0">Tous les produits</option>
                    {
                        this.state.categories.map(c => 
                            <option value={c.id}>{c.name}</option>
                            )
                    }
                </select>
            </div>
        )
    }

    componentDidMount(){
        const getData = async () => {
            const res = await axios.get('https://api.escuelajs.co/api/v1/categories');
            return res.data
        }

        getData().then(categories => this.setState({categories}))
    }
}
