import React, { useEffect, useState } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";
import Project from "./../../assets/project.jpeg";
import Project2 from "./../../assets/project_2.jpeg";
import Project3 from "./../../assets/project 3.jpeg";
import Project4 from "./../../assets/project 4.jpeg";
import Project5 from "./../../assets/project 5.jpeg";
import Project6 from "./../../assets/project 6.jpeg";
import Project7 from "./../../assets/project 7.jpeg";
import Project8 from "./../../assets/project 8.jpeg";
import Project9 from "./../../assets/project 9.jpeg";
import Project10 from "./../../assets/project 10.jpeg";
import Project11 from "./../../assets/project 11.jpeg";
import Project12 from "./../../assets/project 12.jpeg";
import Project13 from "./../../assets/project 13.jpeg";
import Project14 from "./../../assets/project 14.jpeg";
import Project15 from "./../../assets/project 15.jpeg";
import Project16 from "./../../assets/project 16.jpeg"

const data = [
  {
    name: Project16,
    url: "https://www.figma.com/proto/fFlS15iYz9urPHk3oimx8w/Facebook-lite?page-id=0%3A1&node-id=1%3A2&viewport=-678%2C624%2C1.21&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1",
  },
  {
    name: Project,
    url: "https://www.figma.com/proto/79CSzFF5LWNMD07o3vBAUw/Chat-App?page-id=0%3A1&node-id=1%3A24&viewport=1093%2C-57%2C0.61&scaling=min-zoom&starting-point-node-id=1%3A24",
  },
  {
    name: Project2,
    url: "https://www.figma.com/proto/0I97rat0NvawsefEnI1znE/Mobile-Storage-App-with-Project-Design?page-id=0%3A1&node-id=48%3A200&viewport=2000%2C1062%2C0.35&scaling=scale-down",
  },
  {
    name: Project3,
    url: "https://www.figma.com/proto/mNsT26rUy7OAnNksR39T96/Fashion-Hut?page-id=0%3A1&node-id=2%3A14&viewport=1619%2C624%2C0.56&scaling=scale-down&starting-point-node-id=1%3A2",
  },
  {
    name: Project4,
    url: "https://www.figma.com/proto/SWmmmoFBrynJcnr3agQcDP/MessageApp?page-id=0%3A1&node-id=1%3A2&viewport=25%2C728%2C0.51&scaling=scale-down&starting-point-node-id=1%3A2",
  },
  {
    name: Project5,
    url: "https://www.figma.com/proto/Djno9dFml9ZVymWcuz6lMM/Untitled?page-id=0%3A1&node-id=17%3A83&viewport=1532%2C221%2C0.23&scaling=scale-down",
  },
  {
    name: Project6,
    url: "https://www.figma.com/proto/LTJO8DmRxWKbfhluMIit2v/Doctor-App?page-id=0%3A1&node-id=5%3A65&viewport=1274%2C531%2C0.39&scaling=scale-down&starting-point-node-id=17%3A55&show-proto-sidebar=1",
  },
  {
    name: Project7,
    url: "https://www.figma.com/proto/1Z2beuXyAs2630wN0aRWPT/Gowtham-Google-Template?page-id=0%3A1&node-id=201%3A20&viewport=-1459%2C975%2C0.73&scaling=scale-down&starting-point-node-id=201%3A141&show-proto-sidebar=1",
  },
  {
    name: Project8,
    url: "https://www.figma.com/proto/tgQi6f844zNsjFsBd1ReUi/Untitled?page-id=0%3A1&node-id=8%3A2&viewport=424%2C612%2C0.28&scaling=min-zoom",
  },
  {
    name: Project9,
    url: "https://www.figma.com/proto/pbFp8DpX3wFnJ4PF7PRcOQ/Yesplash-Rework?page-id=0%3A1&node-id=251%3A3540&viewport=826%2C656%2C0.47&scaling=scale-down&starting-point-node-id=251%3A3540&show-proto-sidebar=1",
  },
  {
    name: Project10,
    url: "https://www.figma.com/proto/RPNl4Uxol2GWKXbKjb2zkN/Tennis-App?page-id=0%3A1&node-id=29%3A61&viewport=463%2C743%2C0.34&scaling=scale-down&starting-point-node-id=29%3A61&show-proto-sidebar=1",
  },
  {
    name: Project11,
    url: "https://www.figma.com/proto/a80AifE2tbQwaHXwAtqA8S/Project-Counsultant?page-id=0%3A1&node-id=0%3A1&viewport=1345%2C712%2C0.18&scaling=scale-down",
  },
  {
    name: Project12,
    url: "https://www.figma.com/proto/qDyHvkRrfppjVzXHWc9ndL/Building-Cunsultant-Web-Design?page-id=0%3A1&node-id=0%3A1&viewport=591%2C177%2C0.17&scaling=scale-down&starting-point-node-id=1%3A12",
  },
  {
    name: Project13,
    url: "https://www.figma.com/proto/ONA9lgJEcfLSOt6LDOnUmi/Gradients?page-id=0%3A1&node-id=1%3A2&viewport=703%2C611%2C0.47&scaling=min-zoom",
  },
  {
    name: Project14,
    url: "https://www.figma.com/proto/XJzk6rxKM8aBbbUrJiIDsx/Cards?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2",
  },
  {
    name: Project15,
    url: "https://www.figma.com/proto/qemeuEwDiHMPmSwC465A1g/variants?page-id=0%3A1&node-id=1%3A2&viewport=218%2C240%2C0.33&scaling=min-zoom&starting-point-node-id=1%3A2",
  },
]

const Portfolio = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setisMobile(true);
    }
  }, []);

  return (
    <>
      {isMobile ? (
        <Mobile data={data} />
      ) : (
        <Desktop data={data} />
      )}
    </>
  );
};

export default Portfolio;


