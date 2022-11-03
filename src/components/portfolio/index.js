import React, { useEffect, useState } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

const Portfolio = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setisMobile(true);
    }
  }, []);

  return <div>{isMobile ? <Mobile /> : <Desktop />}</div>;
};

export default Portfolio;
