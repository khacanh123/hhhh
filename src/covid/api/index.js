import axios from 'axios';

const getDataVirusCorona = async () => {
    const urlData = `https://api.covid19api.com/summary`;
    const response = await axios.get(urlData);
    const data = await response.status === 200 ? response.data : [];
    return data;
}
export const api = {
    getDataVirusCorona
}