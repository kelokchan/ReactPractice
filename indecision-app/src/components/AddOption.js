import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim(); // get the form option input value
    const error = this.props.handleAddOption(option);  //call addOption in parent
    
    console.log('test devtool source map');
    

    this.setState(() => ({ error })); //error : error

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
        <input className="add-option__input" type='text' name='option' />
        <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}