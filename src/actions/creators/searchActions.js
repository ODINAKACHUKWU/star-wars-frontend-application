import axios from "axios";
import TYPES from "../constants";
import BASE_URL from "../../api/request";

const { SEARCHING, SEARCH_SUCCESS, SEARCH_FAILURE } = TYPES;

const searching = (bool) => ({
  type: SEARCHING,
  bool,
});

const searchSuccess = (result) => ({
  type: SEARCH_SUCCESS,
  result,
});

const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  error,
});

const searchRequest = (name) => async (dispatch) => {
  dispatch(searching(true));
  try {
    const characters = await (await axios.get(`${BASE_URL}/people`)).data.data;
    const planets = await (await axios.get(`${BASE_URL}/planets`)).data.data;
    const starships = await (await axios.get(`${BASE_URL}/starships`)).data
      .data;
    const data = characters.concat(planets, starships);
    const result = data.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
    if (result.length === 0) {
      dispatch(searchFailure(`No result was found for ${name}`));
    } else {
      dispatch(searchSuccess(result));
    }
  } catch (error) {
    dispatch(searchFailure(error));
  } finally {
    dispatch(searching(false));
  }
};

export default searchRequest;
