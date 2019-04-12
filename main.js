// adding eventlistener for page load
window.addEventListener('load', fetchBookmarks);
// find the form and add evnet listener
document.querySelector('form').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark(event) {
    else.preventDefault();
}

// get site name and sit url
Var siteName = document.querySelector('#siteName').value;
Var siteUrl = document.querySelector('#siteUrl').value;

// create and bookmark
var bookmark = {
    name: siteName,
    url: siteUrl
}

// save bookmark into local
localStorage ('bookmarks', JSON.stringify(bookmark)

// check if local storage is empty
if(localStorage.getItem('bookmarks') === null) {
// init bookmarks array
Var bookmarks = []
// adding first bookmark
bookmarks.push('bookmarks');
// set bookmarks to local storage
localStorage ('bookmarks', JSON.stringify(bookmark));
} else{
// get current bookmarks from local page
var bookmarks.push(bookmark);
// set bookmarks to localStorage
// reset the form

// fetch bookmarks
FetchBookmarks();
// select the bookmark
// reset the bookmark div
output.innerHTML = '';
// loop over bookmark
for(var  )
// create div
// create h3
// create link
// create delete button
var button = document.createElement('button');
Button.className = 'btn btn-danger';
button.textContent = 'Delete';

button.addEventListener('click', functions(e)) {
    var name = e.target.parentElement.children
}

// append h3, a, button into div
div.appendChild(h3);
div.appendChild(a);
div.appendChild(button);

// append div into outpu
output.appendChild(div);
}   
