import React from 'react';

import './index.sass'

export default class extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      resultsNumber: this.props.list.length,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({value});
    if (value.length > 1) {
      const filteredList = this.props.list.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
      this.props.onListUpdate(filteredList);
      this.setState({resultsNumber: filteredList.length})
    } else {
      this.props.onListUpdate(this.props.list);
      this.setState({resultsNumber: this.props.list.length})
    }
  }
  render() {
    return (
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Найти..."
          value={this.state.value} onChange={this.handleChange}/>
        <div className="search-number">
          Всего: {this.state.resultsNumber}
        </div>
      </div>
    );
  }
}