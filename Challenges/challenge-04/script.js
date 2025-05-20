

const library = [{title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254},
{title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264},
 {title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245}];

 console.log(library);

 library.forEach(library => {
    library.libraryID = 1;
})

console.log(library);


