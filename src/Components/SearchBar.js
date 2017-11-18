import React, { Component } from 'react';



 class SearchBar extends Component {
   constructor(props) {
     super(props);

     this.state = {term: ''}

     this.onInputChange = this.onInputChange.bind(this);

   }

   onInputChange(term) {
     this.setState({term})
     this.props.onSearchInputChange(term);
   }

   render() {
     return (
       <div className="search-bar">
       <input 
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
       
       </div>
     )
   }
}

export default SearchBar;