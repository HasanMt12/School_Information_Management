import axios from "axios";

export const createEvents= async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:3000/api/v1/event`,
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

export const readAllEvents = async () => {
  try {
    const { data, headers } = await axios.get(
      `http://localhost:3000/api/v1/event`
    );

    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const updateEvents= async (token, eventId, formData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/event/${eventId}`,
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
  export const deleteEvents= async (token, eventId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/event/${eventId}`,
        config
      );
  
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  