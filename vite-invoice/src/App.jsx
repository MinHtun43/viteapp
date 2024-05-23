
import React, { useState } from 'react'
import Container from './Components/Container'
import { Button } from 'flowbite-react'
import MainHeading from './Components/MainHeading'
import SubHeading from './Components/SubHeading'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CheckOutForm from './Components/CheckOutForm'
import CheckOutItemList from './Components/CheckOutItemList'
import Drawer from './Components/Drawer'

const App = () => {

  const [products,setProduct] = useState([
    {
      id: 1,
      title: "Apple",
      price: 1.5,
      stock: 120
    },
    {
      id: 2,
      title: "Banana",
      price: 0.5,
      stock: 200
    },
    {
      id: 3,
      title: "Cherry",
      price: 3.0,
      stock: 150
    },
    {
      id: 4,
      title: "Date",
      price: 2.5,
      stock: 100
    },
    {
      id: 5,
      title: "Elderberry",
      price: 4.0,
      stock: 80
    },
  ])

  const [isDrawerOpen,setDrawerOpen] = useState(false)

  const handlerDrawer = () => {
    setDrawerOpen ( !isDrawerOpen) 
  }

  const [items,setItem] = useState([
  ]);

  const addProduct = (newProduct) => {
     setProduct([...products,newProduct])
  }

  const addItem = (newItem) => {
    setItem([...items,newItem])
  }

  const removeItem = (id) => {
    setItem(items.filter(item => item.id !== id)) 
  }

  const updateItemQualtity = (id,ammount) => {
    setItem(items.map((item) => {
      if(item.id === id){
        const qualtity = item.qualtity + ammount;
        const cost = qualtity * item.product.price;
        return {...item , qualtity , cost}
      }
       return item;
    }))
  }

    return (
    <main className='flex flex-col min-h-screen'>
      <Header>
        <Container>
        <MainHeading>MMS Solution</MainHeading>
       <SubHeading>Invoice App</SubHeading>
        </Container>
      </Header>
      <Container>
        <CheckOutForm addItem={addItem} products={products}/>
        <CheckOutItemList updateItemQualtity={updateItemQualtity} removeItem={removeItem} items={items} />
      </Container>
      <Footer>
        <Container>
          <div className='flex gap-3 justify-end'>
            <Button className='active:scale-95 duration-100' onClick={handlerDrawer} color="light">Manage Factory</Button>
            <Button className='active:scale-95 duration-100'>Print</Button>
          </div>
        </Container>
      </Footer>
      <Drawer addProduct={addProduct} isDrawerOpen={isDrawerOpen} handleDrawer={handlerDrawer} products={products}/>
    </main>
  )
}

export default App
