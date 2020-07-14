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

export default BASE_URL;
