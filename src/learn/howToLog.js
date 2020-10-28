import React from 'react';
//incomplete
//https://www.skptricks.com/2019/02/can-you-consolelog-in-jsx.html
function Logger() {
  return (
    <div>
      <h1>List of countries</h1>
      { console.log(this.props.countries) }
    </div>
  );

}

export default Logger;
