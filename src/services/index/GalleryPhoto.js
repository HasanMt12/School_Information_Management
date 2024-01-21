import axios from "axios";

export const creategalleryPhoto= async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:3000/api/v1/gallery`,
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



export const readAllgalleryPhoto = async () => {
  try {
    const { data, headers } = await axios.get(
      `http://localhost:3000/api/v1/gallery`
    );

    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const updategalleryPhoto= async (token, SliderId, formData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.put(
        `http://localhost:3000/api/v1/gallery/${SliderId}`,
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


  export const deletegalleryPhoto= async (token, SliderId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/gallery/${SliderId}`,
        config
      );
  
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  