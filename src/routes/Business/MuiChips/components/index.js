import React from 'react';
import { connect } from 'dva';
import './index.less';
import { Layout} from 'antd';
import BaseComponent from 'components/BaseComponent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  root2: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip2: {
    margin: theme.spacing.unit / 2,
  },
});
@connect()
 class MuiChips extends BaseComponent {
  state = {
    chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue.js' },
    ],
  };

  handleDelete2 = data => () => {
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
      return;
    }

    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  handleDelete= () => {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  }
  
   handleClick= () => {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
  }
  
  render() {
    const { classes } = this.props;
    return (
      <Layout className="full-layout crud-page">
      <div className={classes.root}>
      <Chip label="Basic Chip" className={classes.chip} variant="outlined" />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={this.handleClick}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable Chip"
        onDelete={this.handleDelete}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Clickable Deletable Chip"
        onClick={this.handleClick}
        onDelete={this.handleDelete}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Clickable Deletable Chip"
        onClick={this.handleClick}
        onDelete={this.handleDelete}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        label="Custom delete icon Chip"
        onClick={this.handleClick}
        onDelete={this.handleDelete}
        className={classes.chip}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        label="Clickable Link Chip"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
        variant="outlined"
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={this.handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={this.handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        label="Deletable Primary Chip"
        onDelete={this.handleDelete}
        className={classes.chip}
        color="primary"
        variant="outlined"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Deletable Secondary Chip"
        onDelete={this.handleDelete}
        className={classes.chip}
        color="secondary"
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Deletable Secondary Chip"
        onDelete={this.handleDelete}
        className={classes.chip}
        color="secondary"
        variant="outlined"
      />
    </div>
    <Paper className={classes.root2}>
        {this.state.chipData.map(data => {
          let icon = null;

          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }

          return (
            <Chip
              key={data.key}
              icon={icon}
              label={data.label}
              onDelete={this.handleDelete2(data)}
              className={classes.chip2}
            />
          );
        })}
      </Paper>
      </Layout>
    );
  }
}
MuiChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MuiChips);