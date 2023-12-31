export const errorMsg = {
  // Internal server error
  500: "There seems to be some problem with our servers. You can retry after a few seconds or reach out to admin for assistance.",
  // unauthorized
  401: "Your credentials are not sufficient to authorized you. Please retry with the right credentials.",
};

/**
 * Default response format
 *
 * @param status
 * @param msg
 * @param code
 * @returns {json}
 */
export const respond = (status = true, msg, code) => {
  return {
    success: status,
    message: msg,
    code: code,
  };
};

/**
 * Return response for the newly created instance
 *
 * @param msg
 * @returns {json}
 */
export const respondCreated = (msg) => {
  return respond(true, msg, 201);
};

/**
 * return success response
 * @param msg
 * @returns {json}
 */
export const respondSuccess = (msg, data) => {
  return respond(true, msg, 200);
};

/**
 * return success response with data
 *
 * @param msg
 * @param code
 * @param data
 * @returns {json}
 */
export const respondWithData = (msg = "", code = 200, data) => {
  return {
    ...respond(true, msg, code),
    data: data,
  };
};

/**
 * Return error response
 *
 * @param msg
 * @param code
 * @returns {json}
 */
export const respondError = (msg, code) => {
  return respond(false, msg, code);
};

/**
 * Return unauthorized error
 *
 * @returns {json}
 */
export const respondUnauthorized = (msg, data, code = 401) => {
  return {
    ...respond(false, msg, code),
    data: data,
  };
};

export const respondNotAcceptable = (msg, code = 406) => {
  return {
    ...respond(false, msg, code),
  };
};

/**
 * Return multipleResponse error
 *
 * @returns {json}
 */
export const multipleResponse = (msg = "", code = 300, data) => {
  return {
    ...respond(false, msg, code),
    data: data,
  };
};

/**
 * Return Forbidden response
 *
 * @returns {json}
 */
export const respondForbidden = (msg) => {
  return respond(false, msg, 403);
};

/**
 * return route not found error
 *
 * @param {string} msg
 * @returns {json}
 */
export const respondNotFound = (msg) => {
  return respond(false, msg, 404);
};

/**
 * Return Internal server Error
 *
 * @returns {json}
 */
export const respondInternalServerError = () => {
  return respond(false, errorMsg["500"], 500);
};

/**
 * return route not found error
 *
 * @param {string} msg
 * @returns {json}
 */
export const respondValidationError = (msg) => {
  return respond(false, msg, 422);
};