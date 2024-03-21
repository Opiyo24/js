//Represents all page contents as objects that can be modified
//The document object is the main entry point into te web page.

//change the background color to red
document.body.style.background = "red";

//change ot nack after 1 second
setTimeout(() => document.body.style.background = "", 1000);

alert(location.href);//shows the ncurrent url

if (confirm("Go to Wikipedia?")) {
    location.href = "https://wikipedia.org";//redirects the browser to another page
}


// DOM - Decsribes the document structure, manupuilations and events
//BOM - Provides methods and properties for browser interaction