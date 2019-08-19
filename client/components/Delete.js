//client/components/Delete.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Delete extends React.Component {
  constructor() {
    super();
    console.log('delete');
    this.state = {id:''};

    this.onClick = this.onClick.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {

    this.setState({
      id: this.props.expense._id
    });
  }

  onClick(e) {
    this.delete(this);
  }

  delete(e) {
    axios.get('/delete?id='+e.state.id).then(function(response) {

    });
  }

  render() {

    return (
      <Button bsStyle="danger" bsSize="small" onClick={this.onClick}>
        <Link to={{pathname: '/', search: ''}} style={{textDecoration: 'none'}}>
         <span className="glyphicon glyphicon-remove"></span>
        </Link>
      </Button>


    )
  }
}

export default Delete;


