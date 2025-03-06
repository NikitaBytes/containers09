const box = document.querySelector('.box');

box.addEventListener('click', () => {
  alert('Hello from JavaScript!');
});

box.addEventListener('mouseenter', () => {
  console.log('Hover detected!');
});
