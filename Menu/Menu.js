/* This is the data we will be using, study it but don't change anything, yet. */
/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul> .map

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
function createListItems(content){
  const newListItem = document.createElement('li');
  newListItem.textContent = content;
  return newListItem;
 }
 function createMenu(arrMenu) {
  const newMenu = arrMenu.map((item)=> createListItems(item));
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuList = document.createElement('ul');
  newMenu.forEach((item) => menuList.appendChild(item));
  menu.appendChild(menuList);
  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', (event) => {
    menu.classList.toggle('menu--open');
  })
  return menu;
 }
 const studentMenu = createMenu(menuItems);
 console.log(studentMenu);
 const header = document.querySelector('.header');
 header.appendChild(studentMenu);

