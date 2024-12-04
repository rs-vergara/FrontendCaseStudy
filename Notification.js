import React, { useState } from "react";
import Notification from "./Notification";

const App = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div>
      {showNotification && (
        <Notification
          variant="success"
          message="Your operation was successful!"
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
