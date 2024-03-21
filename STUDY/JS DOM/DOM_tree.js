/**
 * According to the DOM every HTML tag is an object and the nested tags are
 * children of the enclosing object.
 * The text inside the tag is an object as well.
 * 
 * document.body represents the <body> tag
 * Running this code will make the <body> red for 3 seconds
 */

document.body.style.background = 'red'
//Make the backgrounmd red

setTimeout(() => document.body.style.background = '', 3000);
//count  3 seconds and reset the background to default

/**
 * innerHTML - HTML contents of the node
 * offsetWidth - the node width in pixels
 */

//<!DOCTYPE HTML>
<html>
    <head>
        <title>About elk</title>
        <script>
            alert("Grom HEAD: " + document.body);
        </script>
    </head>
    <body>
        <script>
            alert("From HEAD " + document.body);
        </script>
        <h1>The truth about elk </h1>
        <ol>
            <li>An elk is a smart</li>
            {/* <!-- comment --> */}
            <li>...and cunning animal</li>
        </ol>
        <div>
            Begin
        </div>
        <ul>
            <li>Information</li>
        </ul>
        <div>End</div>
        <script>
            {/* for (let i = 0; i < document.body.childNodes.length; i++) {
                alert(document.body.childNodes[i] );
            } */}
        </script>
    </body>
</html>

/**
 * There are 12 node types, commonly work with
 * - document
 * - element nodes
 * - text nodes
 * - comments
 */


/**
 * The DOM allows us to do anything with elements and their objects
 * but first we have to reach the corresponding elements.
 * All operations on the DOM start with the document object.
 * 
 *          document
 * 
 *          document.documentElement
 * 
 *          document.head
 * 
 *          document.body
 * 
 * 
 * - If a script is inside <head> then document.body would return null because
 * the browser hasnt read it yet.
 * 
 * - In the example below, the first alert shows null {Ref: above}
 * 
 * - child nodes (children) - Elements nested in another element
 * - Descendants - All elements nested inside an element
 */

for (let node of document.body.childNodes) {
    alert(node); //shows all nodes from the collection
}

//parent of <body> is <html>
alert(document.body.parentNode === document. documentElement); //true\


//after <head> goes <bosy>
alert(document.head.nextibling); //HTMLBodyElement

//before <body> goes <head>
alert(document.body.previousSibling); //HTMLHeadElement

