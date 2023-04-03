export const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const updateResource = (collection, updatedItem) => {
  return collection.map(item => {
    if(updatedItem.id === item.id) {
      return updatedItem;
    } else {
      return item;
    }
  })
}

export const updateResourceCollection = (object, key, collection) => {
  return { ...object, [key]: collection };
}

export const addResource = (collection, addedItem) => {
  return [...collection, addedItem];
}