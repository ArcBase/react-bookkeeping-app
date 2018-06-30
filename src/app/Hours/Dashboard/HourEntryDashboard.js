import React from 'react';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import Button from '../../../ui/Button/Button';
import HourEntryList from '../List/HourEntryList';
import { toHourEntryCreate } from '../../../routes/links';

export class HourEntryDashboard extends React.Component {

  createHours = () =>{
    this.props.history.push(
      toHourEntryCreate()
    );
  };

  render() {
    return (
      <AppFrame title="Hour entries">
        <Button
          name="add"
          color="primary"
          text="add new"
          action={(event) => {
            event.stopPropagation();
            this.createHours()
          }}
        />
        <HourEntryList />
      </AppFrame>
    )
  }

}

export default HourEntryDashboard;