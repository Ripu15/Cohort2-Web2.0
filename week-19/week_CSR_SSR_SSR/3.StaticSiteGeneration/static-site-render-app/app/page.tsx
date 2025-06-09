//?? Learn About 
//How to  generate statically dunamic routes using NextJS

//Just make one copy of static-page
//It does not render page again instead
//it lets multiple clients to fetch it
//copy is generated with 'npm run build'
//This is called 'static site generation'
//use case of SSG is blogging web-site

//Even though the BE is reponding with different todos
//But in not rendering different todos
//this is because the page is statically generated
//static file resides: .next/server/app/index.html

//if there is difference of 10s bw 2 calls it will
//second call will re-fetch the server or will invalidate the cache

import  revalidate  from '../lib/action1/actionCache'

export default async function Blog() {
  const res = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos'] } })
  const data = await res.json();
  const todos = data.todos;
//We can see logs at bult time only
  // console.log("Data found from server is : ");
  // console.log(JSON.stringify(data));
  revalidate();
  return <div>
      {todos.map((todo: any) => <div key={todo.id}>
          {todo.title}
          {todo.description}
      </div>)}
  </div>
  
}