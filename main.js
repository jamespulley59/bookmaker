// adding eventlistener for page load
window.addEventListener('load', fetchBookmarks);

// find the form and add event listener
document.querySelector('form').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark(e) {
// prevent page from loading
    e.preventDefault();

// get site name and sit url
var siteName = document.querySelector('#siteName').value;
var siteUrl = document.querySelector('#siteUrl').value;

// create a bookmark object
var bookmark = {
    name: siteName,
    url: siteUrl
}

// check if the local storage is empty
if(localStorage.getItem('bookmarks') === null) {
// init bookmarks array
Var bookmarks = []
// adding first bookmark
bookmarks.push(bookmark);
// set bookmarks to local storage
localStorage.setItem('bookmarks', JSON.stringify(bookmark));
} else{
// get current bookmarks from local page
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
// push new bookmark into bookmarks
bookmarks = push(bookmark);
// set bookmarks to localStorage
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// reset the form
document.querySelector('form').reset();

// fetch bookmarks
FetchBookmarks();
}

// fetch bookmarks
function fetchBookmarks() {
// get bookmarks from local storage
var bookmarks =  JSON.parse(localStorage.getItem('bookmarks'));
}
// select the bookmark div
var output = document.querySelector('#bookmarks');

// reset the bookmark div
output.innerHTML = '';

// loop over bookmark
for(var i=0; i<bookmarks.length; i++) {
// create div
    var div = document.createElement('div');
// create h3
    var h3 = document.createElement('h3');
    h3.textContent = bookmarks[i].name;

//create visit link
var a = document.createElement('a');
a.href = bookmarks[i].url;
a.className = 'btn btn-success';
a.textContent = 'visit'

//create delete button
var button = createElement('button');
button.className = 'btn btn-danger';
button.textContent = 'Delete';

button.addEventListener('click', function(e) {
    var name = e.target.parentElement.children[0].textContent;
    deleteBookmark(name);
})


// append h3, a, button into div
div.appendChild(h3);
div.appendChild(a);
div.appendChild(button);

// append div into outpu
output.appendChild(div);
}  
}

function deleteBookmark(name) {
// get bookmarks from local storage
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

// loop over bookmarks
for(var i=0; i<bookmarks.length; i++) {

// looking for bookmark by given name
if(bookmarks[i].name === name) {
    bookmarks.splice(i, 1);
    break;
}
}
 // reset bookmarks into localStorage
 localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

 //re-fetch bookmarks output
 fetchBookmarks();
}
   
