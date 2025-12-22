//SECTION A — SELECTING ELEMENTS 
//1. Select the <h1 id="mainTitle"> using getElementById and change its text to:
//"Welcome to the DOM Laboratory"

let title = document.getElementById('mainTitle');
title.innerText='Welcome to the DOM Laboratory'

//2. Select all elements with class "info" using 
// getElementsByClassName and change their text color to red.

let info = document.getElementsByClassName("info");
for (item of info){
    item.style.color="red"
}

//3. Select all <p> tags inside section1
//  using getElementsByTagName and set their background color to lightblue.

let Allparagraph = document.getElementById('section1').getElementsByTagName('p')
for (item of Allparagraph){
    item.style.background='lightblue'
}

//4. Use querySelector to select the first <p> inside section1 and make its text bold.

let para =document.getElementById('section1').querySelector('p')
para.style.fontWeight='bold'

//5. Use querySelectorAll to select all <li> inside #myList and add a 1px solid black border to each.
let list = document.getElementById('myList').querySelectorAll('li')
for (item of list){
    item.style.border='1px solid black'
}

//6. Select the link #myLink using querySelector and change its text to "Visit Google".

let link = document.querySelector('#myLink')
link.textContent='Visit Google'

//7. Select the card #section4 using querySelector(".card") and change its background to orange.
let sec4 = document.getElementById('section4').querySelector('.card')
sec4.style.background= 'orange'//?????????????????????????????

//8. Select the second .info element using querySelectorAll and increase its font-size to 20px.

//9. Select all <div> elements using getElementsByTagName and add the class "highlight" to each.

//10. Select #output h2 and change its text to:"DOM Output Area"

//SECTION B— CHANGING CONTENT, ATTRIBUTES & STYLES

//11. Change the text of #p1 using .textContent to:"This text was updated using textContent()"

let pa = document.getElementById('p1')
pa.textContent='This text was updated using text content'

//12. Replace all content inside #section2 using .innerHTML with:<a href="#">New Dynamic Link</a>

let sec2 = document.querySelector('#section2').querySelectorAll("a")
for(itm of sec2){
    itm.innerHTML="<a href='#'> New dynamic link</a>"//?????????????????????
}

//13. Get the current href value of #myLink using getAttribute() and print it in the console.

//14. Change the href of #myLink to: https://example.com using setAttribute().

//15. Change the CSS styles:
//section1 background → green
//section3 text color → blue

//16. Add a class "highlight" to #section1.

//17. Remove the class "highlight" from #section1.


//SECTION C — CREATING & INSERTING ELEMENTS 
//18. Create a new <p> with text "New Paragraph Created!" and append it inside the output section.

//19. Create a new <li> with text "Item D" and append it to #myList

//20. Create a new <div> with class "card" and text "Dynamically Added Box" and append it to the <body>.

//21. Insert a new <li> (text: "Item X") before "Item B" in the list.

//22. Insert a new <p> before the first paragraph in section1.

//23. Create a new <button> with label "Alert"
//When clicked, it must show an alert saying "Hello!"
//Append the button to section4.

//24. Add another <h2> inside output using:
//output.innerHTML += "<h2>Extra Output</h2>";

//25. Duplicate the paragraph #p1 and append the duplicate inside section3.



// SECTION D — REMOVING & REPLACING ELEMENTS 

//26. Remove "Item A" from the list using .remove() or .removeChild().


//27. Remove the entire #section4 card using .remove().

//28. Remove the last <li> inside #myList.

//29. Remove the message <p id="btnMsg"> using .remove().

//30. Replace "Item B" with a new <li> containing the text "Replaced Item".

//31. Replace the heading #mainTitle with a new <h1> saying:"DOM Mastery in Progress"

//32. Replace each .info paragraph with:<p>Replaced Info Paragraph</p>

//33. Replace the link in section2 with a button labeled "Click Here".

//34. Replace the <h2> inside the output card using replaceChild.
