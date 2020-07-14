import axios from "axios";

let BASE_URL;

const {
  NODE_ENV,
  REACT_APP_DEV_BASE_URL,
  REACT_APP_PROD_BASE_URL,
} = process.env;

if (NODE_ENV === "development") {
  BASE_URL = REACT_APP_DEV_BASE_URL;
} else {
  BASE_URL = REACT_APP_PROD_BASE_URL;
}

export default async (resources, params) => {
  try {
    const response = await axios({
      url: `/${resources}`,
      method: "get",
      baseURL: `${BASE_URL}`,
      headers: { "X-Requested-With": "XMLHttpRequest" },
      params: {
        ...params,
      },
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.message);
  }
};
