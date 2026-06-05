import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Header(props) {
  console.log("props", props.title);

  return (
    <div>
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              props.onChange();
            }}
          >
            {props.title}
          </a>
        </h1>
      </header>
    </div>
  );
}

function Nav(props) {
  const lists = [];
  for (let k = 0; k < props.topics.length; k++) {
    let t = props.topics[k];
    lists.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={`/read/` + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChange(e.target.id);
          }}
        >
          {t.title}
        </a>
      </li>,
    );
  }
  return (
    <div>
      <nav>
        <ul>{lists}</ul>
      </nav>
    </div>
  );
}

function Article(props) {
  return (
    <div>
      <article>
        <h1>{props.title}</h1>
        <h2>
          <a href="https://en.wikipedia.org/wiki/2026_Iran_war">
            Iran War, 2026
          </a>
        </h2>
        <p>
          Operation Epic Fury was a major joint military campaign launched by
          the United States and Israel against Iran and its regional proxies,
          which began on February 28, 2026, and officially concluded with a
          ceasefire in early May 2026.
        </p>
        <blockquote>
          <p>{props.body} </p>
        </blockquote>
      </article>
    </div>
  );
}

function Create(props) {
  return (
    <div>
      <article>
        <h1>Create</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        console.log(title, body);
        props.onCreate(title, body);
      }}>

      <p>  <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
        <textarea type="text" name="body" placeholder="body"></textarea>
        </p>
        <p> <input type="submit" value="Create"></input></p>
      </form>
      </article>
    </div>
  );
}


function Update(props) {
  return (
    <div>
      <article>
        <h1>Update</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        console.log(title, body);
        props.onUpdate(title, body);
      }}>

      <p>  <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
        <textarea type="text" name="body" placeholder="body"></textarea>
        </p>
        <p> <input type="submit" value="Update"></input></p>
      </form>
      </article>
    </div>
  );
}

function App() {

  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  let content = null;
 
  const [topics, setTopics] = useState([
    { id: 1, title: "gold land", body: "Horror" },
    { id: 2, title: "Flight UA94", body: "Terrorism" },
    { id: 3, title: "Sakarika", body: "Gangstar" }
  ]);

  const [nextId, setNextId] = useState(4);

let contextControll=null;

  if (mode === "WELCOME") {
    content = (
      <Article title="Welcome" body="Welcome to the Iran operations " />
    );
  } else if (mode === "READ") {
    // let title, body = null;
     let title = "";
      let body = "";

    for (let k = 0; k < topics.length; k++) {
      if (topics[k].id === Number(id)) {
         title = topics[k].title;
          body = topics[k].body;
           break; // Stop looping once found!
        }
          }  
      content=<Article title={title} body={body} />
      contextControll = <li><a href={`/update/` +id } onClick={(e) => {
        e.preventDefault();
        setMode("UPDATE");
      }}> Update</a></li>
  }
   else if (mode === "CREATE") {
    content=<Create onCreate={(_title, _body) => {
      const newTopic = {title:_title,body:_body,id:nextId};
      setTopics([...topics, newTopic]);
      setMode("READ");
      setId(nextId);
      setNextId(nextId + 1);

    }}></Create>
  }
    else if (mode === "UPDATE") {
      content=<Update></Update>
   
   }

  return (
    <div>
      <Header
        title="Iran operations"
        onChange={function () {
          setMode("WELCOME");
        }}
      />

      <Nav
        topics={topics}
        onChange={(k) => {
          setMode("READ");
          setId(k);
        }}
      />

{content}
<ul>
  <li>
<a href="/create" onClick={(e) => {
  e.preventDefault();
  setMode("CREATE");
}}> Create</a>
</li>
<li>
 {/* <a href="/update">Update</a> */}
   {contextControll}
</li>
</ul>
    </div>
  );
}

export default App;
