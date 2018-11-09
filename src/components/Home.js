import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends React.Component {
  static propTypes = {
    initialText: PropTypes.string.isRequired,
    changeText: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { text: this.props.initialText };
  }

  onButtonClick(event) {
    event.preventDefault();

    this.props.changeText();
    //this.setState({ text: 'changed in the browser!' });
  }

  render() {
    return (
      <div>
        <p>{this.props.initialText}</p>
        <button onClick={this.onButtonClick.bind(this)}>zmień tekst !</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeText: () => dispatch({ type: 'CHANGE_TEXT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
