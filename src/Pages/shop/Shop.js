import React from 'react'
import { Link } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { IoIosFlash } from "react-icons/io";

import { BsCart4, BsForwardFill, BsSearch } from 'react-icons/bs'
import { RiAccountPinCircleFill } from 'react-icons/ri'
import './shop.scss'

import HeadFoot from '../../component/HeadFoot'
import ItemCard from '../../component/ItemCard/ItemCard';
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

<main>
        <div className="flash">
          <div className="header">
            <h3>
              <IoIosFlash className='icon' />
              Flash
            </h3>
            <button>
              <p>
                View all <BsForwardFill className='icon' />
              </p>
            </button>
          </div>
          <div className="item-cards">
           <div> <ItemCard/></div>
           <div> <ItemCard/></div>
           <div> <ItemCard/></div>
           <div> <ItemCard/></div>


          </div>

        </div>
          <div className='sales-banner'>
            <div className='banner1'></div>
            <div className='banner2'>
                <img src='/images/sales.png' alt='banner2'/>
            </div>
          </div>
        </main>
        </HeadFoot>
          )
}
