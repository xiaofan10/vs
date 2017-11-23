import React from 'react';
import { Button } from '@ali/ve-icons';
import './listItemStyle.less';
// ListItem 为popup内容
class ListItem extends React.Component {
  static propTypes = {
    isCheck: React.PropTypes.bool,
    iconType: React.PropTypes.string,
    onChange: React.PropTypes.func,

  }
  static defaultProps = {
    isCheck: false,
    iconType: 'nonselected',
  };

  constructor(props) {
    super(props);
    this.state = {
      isCheck: this.props.isCheck,
      iconType: this.props.iconType,
    };
    this.checkDefault = this.checkDefault.bind(this);
  }

  checkDefault() {
    const isCheck = !this.state.isCheck;
    this.setState({ isCheck, iconType: isCheck ? 'checkbox' : 'nonselected' });
    this.props.onChange();
  }

  render() {
    return (
      <div className="branch-wrap" style={{ width: '214px' }}>
        <div className="branch-list">
          <span className="branch-title">分支名称：</span>
          <span className="branch-content">是</span>
        </div>
        <div className="branch-list">
          <span className="branch-title">条件表达式</span>
          <span className="branch-content">
            <span className="branch-input-wrap">
              <input className="branch-input" placeholder="请输入" />
            </span>
          </span>
        </div>
        <div className="branch-list">
          <span className="branch-title">默认分支</span>
          <span className="branch-content">
            <span className="list-wrap-icon ">
              <Button name={this.state.iconType} size="small" onClick={this.checkDefault} />
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default ListItem;
