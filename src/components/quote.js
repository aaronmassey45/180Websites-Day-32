import React, {Component} from 'react';

export default class Quote extends Component {
  handleTweet() {
    window.open(`https://www.twitter.com/intent/tweet?text="${this.props.quote}" -${this.props.name}`)
  }
  render() {
    return (
      <div className="Quote">
        <div className="col-xs-12">
          <p>{this.props.quote}</p><br/>
          <div className="col-xs-6 text-left">
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true" onClick={this.handleTweet.bind(this)}></i>
          </div>
          <div className="col-xs-6 text-right">
            <p>-{this.props.name}</p>
          </div>
        </div>

      </div>
    );
  }
}
