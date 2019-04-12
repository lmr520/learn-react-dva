import React,{ Component, Fragment } from 'react';
import _ from 'lodash'
import { connect } from 'dva';
import { Layout} from 'antd';
import BaseComponent from 'components/BaseComponent';
import { Button, Icon,Menu,Checkbox,Table,Pagination,Grid, Card, Divider, Header, Image, Modal, Placeholder, Label, Segment,Reveal,Progress,Transition,Form,Dropdown,Input,Rating,Flag,Tab} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import logoImg from 'assets/images/contemplative-reptile.jpg';
import './index.less';

const cards = [
  {
    avatar: logoImg,
    date: 'Joined in 2013',
    header: 'Helen',
    description: 'Primary Contact',
  },
  {
    avatar: logoImg,
    date: 'Joined in 2013',
    header: 'Matthew',
    description: 'Primary Contact',
  },
  {
    avatar: logoImg,
    date: 'Joined in 2013',
    header: 'Molly',
    description: 'Primary Contact',
  },
]
const tagOptions = [
  {
    key: 'Important',
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Cannot Fix',
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'News',
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    key: 'Off Topic',
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Interesting',
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Discussion',
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]
const countries = [
  { name: 'Afghanistan', countryCode: 'af' },
  { name: 'Aland Islands', countryCode: 'ax' },
  { name: 'Albania', countryCode: 'al' },
  { name: 'Algeria', countryCode: 'dz' },
  { name: 'American Samoa', countryCode: 'as' },
  { name: 'Andorra', countryCode: 'ad' },
  { name: 'Angola', countryCode: 'ao' },
  { name: 'Anguilla', countryCode: 'ai' },
  { name: 'Antigua', countryCode: 'ag' },
  { name: 'Argentina', countryCode: 'ar' },
  { name: 'Armenia', countryCode: 'am' },
  { name: 'Aruba', countryCode: 'aw' },
  { name: 'Australia', countryCode: 'au' },
  { name: 'Austria', countryCode: 'at' },
  { name: 'Azerbaijan', countryCode: 'az' },
  { name: 'Bahamas', countryCode: 'bs' },
  { name: 'Bahrain', countryCode: 'bh' },
  { name: 'Bangladesh', countryCode: 'bd' },
  { name: 'Barbados', countryCode: 'bb' },
  { name: 'Belarus', countryCode: 'by' },
  { name: 'Belgium', countryCode: 'be' },
  { name: 'Belize', countryCode: 'bz' },
  { name: 'Benin', countryCode: 'bj' },
  { name: 'Bermuda', countryCode: 'bm' },
  { name: 'Bhutan', countryCode: 'bt' },
  { name: 'Bolivia', countryCode: 'bo' },
  { name: 'Bosnia', countryCode: 'ba' },
  { name: 'Botswana', countryCode: 'bw' },
  { name: 'Bouvet Island', countryCode: 'bv' },
  { name: 'Brazil', countryCode: 'br' },
  { name: 'British Virgin Islands', countryCode: 'vg' },
  { name: 'Brunei', countryCode: 'bn' },
  { name: 'Bulgaria', countryCode: 'bg' },
  { name: 'Burkina Faso', countryCode: 'bf' },
  { name: 'Burma', countryCode: 'mm', alias: 'Myanmar' },
  { name: 'Burundi', countryCode: 'bi' },
  { name: 'Caicos Islands', countryCode: 'tc' },
  { name: 'Cambodia', countryCode: 'kh' },
  { name: 'Cameroon', countryCode: 'cm' },
  { name: 'Canada', countryCode: 'ca' },
  { name: 'Cape Verde', countryCode: 'cv' },
  { name: 'Cayman Islands', countryCode: 'ky' },
  { name: 'Central African Republic', countryCode: 'cf' },
  { name: 'Chad', countryCode: 'td' },
  { name: 'Chile', countryCode: 'cl' },
  { name: 'China', countryCode: 'cn' },
  { name: 'Christmas Island', countryCode: 'cx' },
  { name: 'Cocos Islands', countryCode: 'cc' },
  { name: 'Colombia', countryCode: 'co' },
  { name: 'Comoros', countryCode: 'km' },
  { name: 'Congo', countryCode: 'cd' },
  { name: 'Congo Brazzaville', countryCode: 'cg' },
  { name: 'Cook Islands', countryCode: 'ck' },
  { name: 'Costa Rica', countryCode: 'cr' },
  { name: 'Cote Divoire', countryCode: 'ci' },
  { name: 'Croatia', countryCode: 'hr' },
  { name: 'Cuba', countryCode: 'cu' },
  { name: 'Cyprus', countryCode: 'cy' },
  { name: 'Czech Republic', countryCode: 'cz' },
  { name: 'Denmark', countryCode: 'dk' },
  { name: 'Djibouti', countryCode: 'dj' },
  { name: 'Dominica', countryCode: 'dm' },
  { name: 'Dominican Republic', countryCode: 'do' },
  { name: 'Ecuador', countryCode: 'ec' },
  { name: 'Egypt', countryCode: 'eg' },
  { name: 'El Salvador', countryCode: 'sv' },
  { name: 'Equatorial Guinea', countryCode: 'gq' },
  { name: 'Eritrea', countryCode: 'er' },
  { name: 'Estonia', countryCode: 'ee' },
  { name: 'Ethiopia', countryCode: 'et' },
  { name: 'Europeanunion', countryCode: 'eu' },
  { name: 'Falkland Islands', countryCode: 'fk' },
  { name: 'Faroe Islands', countryCode: 'fo' },
  { name: 'Fiji', countryCode: 'fj' },
  { name: 'Finland', countryCode: 'fi' },
  { name: 'France', countryCode: 'fr' },
  { name: 'French Guiana', countryCode: 'gf' },
  { name: 'French Polynesia', countryCode: 'pf' },
  { name: 'French Territories', countryCode: 'tf' },
  { name: 'Gabon', countryCode: 'ga' },
  { name: 'Gambia', countryCode: 'gm' },
  { name: 'Georgia', countryCode: 'ge' },
  { name: 'Germany', countryCode: 'de' },
  { name: 'Ghana', countryCode: 'gh' },
  { name: 'Gibraltar', countryCode: 'gi' },
  { name: 'Greece', countryCode: 'gr' },
  { name: 'Greenland', countryCode: 'gl' },
  { name: 'Grenada', countryCode: 'gd' },
  { name: 'Guadeloupe', countryCode: 'gp' },
  { name: 'Guam', countryCode: 'gu' },
  { name: 'Guatemala', countryCode: 'gt' },
  { name: 'Guinea', countryCode: 'gn' },
  { name: 'Guinea-Bissau', countryCode: 'gw' },
  { name: 'Guyana', countryCode: 'gy' },
  { name: 'Haiti', countryCode: 'ht' },
  { name: 'Heard Island', countryCode: 'hm' },
  { name: 'Honduras', countryCode: 'hn' },
  { name: 'Hong Kong', countryCode: 'hk' },
  { name: 'Hungary', countryCode: 'hu' },
  { name: 'Iceland', countryCode: 'is' },
  { name: 'India', countryCode: 'in' },
  { name: 'Indian Ocean Territory', countryCode: 'io' },
  { name: 'Indonesia', countryCode: 'id' },
  { name: 'Iran', countryCode: 'ir' },
  { name: 'Iraq', countryCode: 'iq' },
  { name: 'Ireland', countryCode: 'ie' },
  { name: 'Israel', countryCode: 'il' },
  { name: 'Italy', countryCode: 'it' },
  { name: 'Jamaica', countryCode: 'jm' },
  { name: 'Jan Mayen', countryCode: 'sj', alias: 'Svalbard' },
  { name: 'Japan', countryCode: 'jp' },
  { name: 'Jordan', countryCode: 'jo' },
  { name: 'Kazakhstan', countryCode: 'kz' },
  { name: 'Kenya', countryCode: 'ke' },
  { name: 'Kiribati', countryCode: 'ki' },
  { name: 'Kuwait', countryCode: 'kw' },
  { name: 'Kyrgyzstan', countryCode: 'kg' },
  { name: 'Laos', countryCode: 'la' },
  { name: 'Latvia', countryCode: 'lv' },
  { name: 'Lebanon', countryCode: 'lb' },
  { name: 'Lesotho', countryCode: 'ls' },
  { name: 'Liberia', countryCode: 'lr' },
  { name: 'Libya', countryCode: 'ly' },
  { name: 'Liechtenstein', countryCode: 'li' },
  { name: 'Lithuania', countryCode: 'lt' },
  { name: 'Luxembourg', countryCode: 'lu' },
  { name: 'Macau', countryCode: 'mo' },
  { name: 'Macedonia', countryCode: 'mk' },
  { name: 'Madagascar', countryCode: 'mg' },
  { name: 'Malawi', countryCode: 'mw' },
  { name: 'Malaysia', countryCode: 'my' },
  { name: 'Maldives', countryCode: 'mv' },
  { name: 'Mali', countryCode: 'ml' },
  { name: 'Malta', countryCode: 'mt' },
  { name: 'Marshall Islands', countryCode: 'mh' },
  { name: 'Martinique', countryCode: 'mq' },
  { name: 'Mauritania', countryCode: 'mr' },
  { name: 'Mauritius', countryCode: 'mu' },
  { name: 'Mayotte', countryCode: 'yt' },
  { name: 'Mexico', countryCode: 'mx' },
  { name: 'Micronesia', countryCode: 'fm' },
  { name: 'Moldova', countryCode: 'md' },
  { name: 'Monaco', countryCode: 'mc' },
  { name: 'Mongolia', countryCode: 'mn' },
  { name: 'Montenegro', countryCode: 'me' },
  { name: 'Montserrat', countryCode: 'ms' },
  { name: 'Morocco', countryCode: 'ma' },
  { name: 'Mozambique', countryCode: 'mz' },
  { name: 'Namibia', countryCode: 'na' },
  { name: 'Nauru', countryCode: 'nr' },
  { name: 'Nepal', countryCode: 'np' },
  { name: 'Netherlands', countryCode: 'nl' },
  { name: 'Netherlandsantilles', countryCode: 'an' },
  { name: 'New Caledonia', countryCode: 'nc' },
  { name: 'New Guinea', countryCode: 'pg' },
  { name: 'New Zealand', countryCode: 'nz' },
  { name: 'Nicaragua', countryCode: 'ni' },
  { name: 'Niger', countryCode: 'ne' },
  { name: 'Nigeria', countryCode: 'ng' },
  { name: 'Niue', countryCode: 'nu' },
  { name: 'Norfolk Island', countryCode: 'nf' },
  { name: 'North Korea', countryCode: 'kp' },
  { name: 'Northern Mariana Islands', countryCode: 'mp' },
  { name: 'Norway', countryCode: 'no' },
  { name: 'Oman', countryCode: 'om' },
  { name: 'Pakistan', countryCode: 'pk' },
  { name: 'Palau', countryCode: 'pw' },
  { name: 'Palestine', countryCode: 'ps' },
  { name: 'Panama', countryCode: 'pa' },
  { name: 'Paraguay', countryCode: 'py' },
  { name: 'Peru', countryCode: 'pe' },
  { name: 'Philippines', countryCode: 'ph' },
  { name: 'Pitcairn Islands', countryCode: 'pn' },
  { name: 'Poland', countryCode: 'pl' },
  { name: 'Portugal', countryCode: 'pt' },
  { name: 'Puerto Rico', countryCode: 'pr' },
  { name: 'Qatar', countryCode: 'qa' },
  { name: 'Reunion', countryCode: 're' },
  { name: 'Romania', countryCode: 'ro' },
  { name: 'Russia', countryCode: 'ru' },
  { name: 'Rwanda', countryCode: 'rw' },
  { name: 'Saint Helena', countryCode: 'sh' },
  { name: 'Saint Kitts and Nevis', countryCode: 'kn' },
  { name: 'Saint Lucia', countryCode: 'lc' },
  { name: 'Saint Pierre', countryCode: 'pm' },
  { name: 'Saint Vincent', countryCode: 'vc' },
  { name: 'Samoa', countryCode: 'ws' },
  { name: 'San Marino', countryCode: 'sm' },
  { name: 'Sandwich Islands', countryCode: 'gs' },
  { name: 'Sao Tome', countryCode: 'st' },
  { name: 'Saudi Arabia', countryCode: 'sa' },
  { name: 'Scotland', countryCode: 'gb sct' },
  { name: 'Senegal', countryCode: 'sn' },
  { name: 'Serbia', countryCode: 'cs' },
  { name: 'Serbia', countryCode: 'rs' },
  { name: 'Seychelles', countryCode: 'sc' },
  { name: 'Sierra Leone', countryCode: 'sl' },
  { name: 'Singapore', countryCode: 'sg' },
  { name: 'Slovakia', countryCode: 'sk' },
  { name: 'Slovenia', countryCode: 'si' },
  { name: 'Solomon Islands', countryCode: 'sb' },
  { name: 'Somalia', countryCode: 'so' },
  { name: 'South Africa', countryCode: 'za' },
  { name: 'South Korea', countryCode: 'kr' },
  { name: 'Spain', countryCode: 'es' },
  { name: 'Sri Lanka', countryCode: 'lk' },
  { name: 'Sudan', countryCode: 'sd' },
  { name: 'Suriname', countryCode: 'sr' },
  { name: 'Swaziland', countryCode: 'sz' },
  { name: 'Sweden', countryCode: 'se' },
  { name: 'Switzerland', countryCode: 'ch' },
  { name: 'Syria', countryCode: 'sy' },
  { name: 'Taiwan', countryCode: 'tw' },
  { name: 'Tajikistan', countryCode: 'tj' },
  { name: 'Tanzania', countryCode: 'tz' },
  { name: 'Thailand', countryCode: 'th' },
  { name: 'Timorleste', countryCode: 'tl' },
  { name: 'Togo', countryCode: 'tg' },
  { name: 'Tokelau', countryCode: 'tk' },
  { name: 'Tonga', countryCode: 'to' },
  { name: 'Trinidad', countryCode: 'tt' },
  { name: 'Tunisia', countryCode: 'tn' },
  { name: 'Turkey', countryCode: 'tr' },
  { name: 'Turkmenistan', countryCode: 'tm' },
  { name: 'Tuvalu', countryCode: 'tv' },
  { name: 'U.A.E.', countryCode: 'ae', alias: 'United Arab Emirates' },
  { name: 'Uganda', countryCode: 'ug' },
  { name: 'Ukraine', countryCode: 'ua' },
  { name: 'United Kingdom', countryCode: 'gb', alias: 'uk' },
  { name: 'United States', countryCode: 'us', alias: 'America' },
  { name: 'Uruguay', countryCode: 'uy' },
  { name: 'US Minor Islands', countryCode: 'um' },
  { name: 'US Virgin Islands', countryCode: 'vi' },
  { name: 'Uzbekistan', countryCode: 'uz' },
  { name: 'Vanuatu', countryCode: 'vu' },
  { name: 'Vatican City', countryCode: 'va' },
  { name: 'Venezuela', countryCode: 've' },
  { name: 'Vietnam', countryCode: 'vn' },
  { name: 'Wales', countryCode: 'gb wls' },
  { name: 'Wallis and Futuna', countryCode: 'wf' },
  { name: 'Western Sahara', countryCode: 'eh' },
  { name: 'Yemen', countryCode: 'ye' },
  { name: 'Zambia', countryCode: 'zm' },
  { name: 'Zimbabwe', countryCode: 'zw' },
]
const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]
const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]
const flagRenderer = item => <Flag name={item.countryCode} />
const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow']

const options = transitions.map(name => ({ key: name, text: name, value: name }))
@connect()
export default class extends BaseComponent {
  state = { loading: false,
    open: false,
    open2: false,
    modalOpen: false,
    percent: 33,visible: true,
    visible2: true,
    animation: transitions[0], duration: 500,
    color: colors[0] }


    handleOpen = () => this.setState({ modalOpen: true })
  
    handleClose = () => this.setState({ modalOpen: false })
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }
  show2 = dimmer => () => this.setState({ dimmer, open2: true })
  close2 = () => this.setState({ open2: false })

  increment = () =>
  this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })
  toggle = () => this.setState({ percent: this.state.percent === 0 ? 100 : 0 })
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  toggleVisibility2 = () => this.setState({ visible2: !this.state.visible2 })
  handleColorChange = e => this.setState({ color: e.target.value })
  render() {
    const { loading } = this.state
   
    const { open, size} = this.state
    const { open2, dimmer } = this.state
    const nummap=[1,2,3,4,5,6,7,8]
    const { visible } = this.state
    const { animation, duration, visible2 } = this.state
    const { color } = this.state
    return (
      <Layout className="full-layout crud-page">
        <div>
        <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
        </div>
        <div>
        <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
        </div>
        <div>
        <Modal trigger={<Button>Long Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={logoImg} />
      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
        <Image src={logoImg} />
        <Image src={logoImg}  />
        <Image src={logoImg}  />
        <Image src={logoImg}  />
        <Image src={logoImg}  />
        <Image src={logoImg}  />
        <Image src={logoImg}  />
        <Image src={logoImg}  />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
        </div>
  <div>
  <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
  </div>
  <div>
  <Modal
    trigger={<Button>Show Modal</Button>}
    header='Reminder!'
    content='Call Benjamin regarding the reports.'
    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
  />
  </div>
  <div>
        <Button onClick={this.show('mini')}>Mini</Button>
        <Button onClick={this.show('tiny')}>Tiny</Button>
        <Button onClick={this.show('small')}>Small</Button>
        <Button onClick={this.show('large')}>Large</Button>
        <Button onClick={this.show('fullscreen')}>Fullscreen</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
      </div>
      <div>
      <Modal trigger={<Button>Scrolling Content Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={logoImg} wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        {nummap.map(i => (
          <Image key={i} src={logoImg}  style={{ paddingBottom: 5 }} />
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
      <div>
        <Button onClick={this.show(true)}>Default</Button>
        <Button onClick={this.show('inverted')}>Inverted</Button>
        <Button onClick={this.show('blurring')}>Blurring</Button>

        <Modal dimmer={dimmer} open={open2} onClose={this.close2}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={logoImg} />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close2}>
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={this.close2}
            />
          </Modal.Actions>
        </Modal>
      </div>
      <div>
      <Modal trigger={<Button>Show Modal</Button>} closeIcon>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
      </div>
      <div>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>Increment</Button>
      </div>
      <div>
        <Progress percent={this.state.percent} autoSuccess />
        <Button onClick={this.toggle}>Toggle Complete</Button>
      </div>
      <Segment inverted>
    <Progress percent={21} inverted progress>
      Uploading Files
    </Progress>
    <Progress percent={100} inverted progress success>
      success
    </Progress>
    <Progress percent={100} inverted progress warning>
      warning
    </Progress>
    <Progress percent={100} inverted progress error>
      error
    </Progress>
  </Segment>
  <div>
  <Segment inverted>
    <Progress percent={32} inverted color='red' progress />
    <Progress percent={59} inverted color='orange' progress />
    <Progress percent={13} inverted color='yellow' progress />
    <Progress percent={37} inverted color='olive' progress />
    <Progress percent={83} inverted color='green' progress />
    <Progress percent={23} inverted color='teal' progress />
    <Progress percent={85} inverted color='blue' progress />
    <Progress percent={38} inverted color='violet' progress />
    <Progress percent={47} inverted color='purple' progress />
    <Progress percent={29} inverted color='pink' progress />
    <Progress percent={68} inverted color='brown' progress />
    <Progress percent={36} inverted color='grey' progress />
    <Progress percent={72} inverted color='black' progress />
  </Segment>
  </div>
  <div>
        <Button content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility} />
        <Divider hidden />
        <Transition visible={visible} animation='scale' duration={500}>
          <Image size='small' src={logoImg} />
        </Transition>
      </div>
      <div>
      <Grid columns={2}>
        <Grid.Column as={Form}>
          <Form.Select
            label='Choose transition'
            name='animation'
            onChange={this.handleChange}
            options={options}
            value={animation}
          />
          <Form.Input
            label={`Duration: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={duration}
          />
          <Form.Button content='Run' onClick={this.toggleVisibility2} />
        </Grid.Column>

        <Grid.Column>
          <Transition animation={animation} duration={duration} visible={visible2}>
            <Image centered size='small' src={logoImg} />
          </Transition>
        </Grid.Column>
      </Grid>
      </div>
      <div>
      <Dropdown
    text='Filter Posts'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => (
          <Dropdown.Item key={option.value} {...option} />
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
      </div>
      <div>
      <Rating icon='heart' defaultRating={1} maxRating={3} />
      </div>
      <div>
    <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='tiny' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='small' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='large' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
    <br />
    <br />

    <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
    <br />
    <br />
  </div>
  <div>
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Country</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Country Code</Table.HeaderCell>
        <Table.HeaderCell>Alias</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {countries.map(country => (
        <Table.Row key={country.countryCode}>
          <Table.Cell>{flagRenderer(country)}</Table.Cell>
          <Table.Cell>{country.name}</Table.Cell>
          <Table.Cell>{country.countryCode}</Table.Cell>
          <Table.Cell>{country.alias}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
  </div>
  <div>
        <select onChange={this.handleColorChange}>
          {_.map(colors, c => (
            <option key={c} value={c}>
              {_.startCase(c)}
            </option>
          ))}
        </select>

        <Divider hidden />

        <Tab menu={{ color, inverted: true, attached: false, tabular: false }} panes={panes} />
      </div>
      <div>
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </div>
        <Pagination
    defaultActivePage={5}
    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
    prevItem={{ content: <Icon name='angle left' />, icon: true }}
    nextItem={{ content: <Icon name='angle right' />, icon: true }}
    totalPages={10}
  />

      </Layout>
    );
  }
}
