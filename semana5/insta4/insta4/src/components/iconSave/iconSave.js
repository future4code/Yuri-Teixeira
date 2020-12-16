import React from 'react';

import iconSaved from '../../img/saved.png';
import iconUnsaved from '../../img/unsaved.png';

export default class IconSave extends React.Component {
  state = {
    saved: false,
    icon: iconUnsaved
  }

  onClick = () => {
    if (!this.state.saved) {
      console.log('Este post foi salvo!');
      this.setState({
        saved: true,
        icon: iconSaved
      })
    } else {
      console.log('Este post não foi salvo!');
      this.setState({
        saved: false,
        icon: iconUnsaved
      })
    }
  }

  render() {
    return (
      <img src={this.state.icon} alt="iconUnsaved" onClick={this.onClick} />
    )
  }
}

