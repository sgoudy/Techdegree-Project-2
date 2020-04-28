/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Create a variable to store the student list item elements in the student list.
const listItems = document.querySelectorAll('.student-item');

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
    // so 'i' will start at 0, and be no greater than the length of the [listItems], and count upward by 1.
    for (let i = 0; i < list.length; i += 1){
      // the item variable equals the individual item in the [listItems]. I don't need to write this way, but it simplifies things.    
      let item = list[i];
      // this first loop will turn all of the items "off"
      item.style.display = 'none';
    }
      // this second loop will turn "on" the items that fit the criteria.
     for (let i = 0; i < list.length; i += 1){
        // the 'if' function here creates 10 total items per page 
        if (i >= startIndex && i < endIndex ){
          let item = list[i];
          item.style.display = '';
          }    
      }
  }   
   



showPage(listItems,1);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
    const pages = Math.ceil(list.length / itemsPerPage);
    const div = document.createElement('div');
      div.elementClassName = 'pagination';
    const pageDiv = document.querySelector('.page')
      pageDiv.appendChild(div);
    const ul = document.createElement('ul');
      div.appendChild(ul);
        for (let i = 1; i <= pages; i +=1){
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.textContent = i;
            li.appendChild(a);
            ul.appendChild(li);
            

         
        }
        return appendPageLinks;
      }
     


appendPageLinks(listItems);






// Remember to delete the comments that came with this file, and replace them with your own code comments.
