// Modules
import React from 'react';
import { connect } from 'react-redux';

// Redux
import * as actions from '../actions';
import reduce from '../reducers';


@connect(reduce, actions)
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }

  addValue() {
    let value = this.state.value + 1;
    this.setState({value});
    this.props.getData({value});
  }

  render() {
    const data = (this.props.list.data).reduce((arr, item) => {
      return [
        ...arr,
        (
          <div key={item.value}>
            <p>{item.value}</p>
          </div>
        )
      ];
    }, []);

    return (
      <div>
        {data}
        <button type="button" onClick={this.addValue}>Add Value</button>
      </div>
    );
  }
}
