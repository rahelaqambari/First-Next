import { setTimeout } from "node:timers";

type Author = {
    id: number,
    name: string
};

async function Author({userid}: {userid: number}) {
    new Promise(r =>setTimeout (r, 3000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/user/${userid}`);
    const author: Author = await response.json();
  return (
    <div>
      <h1>Author|name: {author.name}</h1>
    </div>
  )
}

export default Author
