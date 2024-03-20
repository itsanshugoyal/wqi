import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./NavBar";
import Weather from "./Weather";
import Water from "./Water";
import Askme from "./ChatGpt";
import ECommerce from "./ECommerce";
import Feedback from "./Feedback";
import WQICal from "./WaterqualityCalculator";
import Air from "./Air";
import WhatsApp from "./Whatsapp";

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="" element={<Weather />} /> {/* Set the Weather page as default */}
          <Route path="/weather" element={<Weather />} />
          <Route path="/water" element={<Water />} />
          {/* <Route path="/Air" element={<Air />} /> */}
          {/* <Route path="/askme" element={<Askme />} /> */}
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/wqi calculator" element={<WQICal />} />
          <Route path="/Whatsapp" element={<WhatsApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
