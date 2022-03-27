import "./styles.css";
const name = "Frank";
const insulin = 25;

export default function App() {
  return (
    <div className="App">
      <h1>
        Hello {name} your need {insulin} units of insulin
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
