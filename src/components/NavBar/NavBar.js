import React, { PureComponent } from 'react';
import Icon from '../Icon';
import { Popover, Badge, Avatar } from 'antd';
import { Link } from 'dva/router';
import cx from 'classnames';
import './style/index.less';
import logoImg from 'assets/images/yyclound.png';
import { Button, Menu, Checkbox, Table, Pagination, Grid, Card, Divider, Header, Image, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import contemplativereptile from 'assets/images/contemplative-reptile.jpg';
import SearchBox from './SearchBox';

/**
 * 其本本局头部区域
 */
class NavBar extends PureComponent {
  state = {
    openSearchBox: false
  };

  static defaultProps = {
    fixed: true,
    theme: '' //'bg-dark',
  };

  toggleFullScreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  onCloseSearchBox = () => {
    this.setState({
      openSearchBox: false
    });
  };

  onOpenSearchBox = () => {
    this.setState({
      openSearchBox: true
    });
  };

  render() {
    const { openSearchBox } = this.state;
    const {
      fixed,
      theme,
      onCollapseLeftSide,
      collapsed,
      onExpandTopBar,
      toggleSidebarHeader,
      user,
      isMobile
    } = this.props;
    const nummap = [1, 2, 3, 4, 5, 6, 7, 8]
    const classnames = cx('navbar', {
      'navbar-fixed-top': !!fixed,
      'navbar-sm': isMobile ? true : collapsed,
      ['bg-' + theme]: !!theme
    });

    return (
      <header className={classnames}>
        <div className="navbar-branding">
          <Link className="navbar-brand" to="/">
            <img src={logoImg} alt="logo" />
            <b>云</b>
            平台
          </Link>
          <span className="toggle_sidemenu_l" onClick={onCollapseLeftSide}>
            <Icon type="lines" />
          </span>
        </div>
        <ul className="nav navbar-nav navbar-left clearfix">
          {collapsed || isMobile ? null : (
            <li>
              <a className="sidebar-menu-toggle" onClick={toggleSidebarHeader}>
                <Icon type="ruby" />
              </a>
            </li>
          )}
          <li>
            <a onClick={onExpandTopBar}>
              <Icon type="wand" />
            </a>
          </li>
          {isMobile ? (
            <li className="mini-search" onClick={this.onOpenSearchBox}>
              <a>
                <Icon type="search" antd />
              </a>
            </li>
          ) : (
            <li onClick={this.toggleFullScreen}>
              <a className="request-fullscreen">
                <Icon type="screen-full" />
              </a>
            </li>
          )}
        </ul>
        {isMobile ? null : (
          <form className="navbar-form navbar-search clearfix">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="全文检索"
                onClick={this.onOpenSearchBox}
              />
            </div>
          </form>
        )}
        <ul className="nav navbar-nav navbar-right clearfix">
          {/* <li>
            <a href="https://github.com/LANIF-UI/dva-boot-admin">
              <Icon type="github" antd />
            </a>
          </li> */}
         
          <li className="dropdown" style={{marginRight:100}}>
            <Popover
              placement="bottomRight"
              title={'通知'}
              overlayClassName={cx('navbar-popup', { [theme]: !!theme })}
              content={'用友云,NB NB'}
              trigger="click"
            >
              <a className="dropdown-toggle">
              <Icon type="mail" />
              </a>
            </Popover>
          </li>
          <li className="dropdown">
          <div style={{marginTop:10}}>
          <Modal trigger={<Button>RSUI-Model</Button>}>
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
              <Image size='medium' src={contemplativereptile} wrapped />

              <Modal.Description>
                <Header>Modal Header</Header>
                <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

                {nummap.map(i => (
                  <Image key={i} src={contemplativereptile} style={{ paddingBottom: 5 }} />
                ))}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Proceed <Icon name='chevron right' />
              </Button>
            </Modal.Actions>
          </Modal>
        </div> 
          </li>
          <li className="dropdown">
            <Popover
              placement="bottomRight"
              title={`WELCOME ${user.userName}`}
              overlayClassName={cx('navbar-popup', { [theme]: !!theme })}
              content={<UserDropDown />}
              trigger="click"
            >
              <a className="dropdown-toggle">
                <Badge dot>
                  <Avatar src={require('assets/images/a10.jpg')}>
                    {user.userName}
                  </Avatar>
                </Badge>
              </a>
            </Popover>
          </li>
        </ul>
        <SearchBox visible={openSearchBox} onClose={this.onCloseSearchBox} />
      </header>
    );
  }
}

const UserDropDown = props => (
  <ul className="dropdown-menu list-group dropdown-persist">
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="mail" /> 信息
        <Badge count={5} className="label" />
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="users" /> 好友
        <Badge count={6} className="label" />
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="gear" /> 帐户设置
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="ring" /> 通知
      </a>
    </li>
    <li className="list-group-item dropdown-footer">
      <Link to="/sign/login">
        <Icon type="poweroff" /> 退出
      </Link>
    </li>
  </ul>
);

export default NavBar;
