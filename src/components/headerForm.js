import React, {Component} from 'react';

class HeaderForm extends Component {

  state = {
    header: ''
  }

  onChange =(e) => {
    this.setState( {
      header: e.target.value
    })
    this.props.changePHeader(e.target.value);
    
  }

  render() {
    return (
      <form>
        <h4>Please add contents to change header</h4>
        <input type='text' placeholder='Change header content' value={this.state.header} onChange = {this.onChange}/>
        <p>child componet State header value: {this.state.header}</p>
      </form>
    )
  }
}

export default HeaderForm;
