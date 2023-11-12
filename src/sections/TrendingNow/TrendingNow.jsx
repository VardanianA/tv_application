import React from "react";
import "./TrendingNow.scss";
import trendImg1 from "../../assets/https_specials-8.png";
import trendImg2 from "../../assets/https_specials-7.png";
import trendImg3 from "../../assets/https_specials-6.png";
import trendImg4 from "../../assets/https_specials-5.png";
import trendImg5 from "../../assets/https_specials-4.png";
import trendImg6 from "../../assets/https_specials-3.png";
import trendImg7 from "../../assets/https_specials-2.png";
import trendImg8 from "../../assets/https_specials-1.png";
import trendinNowData from "../../data.json";

const TRENDINGIMAGEDATA = [
  { id: 1, img: trendImg1 },
  { id: 2, img: trendImg2 },
  { id: 3, img: trendImg3 },
  { id: 4, img: trendImg4 },
  { id: 5, img: trendImg5 },
  { id: 6, img: trendImg6 },
  { id: 7, img: trendImg7 },
  { id: 8, img: trendImg8 },
];

const TrendingNow = () => {
  // console.log(trendinNowData["TendingNow"]);

  return (
    <div className="trendingNow">
      <div className="trendingNow__inner">
        <div className="trendingNow__title">Trending Now</div>
        <div className="trendingNow__images animation">
          {TRENDINGIMAGEDATA.map((item) => {
            return (
              <img src={item.img} alt={item.img} className="trendingNow__img" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
