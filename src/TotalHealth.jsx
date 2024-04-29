
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import heart from './images/health.png'

export default function TotalHealth(health) {
  let heart1;
  if (health==1) {
    heart1 = <Image width="200px" src={heart} />
  } else if (health==2) {
    heart1 = <div>
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
    </div>
  } else if (health==3) {
    heart1 = <div>
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
    </div>
  } else if (health==4) {
    heart1 = <div>
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
    </div>
  } else if (health==5) {
    heart1 = <div>
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
      <Image width="200px" src={heart} />
    </div>
  }

  return (
    heart1
  )
}
