import React from "react";
import "./FeaturedVideo.scss";
import FeaturedCoverImage from "../../assets/FeaturedCoverImage.png";
import FeaturedTitleImage from "../../assets/FeaturedTitleImage.png";
import data from "../../data.json";
import playIcon from "../../assets/icons/play-solid.svg";

const FeaturedVideo = () => {
  return (
    <div className="featuredVideo">
      <div className="featuredVideo__inner">
        <div className="featuredVideo__featuredImages">
          <div className="featuredVideo__featuredTypes">
            <div className="featuredVideo__featuredReleaseYear">
              {data.Featured.ReleaseYear}
            </div>
            <div className="featuredVideo__featuredMpaRating">
              {data.Featured.MpaRating}
            </div>
            <div className="featuredVideo__featuredDate">1h 48m</div>
          </div>
          <p className="featuredVideo__featuredDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="featuredVideo__featuredButtons">
            <button className="featuredVideo__featuredButton1">
              <img
                src={playIcon}
                alt="playIcon"
                className="featuredVideo_featuredPlayIcon"
                width="16px"
                height="19px"
                style={{ background: "transparent" }}
              />
              Play
            </button>
            <button className="featuredVideo__featuredButton2">
              More Info
            </button>
          </div>
          <span className="featuredVideo__featuredCategory">
            {data.Featured.Category}
          </span>
          <img
            src={FeaturedCoverImage}
            alt="FeaturedCoverImage"
            className="featuredVideo__featuredCoverImage"
          />
          <img
            src={FeaturedTitleImage}
            alt="FeaturedTitleImage"
            className="featuredVideo__featuredTitleImage"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
