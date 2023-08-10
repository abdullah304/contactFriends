import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://api.npoint.io/c9d73cdacf57dc1fcb7a')
      .then(response=> response.json())
      .then(users => {this.setState({ contacts: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { contacts, searchfield } = this.state;
    const filteredContacts = contacts.filter(contact =>{
      const nameSearch = contact.name.toLowerCase().includes(searchfield.toLowerCase());
      const companySearch = contact.company.toLowerCase().includes(searchfield.toLowerCase());
      return nameSearch || companySearch;
    })
    return !contacts.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>ContactFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList contacts={filteredContacts} />
          </Scroll>
        </div>
      );
  }
}

export default App;