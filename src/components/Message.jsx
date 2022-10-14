import React from 'react';
import {UserAuth} from '../contexts/AuthContext'
import { auth } from '../firebase-config';
// import "../index.css"
import Alert from 'react-bootstrap/Alert';
const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#3b82f6] text-dark flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message }) => {
    const {user}=UserAuth()
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={`${style.sent}`}>{message.name}</p>
        <p>{message.text}</p>
        
      </div>
    </div>
  );
};

export default Message;