const refs = {
  item: document.querySelectorAll('.item'),
  headings: document.querySelectorAll('h2'),
  list: document.querySelectorAll('.item ul'),
};
console.log(`Number of categories: ${refs.item.length}`);
refs.item.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
