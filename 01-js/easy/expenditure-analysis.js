/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
//Hello
function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0) {
    return [];
  }

  const categoryTotals = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    const totalSpent = categoryTotals[category] || 0;
    categoryTotals[category] = totalSpent + price;
  });

  return Object.entries(categoryTotals).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;
