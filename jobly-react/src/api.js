const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = null;

  static async request(endpoint, data = {}, method = "GET") {
    console.log("BASE URL !!!!!!!!!!", BASE_URL)
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. Returns company details including jobs
   *
   * Company is { handle, name, description, numEmployees, logoUrl, jobs }
  *  where jobs is [{ id, title, salary, equity }, ...]
  */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get companies by search text. If no search text passed in, gets
   * all companies.
   *
   * Can filter by:
   * - minEmployees
  * - maxEmployees
  * - nameLike (will find case-insensitive, partial matches)
  */
  static async getCompanies(searchText = "") {
    console.log('searchText', searchText);

    let searchParams = searchText === "" ? {} : { nameLike: searchText };
    let res = await this.request("companies/", searchParams);
    return res.companies;
  }

  /** Get jobs by search filter. If no search filter passed in, gets
   * all jobs.
   *
   * Can filter by:
   * - minSalary
  * - hasEquity (true returns only jobs with equity > 0, other values ignored)
  * - title (will find case-insensitive, partial matches)
   */
  static async getJobs(queryParams) {
    console.log('query params', queryParams);

    let res = await this.request("jobs/", queryParams);
    return res.jobs;
  }

  /** Log in to user, return token and save into static token else error
   */
  static async logIn(logInData) {
    console.log('login API', logInData);

    let res = await this.request("auth/token", logInData, "POST");

    if (res?.token) {
      this.token = res.token;
    }

    return res;
  }

  /** Queries for user and returns user if found
   * like { username, firstName, lastName, email, isAdmin, jobs }
   */
  static async getUser(username) {
    console.log('user API', username);

    let res = await this.request(`users/${username}`);
    return res;
  }



  /** Signup user, return token and save into static token else error
     */
  static async signUp(signUpData) {
    console.log('signup API', signUpData);

    let res = await this.request("auth/register", signUpData, "POST");

    if (res?.token) {
      this.token = res.token;
    }

    return res;
  }

  /** Edit user information, and return updated user data: can edit
   * { firstName, lastName, password, email }
  */
  static async editUser(editUserData) {
    console.log('edit API', editUserData);
    console.log(this.token);

    const inputData = { ...editUserData };
    delete inputData.username;

    let res = await this.request(`users/${editUserData.username}`, inputData, "PATCH");

    console.log("EDIT USER RESPONSE", res);
    return res;
  }

  /** Logs out user by setting token to empty string and returns {user: null}  */
  static logOut() {
    this.token = '';
    return { user: null };
  }

  /** Decodes the current token and returns object with payload */
  static decodeTokenPayload() {
    return JSON.parse(atob(this.token.split('.')[1]));
  }

  /** Given a token from front end, resets this.token to frontend token value*/
  static resetToken(token) {
    this.token = token;
  }

  /** Given object with username and jobId */
}


export default JoblyApi;
