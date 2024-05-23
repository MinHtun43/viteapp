import { Table, Button, TableRow } from "flowbite-react";
import React from "react";
import List from "./List";

const CheckOutItemList = ({ items, removeItem, updateItemQualtity }) => {
  const total = items.reduce((pv, cv) => pv + parseFloat(cv.cost), 0);
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className="text-end">Price</Table.HeadCell>
          <Table.HeadCell className="text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className="text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <List
              updateItemQualtity={updateItemQualtity}
              removeItem={removeItem}
              item={item}
              key={item.id}
            />
          ))}
          {items.length === 0 && (
            <TableRow>
              <Table.Cell
                colSpan={6}
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                {"There is no List"}
              </Table.Cell>
            </TableRow>
          )}
          <TableRow>
            <Table.Cell className="text-center" colSpan={3}>
              Total
            </Table.Cell>
            <Table.Cell className="text-end">$ {total.toFixed(2)}</Table.Cell>
          </TableRow>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckOutItemList;
