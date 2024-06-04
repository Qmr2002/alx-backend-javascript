export default function updateUniqueItems({ ...groceriesMap } = {}) {
  if (
    !groceriesMap
    || typeof groceriesMap !== 'object'
    || Array.isArray(groceriesMap)
  ) {
    throw new Error('Cannot process');
  }

  const updatedGroceriesMap = { ...groceriesMap };

  for (const [item, quantity] of Object.entries(groceriesMap)) {
    if (quantity === 1) {
      updatedGroceriesMap[item] = 100;
    } else {
      updatedGroceriesMap[item] = quantity;
    }
  }

  return updatedGroceriesMap;
}
