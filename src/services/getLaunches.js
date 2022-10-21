import api from './api';

const getLaunch = async (route) => {
  try {
    const { data } = await api.get(route);
    return data;
  } catch (error) {
    console.log(error.response);
    return ([]);
  }
};

export default getLaunch;
