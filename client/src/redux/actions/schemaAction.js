import {
  FETCH_SCHEMA_REQUEST,
  FETCH_SCHEMA_FAILURE,
  FETCH_SCHEMA_SUCCES,
  GET_SELECTED_ITINERARY
} from "./Types";

export const fetchSchemaRequest = () => {
  return {
    type: FETCH_SCHEMA_REQUEST
  };
};

export const fetchSchemaSucces = schema => {
  return {
    type: FETCH_SCHEMA_SUCCES,
    payload: schema
  };
};
export const fetchSchemaFailure = error => {
  return {
    type: FETCH_SCHEMA_FAILURE,
    payload: error
  };
};

export const getSelectedItinerary = itynerary => {
  return {
    type: GET_SELECTED_ITINERARY,
    payload: itynerary
  };
};

export const fetchSchema = cityName => {
  return function(dispatch) {
    dispatch(fetchSchemaRequest());
    fetch(`/itinerary/${cityName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSchemaSucces(json));
      })
      .catch(error => {
        dispatch(fetchSchemaFailure(error.message));
      });
  };
};
