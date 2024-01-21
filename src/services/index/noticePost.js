import axios from "axios";

export const createNotices= async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:3000/api/v1/notices`,
      formData,
      config
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};



export const readAllNotices = async () => {
  try {
    const { data, headers } = await axios.get(
      `http://localhost:3000/api/v1/notices`
    );

    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const updateNotices= async (token, resultId, formData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/notices/${resultId}`,
        formData,
        config
      );
  
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };


  export const deleteNotices= async (token, resultId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/notices/${resultId}`,
        config
      );
  
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  