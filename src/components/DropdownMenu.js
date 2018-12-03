import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export const DropdownMenu = ({ handleActiveItem, handleDropdownItemClick }) => {
  return (<Dropdown
    item
    text="Events"
    onClick={handleActiveItem}
  >
    <Dropdown.Menu>
      <Dropdown.Item
        name="events"
        onClick={handleDropdownItemClick}
      >
        Upcoming Events
    </Dropdown.Item>
      <Dropdown.Item
        name="scrums"
        onClick={handleDropdownItemClick}
      >
        Past Scrums
    </Dropdown.Item>
      <Dropdown.Item
        name="hangouts"
        onClick={handleDropdownItemClick}
      >
        Past Events
    </Dropdown.Item>
      <Dropdown.Item name="new" onClick={handleDropdownItemClick}>
        Create an Event
    </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>);
}
