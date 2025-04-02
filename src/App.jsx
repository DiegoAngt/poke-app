import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container game*/}
        <div
          style={{
            width: "350px",
            height: "500px",
            backgroundColor: "#eee",
            border: "2px black solid",
            borderRadius: "5px 5px 35px 5px",
          }}
        >
          {/*container screen*/}
          <div
            style={{
              paddingTop: "5%",
              paddingBottom: "25%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "85%",
                height: "200px",
                backgroundColor: "#bdae58",
              }}
            ></div>
          </div>

          {/*container buttons*/}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "black",
              }}
            ></div>
            <div style={{ paddingTop: "30%" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "grey",
                }}
              >
              </div>
            </div>
            {/*Botones A y B*/}
            <div
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                backgroundColor: "black",
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "#a93671",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginTop: "25px",
                  }}
                ></button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#a93671",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;