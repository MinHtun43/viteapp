import React from 'react'
import { HiArrowsPointingIn } from "react-icons/hi2";
import MainHeading from './MainHeading';
import SubHeading from './SubHeading';
import { Button } from 'flowbite-react';
import CreateProductsForm from './CreateProductsForm';

const Drawer = ({isDrawerOpen,handleDrawer,products,addProduct}) => {
  return (
    <div className={` fixed duration-300 bg-white shadow-lg md:w-[400px] lg:w-[400px] top-0 right-0 p-3 w-screen overflow-scroll h-screen ${!isDrawerOpen && 'translate-x-full'}`}>
      <div className='flex justify-between mb-5'>
      <div>
      <MainHeading>Your Products</MainHeading>
       <SubHeading>Manage Products</SubHeading>
      </div>
      <Button onClick={handleDrawer} color="gray" className='w-10 h-10 items-center'>
      <HiArrowsPointingIn className='w-6 h-6' /> 
      </Button>
      </div>

      <div className='mb-5'>
      {products.map(({id,title,stock,price}) => <div key={id} className='flex justify-between border-b-2 p-3'>
        <p>{title} ({stock})</p>
        <p>$  {" _ "}{price}</p>
      </div>)}
      </div>

      <CreateProductsForm  addProduct={addProduct}/>
    </div>
  )
}

export default Drawer
