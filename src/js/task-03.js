const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const list = document.querySelector('.gallery');
// const imagesArr = images.map(image => {
//   const itemEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = `${image.url}`;
//   imgEl.alt = `${image.alt}`;
//   imgEl.classList.add('image');

//   itemEl.appendChild(imgEl);
//   console.log(itemEl);
//   return itemEl;
// })

// list.insertAdjacentHTML('beforeend', ...imagesArr);
// console.log(imagesArr);
//  //list.append( ...imagesArr);

 const list = document.querySelector('.gallery');
const imagesArr = images.map(image => {
  let content = `<img src="${image.url}" alt="${image.alt}" class="image" />`;
  console.log(content);
  return content;
})
console.log(...imagesArr);
imagesArr.forEach((img)=> {
  list.insertAdjacentHTML('beforeend', "<li>" +` ${img }` + "</li>");
})
  
