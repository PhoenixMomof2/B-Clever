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

// timer for logout toast
export const wait = () => new Promise(res => setTimeout(res, Math.random() * 900))

// colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0
  return `${existingBudgetLength * 34} 65% 50%`
}

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

// Get all items form local storage
export const getAllMatchingItems = ({category, key, value}) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value )
}

// delete item from local storage
export const deleteItem = ({key, id}) => {
  const existingData = fetchData(key);
  if(id){
    const newData = existingData.filter((item) => item.id !== id);
      return localStorage.setItem(key, JSON.stringify(newData))
  }
  return localStorage.removeItem(key);
}

//create budget
export const createBudget = ({
  name, amount
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(), 
    amount: +amount,
    color: generateRandomColor()
  }
  const existingBudgets = fetchData("budgets") ?? []
  return localStorage.setItem("budgets", 
  JSON.stringify([...existingBudgets, newItem]))
}
//create expense
export const createExpense = ({
  name, amount, budgetId
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(), 
    amount: +amount,
    budgetId: budgetId
  }
  const existingExpenses = fetchData("expenses") ?? []
  return localStorage.setItem("expenses", 
  JSON.stringify([...existingExpenses, newItem]))
}

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // the reduce method is like a map or filter with superpowers, can do multiple things in the same loop, can return any value from

    // check if the expense.id === budgetId I passed in
    if(expense.budgetId !== budgetId) return acc

    // add the current amount to my total 
    return acc += expense.amount
  }, 0)
  return budgetSpent
}

// FORMATTING

// format percentage
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0
  })
}

// format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD"
  })
}

// format date of expense
export const formatDateToLocaleString = (epoch) => 
  new Date(epoch).toLocaleString()