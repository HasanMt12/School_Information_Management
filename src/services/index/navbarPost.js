import axios from "axios";

export const createNavbarIcon= async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:3000/api/v1/navbar`,
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

// services/teacher.services.js

export const readAllNavbarIcon = async () => {
  try {
    const { data, headers } = await axios.get(
      `http://localhost:3000/api/v1/navbar`
    );

    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const updateNavbarIcon= async (token, iconId, formData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/navbar/${iconId}`,
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
  export const deleteNavbarIcon= async (token, iconId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/navbar/${iconId}`,
        config
      );
  
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  