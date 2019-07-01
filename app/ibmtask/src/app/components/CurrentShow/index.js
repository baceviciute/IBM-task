import React from 'react';
import {useFetch} from '../../utils/fetch-hook';
import {icons} from './Icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function Item(data){
  return (
    <div className="col-3 channel">
      <div><img src={icons[data.channel]} height="40"/></div>
      <span>{data.time}</span>
      <h6>{data.showTitle}</h6>
    </div>
  )
}

function CurrentShows (props) {
  const {loading, data, setData} = useFetch();
  return (
    <div>
    <h2 className="live"> Live </h2>
      <div className="container show-list">
        <div className="row justify-content-md-center">
          {loading ?
            <div>Loading...</div>
            :
            data.map(Item)
          }
        </div>
      </div>
    </div>
    );
}

export default CurrentShows;
