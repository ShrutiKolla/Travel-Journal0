import React from 'react';

// css
import cardCss from '../assets/css/card.module.css';

// imgs
import img1 from '../assets/imgs/img1.svg';
import loc from '../assets/imgs/location.svg';
export default function Card(prop) {
    return (
        <div className="cardDiv">
            <card>
                <img src={prop.img} alt="" className={cardCss.image} />
                <div className={cardCss.info}>
                    <div className={cardCss.location}>
                        <img src={loc} alt="" />
                        <p>{prop.location}</p>
                        <a href={prop.url} target='_blank' rel="noreferrer">View on Google Maps</a>
                    </div>
                    <h1 className={cardCss.name}>{prop.title}</h1>
                    <p className={cardCss.date}>{prop.startDt} - {prop.endDt}</p>
                    <p className={cardCss.desc}>{prop.desc}</p>
                </div>
            </card>
            <hr className={cardCss.hr}/>

        </div>
    );
}