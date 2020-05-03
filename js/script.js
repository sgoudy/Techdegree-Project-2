/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Global variables for 'meets' criteria
const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

// Global variables for 'exceeds' criteria
  // Create a form (parent element) for search function
const headerEl = document.querySelector('.page-header');
const form = document.createElement('form');
headerEl.appendChild(form);
 // Add search button
const studSearchBut = document.createElement('button');
studSearchBut.textContent = 'Search';
studSearchBut.className = 'student-search';
form.appendChild(studSearchBut);
// Add text input box
const studSearchInput = document.createElement('input');
studSearchInput.value = '';
studSearchInput.className = 'student-search';
form.appendChild(studSearchInput);  



// Create the `showPage` function 
// *Added the search variable for the search event listener below.
const showPage = (list, page, search) => {
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
// Below variables are for the search function.
  const lis = document.createElement('li');
  const ulStudLis = document.createElement('ul');
  ulStudLis.className = 'student-details';
  headerEl.appendChild(ulStudLis);
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
            ulStudLis.removeChild(lis);
            }
      });       
    };
// Added an 'exceeds' event listener to allow for searching.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentName = document.querySelectorAll('h3');
    const studentInfo = document.querySelectorAll('.student-item');
// This loop allows me to compare the input text to the array of student names and see if the value exists (> -1).
// If it does, a list item is created that includes all of the info for that student.
// I called the function show page and added the variable lis
          for (let i = 0; i < studentName.length; i +=1){
            if (studentName[i].textContent.toLowerCase().indexOf(studSearchInput.value.toLowerCase()) > -1) {           
              lis.textContent = studentInfo[i].textContent;
              ulStudLis.appendChild(lis);         
              showPage(list, i, lis);
              }
            }
    });
 }
 
appendPageLinks(listItems);