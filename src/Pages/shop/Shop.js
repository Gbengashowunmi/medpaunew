import React from 'react'
import { Link } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { IoIosFlash } from "react-icons/io";

import { BsCart4, BsForwardFill, BsSearch } from 'react-icons/bs'
import { RiAccountPinCircleFill } from 'react-icons/ri'
import './shop.scss'
import HeadFoot from '../../component/HeadFoot'
export default function Shop() {
  return (
    <HeadFoot>
                <div className="top">
          <button> <BiCategory className="icon" />CATEGORIES</button>
          <div className="search">
            <BsSearch className="search-icon" />
            <input placeholder="Type and hit enter" />
          </div>
          <div className="cart_contact">
           <Link to="/view-cart"> <div className="icon-container">
              <BsCart4 className="icon" />
            </div>
            </Link>
            <div className="icon-container">
              <RiAccountPinCircleFill className="icon" />
            </div>
          </div>
        </div>

        <div className="flash">
          <div className="header">
            <h3>
              <IoIosFlash />
              Flash
            </h3>
            <button>
              <p>
                View all <BsForwardFill />
              </p>
            </button>
          </div>
          <div className="item-cards">

          </div>
        </div>
        </HeadFoot>
          )
}
