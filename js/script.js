/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
  

// Create the `showPage` function 
const showPage = (list, page) => {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
    for (let i = 0; i < list.length; i += 1){    
      if (i >= startIndex && i < endIndex ){
        list[i].style.display = '';
        } 
        else {
        list[i].style.display = 'none';
        }
      }
    }

showPage(listItems, 1);

//-------------------------------------------------------------------------------//
// Add functionality
// This first section places a 'div' element with a 'ul' at the bottom of the page.
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
              }
        });       
      };
  }

appendPageLinks(listItems);