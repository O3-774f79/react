import React, { Component } from 'react'
import { List, ListItem, makeSelectable } from 'material-ui/List'
class AppNavBar extends Component {
  render() {
    return (
      <div>
        <p> hello</p>
        <ListItem
          primaryText="Primary"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem primaryText="1" value="/main/page1" />,
            <ListItem primaryText="2" value="/main/page2" />,
            <ListItem primaryText="3" value="/main/page3" />,
            <ListItem primaryText="4" value="/main/page4" />,
            <ListItem primaryText="5" value="/main/home" />,
          ]}
        />
      </div>
    )
  }
}

export default AppNavBar
