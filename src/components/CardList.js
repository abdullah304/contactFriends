import React from 'react';
import Card from './Card';
//import { contacts } from './contacts';



const CardList = ({ contacts }) => {
    return (
      <div>
        {
          contacts.map((user, i) => {
            return (
              <Card
                key={i}
                id={contacts[i].id}
                name={contacts[i].name}
                company = {contacts[i].company} 
                role = {contacts[i].role} 
                linkedin = {contacts[i].linkedin}
           
                />
            );
          })
        }
      </div>
    );
  }


export default CardList;


                           