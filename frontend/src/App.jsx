import { useState ,useEffect} from "react";

function App() {
  const [dataa, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <main>
        <section>
          {dataa.map((item) => {
            return (
              <div className="div" key={item.id}>
                <h1>name :{item.name} </h1>
                <h2>price : {item.price}</h2>
              </div>
            );
          })}
        </section>
  
      </main>
    </>
  );
}

export default App;
