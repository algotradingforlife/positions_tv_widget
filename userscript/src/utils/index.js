import { config } from '../config';

const closeOrder = (symbol) => {
  const webhookUrl = config.webhookUrl;
  const postRequestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      symbol: symbol,
    }),
  };
  return fetch(webhookUrl, postRequestOptions);
};

export { closeOrder };
