import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CommentsList from './components/CommentsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      comments: [
        {
          "id": 0,
          "content": "Hi Charlie! Wassup?",
          "commenter_username": "John"
        },
        {
          "id": 1,
          "content": "I don't understand JS",
          "commenter_username": "Adam"
        },
        {
          "id": 2,
          "content": "Hungry right now!, feed me!",
          "commenter_username": "John"
        },{

        },{

        }
      ],
      users: []
    }

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {

  }

  render () {
    return (<div className="main">
      <div>
        <h2>List of Users:</h2>
        <select>  
          <option>John</option>
          <option>Adam</option>
          <option>Charlie</option>
          <option>Lily</option>
          <option>Kate</option>
        </select>
      </div>
      <CommentsList comments={this.state.comments}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));