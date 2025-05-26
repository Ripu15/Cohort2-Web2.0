//JS makes HTML page active and dynamic using the DOM(Documemt Object MOdel)
//very basic example of dynamic and active website: suppose we want a button to change
//colour as it gets clicked 

//DOM is not a programming language, its a programming interface for web documents
//Basically it represents the page so that programs can chnage document structure,style and content
//DOM is tree like representation of web-page which gets loaded into browser
//so, DOM is web API used to build 
//Accessing the DOM
//When a sript whether inline in a <script> element or included in the web page, 
//u can immidiately begin using API for document to manipulate document
//DOM represnets web-page using series of objects.
//Main object id 'document' object, that has other objs and so on

//When a web-Browser parses a HTML document,it builds aDOM tree and then
//uses it to display the document.
/*
    The DOCUMENT Object
    - It is top most object in DOM
    -It has properties and methods that are used to get info about document using dot notation rule
*/
/*
if u want to manipulate HTML elements, we need to find elements first. This can be done by multiple ways:
1. by id
2. tag name
3. class name
4. CSS selectors
5. HTML object collections  
document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title


HTML collection vs NodeList
 getElementByClassName() and getElementByTagName() returns live html collection
 querySelectorAll() returns a static NodeList

 A collection of document elements
 A collection of document nodes(elements,nodes, attribute nodes etc)

 Items are accessed by name,id or index number
 Items can only be accessed by index number
*/

/*
-The entire document is 'document node'
-Every HTML element is 'element node'
-Every text inside HTML element is 'text node'
-Every HTML attribute is 'attribute node'


node method: 
- node.childNodes
- node.firstChild
- node.lastChild
- node.parentNode
- node.nextSibling
- node.prevoiusSibling

DOM Events
HTML DOM allows JS to react to HTML events
JS can be executed when an event occurs, like when a user clicks on an HTML element
so, "onclick = JavScript"

Onload andOnunload function:
The onload and onunload events are triggered when user enters or leaves the page
These can also be used to deal with cookie


*/