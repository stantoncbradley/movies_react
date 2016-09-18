import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {
  Button,
  PageHeader,
  Well,
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
} from 'react-bootstrap';

class App extends Component {
  _didSearch(event) {
    event.preventDefault()
    const query = event.target.elements[0].value
    browserHistory.push(`search/${query}`)
  }
  render() {
    return (
      <div>
        <PageHeader style={{textAlign: 'center'}}>{`Cole's Movie Explorer`}</PageHeader>
        <div className="container">
          <Well>
          <Form inline onSubmit={this._didSearch}>
            <FormGroup>
              <ControlLabel>Search by Title:</ControlLabel>
              {' '}
              <FormControl
                type="text"
                placeholder="movie title"
              />
            </FormGroup>
            {' '}
            <Button bsStyle="primary" type="submit">Search</Button>
          </Form>
          </Well>
          {' '}
          <Well>
            {this.props.children}
          </Well>
        </div>
      </div>
    )
  }
}

export default App;
