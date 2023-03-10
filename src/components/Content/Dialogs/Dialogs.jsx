import React from 'react';
import style from "./Dialogs.module.css";

const Dialogs = (props) => {

    const newMessage = React.createRef();

    return (
        <div className={style.dialogs}>
            <div className={style.chats}>
                <h2>Chat</h2>
                {props.chats}
            </div>
            <div className={style.messages}>
                <h2>Messages</h2>
                {props.messages}
                <h2>New Message</h2>
                <textarea
                    ref={newMessage}
                    onChange={() => {props.newMessageTextChange(newMessage.current.value)}}
                    value={props.newDialogMessage}
                />
                <button onClick={props.sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;