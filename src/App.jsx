import React from 'react';
import Topbar from './components/Topbar'
import Filters from './components/Filters'
import Contact from  './components/Contact'
import Contacts from './components/Contacts'

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      filtered: [],
      loading: false,
      status:'',
    }
  }
  componentDidMount(){
    this.setState({loading:true})
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then(response => response.json())
    .then(data => {
      this.setState({
        contacts: data,
        filtered: data,
        loading: false,
      })
    })
  };

  handleChangeInput (value){
    const filtered = this.state.contacts.filter((contact)=>{
      return contact.name.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      filtered,
    })
  }
  handleClickStatus(event){
    console.log(event)
    let contactFilter = this.state.filtered.sort((a,b) => {
      if(this.state.status !== event){
        this.setState({status:event})
        if(a[event] < b[event]) { return -1; }
        if(a[event] > b[event]) { return 1; }
        return 0;
      }else{
        this.setState({status:'',})
        if(a[event] > b[event]) { return -1; }
        if(a[event] < b[event]) { return 1; }
        return 0;
      }
    })
    this.setState({
      filtered: [...contactFilter],
    })
  }
  render() {
    return (
      <>
      <div class="app" data-testid="app">
        <Topbar/>
        
        <Filters
        handleChange = {(e) => this.handleChangeInput(e)}
        handleClick = {(e)=>this.handleClickStatus(e)}
        />
        <Contacts>
          {this.state.filtered.map(contact => <Contact key={contact.id} data={contact}/>)}
        </Contacts>
        </div>
      </>
    )
  }
}

export default App;
