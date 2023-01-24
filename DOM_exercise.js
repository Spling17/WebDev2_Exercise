/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const paragraphP = document.querySelector('p');
const texts = paragraphP.textContent;


/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const paragraphA = document.createElement('a');
paragraphP.after('paragraphA');
paragraphA.innerHTML = '<p><a href=`http://officeipsum.com/`> Officeipsum</a></p>';

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const texTerminated = paragraphP.innerHTML.split('.');
paragraphP.innerHTML = texTerminated.join('.<br/>');

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const numH1 = querySelector('h1');
document.numH1.textContent = numH1.length;
paragraphP.innerText 


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

