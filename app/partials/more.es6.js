var React     = require('react');
var UniteLink = require('partials/unite-link');
var Resizable = require('react-component-resizable');
require('css/partials/more.styl');

module.exports = React.createClass({
  getInitialState: function () {
    return { isOpen: false };
  },

  _onTap: function () {
    // console.log(this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
    // this.contentHeight = this.state.isOpen ? 'auto' : 0;
  },

  componentDidMount: function () {
    this.innerConentEl = this.refs['inner-content'].getDOMNode();
    this._getInnerHeight();
  },

  _getInnerHeight: function () {
    this.innerHeight = this.innerConentEl.offsetHeight;
    console.log(this.innerConentEl.offsetParent);
  },

  render: function () {
    var className = 'more ';
    className += this.state.isOpen ? 'is-open' : '';

    var height = this.state.isOpen ? this.innerHeight : 0;
    var style = { height: `${height}px` };

    return (
      <div className = {className} >
        <UniteLink className="more__header" onTap = { this._onTap }>
          { this.props.label || 'more' }
          <div className="more__arrow"></div>
        </UniteLink>
        <div className="more__content" style = { style } >
          <Resizable className="more__content-inner cf" ref="inner-content" onResize = { this._getInnerHeight }>
            { this.props.children }
          </Resizable>
        </div>
      </div>
    );
  }
});
  