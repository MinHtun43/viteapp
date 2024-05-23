import { Button, Label, TextInput } from 'flowbite-react'
import React, { useRef } from 'react'
import SubHeading from './SubHeading'

const CreateProductsForm = ({addProduct}) => {
  const formRef = useRef();
  const handleCreateForm = (event) => {
     event.preventDefault();
     const formData = new FormData(formRef.current);
    //  console.log(formData.get("productName"))
    const newProduct = {
      id: Date.now(),
      title: formData.get("productName"),
      price:formData.get("price"),
      stock:formData.get("stock"),
    }

    addProduct(newProduct)

  }

  return (
    <div className=''>
        <SubHeading>Create Product</SubHeading>
        <form ref={formRef}>
      <div className='grid grid-cols-3 gap-3'>
      <div className='col-span-3'>
        <div className="mb-2 block">
          <Label htmlFor="productName" value="Enter productName" />
        </div>
        <TextInput name='productName' id="productName" type="text" placeholder="Product Name" required shadow />
      </div>
      <div className='col-span-2'>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product Price" />
        </div>
        <TextInput name='price' id="price" type="number" placeholder="Price" required shadow />
      </div>
      <div className='col-span-1'>
        <div className="mb-2 block">
          <Label htmlFor="stock" value="Stock" />
        </div>
        <TextInput name='stock' id="stock" type="number" placeholder="Stock" required shadow />
      </div>
      <Button onClick={handleCreateForm} className='col-span-3' type='submit'>Done</Button>
      </div>
    </form>
    </div>
  )
}

export default CreateProductsForm
