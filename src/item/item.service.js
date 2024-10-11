const { insertItem, findItems, findItemById, editItem, deleteItem } = require("./item.repository");

//Logika menambah item baru
async function createItem(newItemData) {
    const newItem = await insertItem(newItemData);
    return newItem;
} //end of Logika menambah item baru

// Function untuk memanggil function pada repository
async function getAllItems() {
    const items = await findItems();
    return items;
}

async function getItemById(id) {
    const item = await findItemById(id);
    if (!item) {
        throw Error("Item not found");
    }
    return item;
}

async function editItemById(id, itemData) {
    await getItemById(id);
    const updatedItem = await editItem(id, itemData);
    return updatedItem;
}

async function deleteItemById(id) {
    await getItemById(id);
    await deleteItem(id);
}

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    editItemById,
    deleteItemById
};
