import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./pagination";
import './styles/fonts.css';

function App() {
  return (
    <div>
      <div className="text-center p-4">
        <h3 style={{color: "#204A63", fontSize: "40px" ,fontFamily: 'Khand, sans-serif'}}>3 Tier Amenities & Facilities</h3>
      </div>
     <Pagination/>
    </div>
  );
}

export default App;
