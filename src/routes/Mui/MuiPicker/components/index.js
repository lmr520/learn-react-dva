import React from 'react';
import { connect } from 'dva';
import './index.less';
import { Layout} from 'antd';
import BaseComponent from 'components/BaseComponent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers'

const styles = {
  grid: {
    width: '60%',
  },
};

@connect()
 class MuiPicker extends BaseComponent {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date('2014-08-18T21:11:54'),
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <Layout className="full-layout crud-page">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
           dateFormat="yyyy-M-d h:m:s.S"
            margin="normal"
            label="Date picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          <TimePicker
            margin="normal"
            label="Time picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      </Layout>
    );
  }
}
MuiPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MuiPicker);