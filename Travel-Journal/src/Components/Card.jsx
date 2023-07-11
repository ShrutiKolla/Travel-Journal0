import React from 'react';

// css
import cardCss from '../assets/css/card.module.css';

// imgs
import img1 from '../assets/imgs/img1.svg';
import loc from '../assets/imgs/location.svg';
export default function Card(prop) {
    return (
        <card>
            <img src={prop.img} alt="" className={cardCss.image}/>
            <div className={cardCss.info}>
                <div className={cardCss.location}>
                    <img src={loc} alt="" />
                    <p>{prop.location}</p>
                    <a href={prop.url} target='_blank' rel="noreferrer">View on Google Maps</a>
                </div>
                <h1 className={cardCss.name}>{prop.title}</h1>
                <p className={cardCss.date}>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className={cardCss.desc}>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            <hr />
        </card>
    );
}