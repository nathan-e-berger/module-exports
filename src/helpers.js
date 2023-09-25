function choice(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function remove(items, item) {

  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return items.splice(i, 1);
    }
  }

  return undefined;
}

export {
  choice,
  remove
};