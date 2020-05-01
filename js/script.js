/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Create a variable to store the student list item elements in the student list.
const listItems = document.querySelectorAll('.student-item');
//Create a variable to store the number of items to show on each “page”, which for this project, is 10.
const itemsPerPage = 10;
  

// Create the `showPage` function 
const showPage = (list, page) => {
// if page = 1, startIndex = (1*10) - 10 = 0, the first item on page 1 would be listItems[0].
// if page = 2, startIndex = (2*10) - 10 = 10, the first item on page 2 would be listItems[10]. And so on...
  const startIndex = (page * itemsPerPage) - itemsPerPage;
// if page = 1, endIndex = (1 * 10) = 10, results in 10 items
// if page = 2, endIndex = (2 * 10) = 20, results in 20 items
  const endIndex = page * itemsPerPage;
// now loop through the array [listItems] in order to show the ones that fit the criteria, and hide those that don't.
// so 'i' will start at 0, and be no greater than the length of the [listItems], and count upward by 1.
    for (let i = 0; i < list.length; i += 1){    
      if (i >= startIndex && i < endIndex ){
        list[i].style.display = '';
        } 
        else {
        list[i].style.display = 'none';
        }
      }
    }
//call the function so that only the first 10 items appear.
showPage(listItems, 1);



// Add functionality
const appendPageLinks = (list) => {
    // Create an equation that allows for 10 items per page.
    const pages = Math.ceil(list.length / itemsPerPage);
    // Create a 'div' element and give it the class name 'pagination'
    const div = document.createElement('div');
    div.className = 'pagination';
    // Attach the new div element to the div with class name 'page.'
    const pageDiv = document.querySelector('.page');
    pageDiv.appendChild(div);
    // Create an unordered list and attach it to the new div element.
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
    // Set the first 'a' element to 'active'
    const firstButton = document.querySelector('a');
    firstButton.classList.add('active');
    
    // Select all 'a'  elements to add functionality
    const buttonsAll = document.querySelectorAll('a');
    for (let i = 0; i < buttonsAll.length; i +=1){ 
    // Add a 'click' event listener to all buttons
        buttonsAll[i].addEventListener('click', (event) => {
    // This loop ensures the selected page is the only one highlighted 
    // and the button displays the proper list        
          for (let i = 0; i < buttonsAll.length; i +=1){
              buttonsAll[i].classList.remove('active');                 
              }
          event.target.classList.add('active');    
          if (event.target.tagName === 'A'){
    // *** This is where I have to add 1 to the page variable so that it doesn't
    //      calculate it with 'zero' and result in a negative number.
              showPage(list, (1+i));
                  }
          });       
        };
    }

 
//call the appendPageLinks

appendPageLinks(listItems);