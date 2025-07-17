const lightbox = new SimpleLightbox(".certificates__link", {
  captions: true,
  captionPosition: "bottom",
});
// console.log(lightbox);
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" },
  { id: 4, name: "Diana" },
];

const arr = users.filter((user, index, arr) => {
  const curIndex = arr.findIndex(({ id }) => id === user.id);

  return curIndex === index;
});
console.log("arr :>> ", arr);
