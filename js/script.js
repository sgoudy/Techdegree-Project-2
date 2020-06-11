/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
const headerEl = document.querySelector('.cf');

 // Add search button
const search = document.createElement('div');
const form = document.createElement('form');
form.innerHTML = `
          <div class="student-search">
          <input placeholder="Search for students...">
          <button>Search</button>
          <p>To Reset Form: Clear Search & Hit Enter</p>
          </div>`
headerEl.appendChild(search);
search.appendChild(form)

// Create the `showPage` function 
// *Added the search variable for the search event listener below.
const showPage = (list, page, search) => {
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = page * itemsPerPage;
    for (let i = 0; i < list.length; i += 1){    
        if (i >= startIndex && i < endIndex ){
          list[i].style.display = '';
        } else {
          list[i].style.display = 'none';
        }
    }
}

showPage(listItems, 1)

//-------------------------------------------------------------------------------//
// Add functionality
// This first section places a 'div' element with a 'ul' at the bottom of the page.
// 
const appendPageLinks = (list) => {
  const pages = Math.ceil(list.length / itemsPerPage);
  const div = document.createElement('div');
  div.className = 'pagination';
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);  
// This loop builds the buttons. 
  for (let i = 1; i <= pages; i +=1){
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.appendChild(a);
      ul.appendChild(li);
      a.textContent = i;
      a.setAttribute('href', "#");  
  }
// Set the first button as active, initially      
  const firstButton = document.querySelector('a');
  firstButton.classList.add('active');
// This set of loops uses a 'click' event that adds and removes 'active' class and 
// calls the showPage function.
  const buttonsAll = document.querySelectorAll('a');
      for (let i = 0; i < buttonsAll.length; i +=1){ 
          buttonsAll[i].addEventListener('click', (event) => {      
              for (let i = 0; i < buttonsAll.length; i +=1){
                  buttonsAll[i].classList.remove('active');                 
              }
              event.target.classList.add('active');    
                  if (event.target.tagName === 'A'){
                    showPage(list, (1+i));
                   // ulStudLis.removeChild(lis);
                  }
          })   
      }
  }
appendPageLinks(listItems)

//-------------------------------------------------------------------------------//
// Search functionality
// 
const input = document.querySelector('input');

function formSearch(e) {
    const studItem = document.getElementsByClassName('student-item');
    e.preventDefault();
    const inputVal = input.value;
    let people = [];
    for (let i =0; i <studItem.length; i++){
        const name = studItem[i].children[0].children[1].textContent;
        people.push(name);
        }
    for (let i =0; i <people.length; i++){
        if (people[i].includes(inputVal)){
            const index = i;
            studItem[i].style.display = '';
        } else {
            studItem[i].style.display = 'none';
        }
    }
}
 
form.addEventListener('submit', formSearch)