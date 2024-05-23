import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useRef } from "react";

const CheckOutForm = ({ products, addItem }) => {

  const formRef = useRef();
  const handlerRef = (event) => {
    event.preventDefault();
    const id = Date.now();
    const currentProduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value)
    );

    const qualtity = parseInt(qualtityRef.current.value);
    const cost = (qualtity * currentProduct.price).toFixed(1);

    const newItem = {
      id,
      product: currentProduct,
      qualtity,
      cost,
    };
    addItem(newItem);
    formRef.current.reset();
    //  console.log(selectRef.current.value)
    //  console.log(qualtityRef.current.value)
  };

  const selectRef = useRef();
  const qualtityRef = useRef();

  return (
    <>
      <form ref={formRef} onSubmit={handlerRef} className="w-[700px] block">
        <div className="grid grid-cols-5 gap-3">
          <div className=" col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="products" value="Select your Products" />
            </div>
            <Select ref={selectRef} id="products">
              {products.map(({ id, title }) => (
                <option value={id} key={id}>
                  {title}
                </option>
              ))}
            </Select>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Base input" />
            </div>
            <TextInput required ref={qualtityRef} id="base" type="number" sizing="md" />
          </div>
          <div className="col-span-1">
            <Button
              type="submit"
              className="w-full h-full flex justify-center items-center">
              Buy
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
