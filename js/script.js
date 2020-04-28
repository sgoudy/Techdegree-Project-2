/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Create a variable to store the student list item elements in the student list.
const listItems = document.querySelectorAll('.student-item cf');

//Pro Tip: Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
//Create a variable to store the number of items to show on each “page”, which for this project, is 10.

const itemsPerPage = 10;

 
  // Create the `showPage` function to hide all of the items in the 
  // list except for the ten you want to show.

function showPage (list, page){
  // if page = 1, startIndex = (1*10) - 10 = 0, the first item on page 1 would be listItems[0].
  // if page = 2, startIndex = (2*10) - 10 = 10, the first item on page 2 would be listItems[10]. And so on...
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  // if page = 1, endIndex = (1 * 10) = 10, results in 10 items
  // if page = 2, endIndex = (2 * 10) = 20, results in 20 items
  let endIndex = page * itemsPerPage;
    // now loop through the array [listItems] in order to show the ones that fit the criteria, and hide those that don't.
    // so i will start at 0, and be no greater than the length of the [listItems], and count upward by 1.
    for (i = 0; i < listItems.length; i += 1){
      // the item variable equals the individual item in the [listItems]
      let item = listItems[i];
      // if the startIndex (a function of the 'page' input) is less than or equal to the individual item, it should be 'displayed',
      // and display all those up until endIndex.
      if (startIndex <= item < endIndex){
          item.style.display = '';
      } else {
          item.style.display = 'none';
      }
    }   
}

showPage(listItems,1);
/***
   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks (){


}




// Remember to delete the comments that came with this file, and replace them with your own code comments.
