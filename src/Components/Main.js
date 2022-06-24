import React from "react";

export default function Main(props){

    return(
        <div className="container">
            <main>
                <section className="card">
                    <img className="image" src={`../images/${props.itens.img}.jpg`}></img>
                    <section className="content">

                        <div className="location">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="pad city">{props.itens.local.country}</p>
                            <a href={props.itens.local.link}className="pad link">View on Google Maps</a>
                        </div>
                
                        <h1>{props.itens.local.city}</h1>
                        <small>{props.itens.date.startDay} {props.itens.date.startMonth} {props.itens.date.startYear} - {props.itens.date.finishedDay} {props.itens.date.finishedMonth} {props.itens.date.finishedYear}</small>
                        <p className="descripition">{props.itens.description}</p>
                    </section>
                </section>
            </main>
        </div>
    )
}
