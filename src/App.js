import React, { useState } from "react";
import { ReactReader } from "react-reader";

function App() {
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
  };

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <h1>Hello world, This is an example text</h1>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="https://react-reader.metabits.no/files/alice.epub"
        />
      </div>
    </div>
  );
}

export default App;
