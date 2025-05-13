import React from 'react';
//SWR stands for stale-while-revalidate.
import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json());

//This function tells useSWR how to fetch data.
//It makes a GET request to the given url, parses the response as JSON, and returns it.

const fetcher = async function(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

//useSWR(url, fetcher) fetches data from the specified URL using the fetcher.

//It returns an object with:
//data: the returned JSON (once loaded),
//error: any error encountered while fetching,
//isLoading: whether it's still loading.

function App() {
  const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello, you have {data.todos.length} todos!</div>
}

export default App;