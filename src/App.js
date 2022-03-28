import "./styles.css";

export default function App() {
  let name = "jindam";

  const obj = {
    name: "Hanamantu"
    // we have bind this obj object tohello function in ob
    // u can also bind ob object also to the hello function to access proper. of ob
  };
  const ob = {
    name: "sapana",
    hello: function () {
      console.log(this.name); //accessing proper. of its own object
      console.log(name); //accessing global elements
    }
  };
  // const hello2 = ob.hello;
  const hello1 = ob.hello.bind(ob);
  const hello2 = ob.hello.bind(obj); //ob.hello.call(ob);//ob.hello.apply(ob);
  //this is the correct way to call this inside a function
  hello2();
  hello1();
  return (
    <div className="App">
      <h1>This Keyword understending</h1>
      <h2>function present in object </h2>
      <p>for which we can bind any object </p>
    </div>
  );
}
