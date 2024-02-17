import React from "react";
import Card from "./components/Card/Card";

import "./App.css";

const foodCatalogs = [
  {
    type: "อาหารคาว",
    name: "ข้าวผัด",
    imgUrl:
      "https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor. Et sollicitudin 
    ac orci phasellus egestas tellus rutrum tellus. Lorem ipsum dolor sit amet consectetur adipiscing. 
    Imperdiet sed euismod nisi porta. Pellentesque adipiscing commodo elit at imperdiet dui accumsan 
    sit amet. `,
    count: 7,
  },
  {
    type: "อาหารหวาน",
    name: "บัวลอย",
    imgUrl: "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque
      quidem magnam corrupti vitae labore, quasi minus unde qui ad quae? Fugit
      blanditiis totam obcaecati perferendis, mollitia accusantium qui
      nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque
      quidem magnam corrupti vitae labore, quasi minus unde qui ad quae? Fugit
      blanditiis totam obcaecati perferendis, mollitia accusantium qui
      nostrum.`,
    count: 0,
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">โหวตอาหาร</h1>
        {foodCatalogs.map((item, index) => (
          <Card
            key={index}
            type={item.type}
            name={item.name}
            imgUrl={item.imgUrl}
            info={item.info}
            count={item.count}
          />
        ))}
      </>
    );
  }
}

export default App;
