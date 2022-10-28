import React from "react";

const GroupChannelList = ({

  children,
  error = false,
  loading,
  type,

}) => {
  if (error) {
    return type === "group" ? (
      <div >
        <p >
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div >
        <p >
          {type === "group" ? "Channels" : "Messages"} loading...
        </p>
      </div>
    );
  }

  return (
    <div >
      <div >
        <p >
          {type === "group" ? "Channels" : "Direct Messages"}
        </p>
        <p>add channel</p>
      </div>
      {children}
    </div>
  );
};

export default GroupChannelList;
