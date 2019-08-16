'use strict';

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction(itemName);
};

const boundInvetoryAdd = inventory.add.bind(inventory);

invokeInventoryOperation('Аптечка', boundInvetoryAdd);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

const boundInvetoryRemove = inventory.remove.bind(inventory);

invokeInventoryOperation('Фильтр', boundInvetoryRemove);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']