import {
   FETCH_SCHEMA_REQUEST,
   FETCH_SCHEMA_FAILURE,
   FETCH_SCHEMA_SUCCES
} from './Types';

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

export const fetchSchema = () => {
   return function(dispatch) {
      dispatch(fetchSchemaRequest());
      fetch('/activities', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
         .then(res => res.json())
         .then(json => {
            dispatch(fetchSchemaSucces(json));
            console.log(json);
         })
         .catch(error => {
            dispatch(fetchSchemaFailure(error.message));
         });
   };
};

export default fetchSchema;
