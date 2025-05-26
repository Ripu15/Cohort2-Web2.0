ECMA script is specification of scripting language on which javascript is based
JavaSvript is a scripting language that conforms to ECMAScript specs
JS brower engines:
VB : used by chrome- written in C
SpiderMonkey: used by firefox : C and Rust

Some smart people took out the V8 engine  
Added some Backend things (filesystem reads) on top 
to create a new runtime to compete with BE languages 
like Java

Other than the fact that JS is single threaded,  
Node.js is slow (multiple reasons for it) 
Some smart people said they wanted to re-write  
the JS runtime for the backend and introduced Bun 
It is a significantly faster runtime 
 
It is written in Zig

What can you do with Node.js? 
1. Create CLIs 
2. Create a video player 
3. Create a game 
and
4. Create an HTTP Server

HTTP Server:
1. A protocol that is defined for machines to communicate 
2. Specifically for websites, it is the most common way for your 
website’s frontend to talk to its backend


Frontend: HTML/CSS/JS
Backend: Node.js

HTML does a bunch of things : authentication is one of it

In the end, its the client throwing some information at a server 
Server doing something with that information 
Server responding back with the final result 
Think of them as functions, where  
1. Arguments are something the client sends 
2. Rather than calling a function using its name, the client uses a URL 
3. Rather than the function body, the server does something with the request 
4. Rather than the function returning a value, the server responds with some data

Things that happen in your browser 
after you fire this request  
(we will get to how to fire request to a backend server later)
1. Browser parses the URL 
2. Does a DNS Lookup (converts google.com to an IP) 
3. Establishes a connection to the IP (does handshake...)
What is DNS resolution 
URLs are just like contacts in your phone 
In the end, they map to an IP 
If you ever buy a URL of your own, you will need to point it 
to the IP of your server


What are the common methods you can send to your BE server? 
1. GET 
2. POST 
3. PUT 
4. DELETE

What are the common status codes the backend responds with? 
1. 200 - Everything is ok 
2. 404 - Page/route not found 
3. 403 - Authentication issues 
4. 500 - Internal server error

express- external library, to write http server
npm init -y
npm install express













