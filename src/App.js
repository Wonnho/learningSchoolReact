import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  console.log('props',props.title);

  return (
    <div>
      <header>
        <h1>
          <a href="/">{props.title}</a>
        </h1>
      </header>
    </div>
  );
}

function Nav(props) {
  const lists=[]
  for(let k=0;k<props.topics.length;k++) {
let t=props.topics[k];
lists.push(<li key={t.id}><a href={`/read/${t.id}`}>{t.title}</a></li>)
  }
  return (
    <div>
      <nav>
        <ul>
       {lists}
        </ul>
      </nav>
    </div>
  );
}

function Article(props) {
 
  return (
    <div>
      <article>
        <h1>{props.title}</h1>
        <h2><a href="/https://en.wikipedia.org/wiki/2026_Iran_war">Iran War, 2026</a></h2>
        <p>Operation Epic Fury was a major joint military campaign launched by the United States and Israel against Iran and its regional proxies, which began on February 28, 2026, and officially concluded with a ceasefire in early May 2026.</p>
      <blockquote>  
        <p>{props.body} </p>
        </blockquote>
      </article>
    </div>
  );
}

function App() {
   const topics=[{id:1,title:'gold land',body:'Horror'},
    {id:2,title:'Flight UA94',body:'Terrorism'},
    {id:3,title:'Sakarika',body:'Gangstar'}   
      ];

  return (
    <div>
      <Header title="Iran operations" />

      <Nav topics={topics} />

      <Article title="April news, 2026" body="This is the story this month. " />
    </div>
  );
}
export default App;
