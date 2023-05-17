import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  return (
    <div className="content">
      <div className="left-col">
        <h1>Make your party fun!</h1>
        <p>Create your own custom playlist today.</p>
        <button>Create playlist</button>
      </div>
      <div className="right-col">
        <h3>Trending songs</h3>
        <div className="right-col--list">
          <p>Unavailable by davido</p>
          <AiOutlinePlus size={20} />
        </div>
        <div className="right-col--list">
          <p>Unavailable by davido</p>
          <AiOutlinePlus size={20} />
        </div>
        <div className="right-col--list">
          <p>Unavailable by davido</p>
          <AiOutlinePlus size={20} />
        </div>
        <div className="right-col--list">
          <p>Unavailable by davido</p>
          <AiOutlinePlus size={20} />
        </div>
        <div className="right-col--list">
          <p>Unavailable by davido</p>
          <AiOutlinePlus size={20} />
        </div>
        <button>View more</button>
      </div>
    </div>
  );
};

export default Header;
