import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TextControl from '@ali/ve-text-control';
import { ui } from '@ali/visualengine';
// import popups from '@ali/ve-popups';
import Icon, { Button } from '@ali/ve-icons';
import StageBox from '@ali/ve-stage-box';
import ListItem from './listItem';
import './style.less';

const { Popup } = ui;

function popedit(target, props) {
  Popup.popup({
    target,
    showClose: false,
    content: (
      <ListItem {...props} />
    ),
    position: 'bottom',
    cancelOnBlur: true,
  });
}

class ServerSetter extends Component {
  static propTypes = {
    prop: PropTypes.object,
    className: PropTypes.string,
    isCheck: React.PropTypes.bool,
    iconType: React.PropTypes.string,
  }
  static defaultProps = {
    isCheck: false,
    iconType: 'nonselected',
  };

  static displayName = 'ServerSetter';

  constructor(props) {
    super(props);
    this.state = {
      hasBranch: false,
      noBranch: false,
      isCheck: this.props.isCheck,
      iconType: this.props.iconType,
    };
    this.onSelectServer = this.onSelectServer.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.prop = this.props.prop;
    this.willDetach = this.prop.onValueChange(() => this.forceUpdate());
  }

  componentWillUnmount() {
    if (this.willDetach) {
      this.willDetach();
    }
  }

  hasBranch() {
    this.setState({ hasBranch: true, noBranch: false });
  }
  noBranch() {
    this.setState({ hasBranch: false, noBranch: true });
  }
  onSelectServer() {
    const me = this;
    popups.popup({
      content: <Server />,
      title: '请选择服务',
      actions: [],
      showClose: true,
      model: false,
      target: null,
      position: 'center center',
      cancelOnBlur: true,
      animation: 'appear',
      style: {
        width: '700px',
        height: '600px',
      },
    });
  }
  onChange() {
    const isCheck = !this.state.isCheck;
    this.setState({ isCheck, iconType: isCheck ? 'checkbox' : 'nonselected' });
  }

  render() {
    const className = classNames('vs-server', this.props.className);
    const props = { ...this.state };
    props.onChange = this.onChange;
    return (
      <div className="vs-branch">
        <div className="vs-branch-wrap">
          <div className="list-wrap">
            <div className="list-wrap-left">
              <span className="list-bg-icon">
                <Icon name="drag-handler" size="small" />
              </span>
              <span className="list-wrap-icon">
                <Button name="radio" onClick={this.hasBranch.bind(this)} className={classNames('vs-action-check', { 'vs-checked': this.state.hasBranch })} />
              </span>
              <span className="list-wrap-left-text">是</span>
            </div>
            <div className="list-wrap-right">
              <span className="list-wrap-icon" ref={(c) => { this.branch = c; }}>
                <Button name="edit" onClick={() => { popedit(this.branch, props); }} />
              </span>
            </div>
          </div>
          <div className="list-wrap">
            <div className="list-wrap-left">
              <span className="list-bg-icon">
                <Icon name="drag-handler" size="small" />
              </span>
              <span className="list-wrap-icon">
                <Button name="radio" onClick={this.noBranch.bind(this)} className={classNames('vs-action-check', { 'vs-checked': this.state.noBranch })} />
              </span>
              <span className="list-wrap-left-text">否</span>
            </div>
            <div className="list-wrap-right">
              <span className="list-wrap-icon">
                <Button name="edit" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerSetter;
