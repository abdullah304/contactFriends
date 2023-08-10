import React from "react";

const Card = ({id, name, company, role, linkedin}) => {
    return(

        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt = 'contact' src={`https://robohash.org/${id}/?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{company}</p>
                <p>{role}</p>
                <p className="center"><a href= {linkedin}> Linkedin</a></p>
            </div>
        </div>
    );
}


export default Card;
