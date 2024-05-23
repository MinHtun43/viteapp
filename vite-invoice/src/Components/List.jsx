import { Button, Table } from "flowbite-react";
import React from "react";
import { HiMiniMinus } from "react-icons/hi2";
import { HiMiniPlus } from "react-icons/hi2";

const List = ({ item , removeItem , updateItemQualtity}) => {

  const handleDelBtn = () => {
    if(confirm ("Are You Sure To Delete?")){
      removeItem(item.id);
    }
  }
  const handleQualtityAdd = () => {
    updateItemQualtity(item.id , 1) 
  }
  const handleQualtitySub = () => {
    if(item.qualtity > 1){updateItemQualtity(item.id , -1) }
  }

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.product.title}
      </Table.Cell>
      <Table.Cell className="text-end">$ {item.product.price}</Table.Cell>
      <Table.Cell className="text-end">
        <div className="flex gap-3">
          <Button onClick={handleQualtitySub} size="xs" color="gray">
            <HiMiniMinus />
          </Button>
          <span>{item.qualtity}</span>
          <Button onClick={handleQualtityAdd} size="xs" color="gray">
            <HiMiniPlus />
          </Button>
        </div>
      </Table.Cell>
      <Table.Cell className="text-end">$ {item.cost}</Table.Cell>
      <Table.Cell>
          <Button onClick={handleDelBtn} href="#" className="font-medium text-white">
            Remove
          </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default List;
