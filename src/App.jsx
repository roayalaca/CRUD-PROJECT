import { useEffect, useState } from 'react'
import './App.css'
import ProductsForm from './components/ProductsForm'
import axios from 'axios'
import ProductsList from './components/ProductsList'

function App() {

  const [products, setProducts] = useState( [] )
  const [productUpdate, setProductUpdate] =useState(null)

  const getProducts = ( () => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then(resp => setProducts(resp.data))
      .catch(error => console.error(error))
  })

  useEffect( () => {
    getProducts()
  }, [])

  //Post Products

  const newProduct = ( productData => {
    axios
      .post("https://products-crud.academlo.tech/products/", productData)
      .then(resp => getProducts() )
      .catch(error => console.error(error))
  })

  //Delete Products

  const deleteProduct = idProduct => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${idProduct}/`)
      .then( () => getProducts())
      .catch( error => console.error(error))
  }

  //Update Products

  const selectProduct = data => {
    setProductUpdate(data)
    setForm(true)
  }


  const updateProduct = data => {
    axios 
      .put(`https://products-crud.academlo.tech/products/${data.id}/`, data) 
      .then( () => {
        getProducts()
        setProductUpdate(null)
      })
      .catch(error => console.error(error))
  }

  const [form, setForm] =useState(false)


  return (
    <div className="App">
      <div className='Upper'>
        <h1 className='title'>Products List</h1>
        <button className='user' onClick={() => setForm(true)}>+ New User</button>
      </div>
   

      {
        form && <ProductsForm
        newProduct = { productData => newProduct(productData)}
        updateProduct = { (data) => updateProduct(data)  }
        selectedProduct = { productUpdate }
        setForm = {setForm}
        cleanForm={() => setProductUpdate(null)}
        />
      }
      
      <ProductsList
      productsData = {products}
      deleteProduct = {(idProduct) => deleteProduct(idProduct)}
      selectProduct = { (data) => selectProduct(data)}
      setForm = {setForm}
      />
    </div>
  )
}

export default App
