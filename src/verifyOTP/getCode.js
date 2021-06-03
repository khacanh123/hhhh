import axios from 'axios';

const getVerifyCode = async () => {
  const url = `http://localhost:8000/send-otp`;
  const response = await axios.get(url);
  const result = await response.status === 200 ? response.data.random : 0;
  return result+"";
}
export const api = {
  getVerifyCode
}