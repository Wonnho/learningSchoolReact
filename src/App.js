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

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/about">Strategy</a>
          </li>
          <li>
            <a href="/contact">Iran</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Article() {
  return (
    <div>
      <article>
        <h2><a href="/https://en.wikipedia.org/wiki/2026_Iran_war">Iran War, 2026</a></h2>
        <p>Operation Epic Fury was a major joint military campaign launched by the United States and Israel against Iran and its regional proxies, which began on February 28, 2026, and officially concluded with a ceasefire in early May 2026.</p>
      </article>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header title="Iran operations" />

      <Nav />

      <Article />
    </div>
  );
}
export default App;
