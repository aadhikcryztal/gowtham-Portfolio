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

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Portfolio;
