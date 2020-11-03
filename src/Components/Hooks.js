import React, { useState } from 'react';

const Hooks = () => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => setToggled(!toggled);

  return (
    <button onClick={toggle}>
      {toggled ? 'Toggled' : 'Toggle'}
    </button>
  )
}

export default Hooks;