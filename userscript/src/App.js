import React from 'react';
import useWebSocket from 'react-use-websocket';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Position from './components/Position';
import { closeOrder } from './utils/index';

const App = () => {
  const { lastMessage } = useWebSocket('wss://forexfundsdemo2.ngrok.app/ws');

  const closePosition = async (symbol) => {
    const response = await closeOrder(symbol);
    const content = await response.json();
    toast(content);
  };

  return (
    <div className='main'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme='dark'
      />
      {lastMessage
        ? JSON.parse(lastMessage.data).map((s, i) => (
            <Position
              key={i}
              symbol={s.symbol}
              lotSize={s.volume}
              pnl={s.profit}
              close={closePosition}
            />
          ))
        : null}
      <div></div>
    </div>
  );
};

export default App;
