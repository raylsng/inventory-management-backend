const prisma = require("../db");

//API untuk menambahkan Data Item
async function insertItem(itemData) {
    const newItem = await prisma.item.create({
        data: {
            name: itemData.name,
            description: itemData.description,
            quantity: itemData.quantity
        }
    });
    return newItem;
} //End Of API untuk menambahkan Data Item

//API untuk menampilkan Data Item pada Database
async function findItems(){
    const items = await prisma.item.findMany();
    return items;
}

async function findItemById(id){
    const item = await prisma.item.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    return item;
}
//End of API untuk menampilkan Data Item pada Database 

//API untuk mengupdate Data Item pada Database
async function editItem(id, itemData) {
    const updatedItem = await prisma.item.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: itemData.name,
            description: itemData.description,
            quantity: itemData.quantity
        },
    });
    return updatedItem;
}
//End of API untuk mengupdate Data Item pada Database

//API untuk menghapus Data Item
async function deleteItem(id) {
    await prisma.item.delete({
        where: {
            id: parseInt(id)
        }
    });
}// End of API untuk menghapus Data item

//API untuk mengupdate Quantity Item pada Database
async function updateItemQuantity(itemId, newQuantity) {
    await prisma.item.update({
      where: {
        id: parseInt(itemId),
      },
      data: {
        quantity: newQuantity,
      },
    });
  }  
//End of API untuk mengupdate Quantity Item pada Database

module.exports = {
    insertItem,
    findItems,
    findItemById,
    editItem,
    deleteItem,
    updateItemQuantity,
};
