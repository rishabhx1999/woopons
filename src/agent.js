import _superagent from "superagent";
import prefix from "superagent-prefix";

const superagent = _superagent;
const baseURL = "https://woopons.xcelanceweb.com";
superagent.agent().use(prefix(baseURL));

const API_ROOT = "/api/v1/";

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set("Authorization", `Bearer ${token}`);
  }
};

const responseBody = (res) => res.body;

const requests = {
  del: (url) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) =>
    fetch(`${baseURL}${API_ROOT}${url}`)
      .then((res) => res.json())
      .then((json) => json),
  // superagent
  //   .agent()
  //   .use(prefix(baseURL))
  //   .get(`${API_ROOT}${url}`)
  //   .then(responseBody);
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    fetch(`${baseURL}${API_ROOT}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => json),
  postLogin: (url, body) =>
    fetch(`${baseURL}${API_ROOT}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => json),
};

const Auth = {
  current: () => requests.get("info"),
  login: (formData) => requests.post("auth/login", formData),
  resetLink: (formData) => requests.post("auth/forgotpassword", formData),
  resetPassword: (formData) => requests.post("auth/reset-password", formData),
};

const common = {
  getCusPlans: () => requests.get("base/customerplans").then((res) => res),
  getBusPlans: () => requests.get("base/businessplans"),
  customercreate: (formData) => requests.post("base/customercreate", formData),
  verifyOTP: (formData) => requests.post("base/verifyOtp", formData),
  resendOTP: (formData) => requests.post("base/resendOtp", formData),
  saveSetting: (formData) => requests.post("/api/saveSetting", formData),
  getSettings: () => requests.get("/api/getSettings"),
};

const customer = {
  getLogDetail: () => requests.get("user/logindetail"),
  getMyAccount: () => requests.get("user/myaccount"),
  cancelSub: (subid) => requests.get("user/subscription/cancel/" + subid),
  updateProfile: (formData) => requests.post("user/customerupdate", formData),
  feedbackSend: (formData) => requests.post("user/feedback", formData),
  getCusFromToken: (formData) =>
    requests.postLogin("user/loginwithtoken", formData),
  getPromoCode: (formData) => requests.post("getpromocode", formData),
};

const business = {
  createProfile: (formData) =>
    requests.post("base/register/business", formData),
  updateProfile: (formData) => requests.post("user/businessupdate", formData),
  createCoupon: (formData) => requests.post("coupon/create", formData),
  updateCoupon: (formData) => requests.post("coupon/update", formData),
  deleteCoupon: (formData) => requests.post("coupon/delete", formData),
  getCoupons: () => requests.get("coupon/all"),
  getCoupon: (cupId) => requests.get("coupon/get/" + cupId),
};

const admin = {
  updateProfile: (formData) => requests.post("updateprofile", formData),
  getBussinesses: () => requests.get("businesses"),
  getdashboardata: () => requests.get("dashboarddata"),
  getAllCoupons: () => requests.get("allcoupons"),
  getAllCodes: () => requests.get("allcodes"),
  createNewCodes: (formData) => requests.post("create/promocode", formData),
  deleteProCode: (formData) => requests.post("delete/promocode", formData),
  getCustomers: () => requests.get("customers"),
  createBusiness: (formData) => requests.post("business/register", formData),
  featuredToggle: (formData) =>
    requests.post("business/featuredtoggle", formData),
  changePassword: (formData) => requests.post("updatepassword", formData),
  getCoupon: (cupId) => requests.get("couponadmin/get/" + cupId),
  getBusiness: (busid) => requests.get("couponadmin/viewbusiness/" + busid),
  updateCoupon: (formData) => requests.post("couponadmin/update", formData),
  updateBusiness: (formData) => requests.post("updatebusiness", formData),
  getFeedbacks: (formData) => requests.post("getallfeedbacks", formData),
  broadcastNotification: (formData) =>
    requests.post("broadcastNotification", formData),
  getCouponsByBusinessId: (busid) =>
    requests.get("getCouponsByBusinessId/" + busid),
  cusSubToggle: (formData) => requests.post("customer/canceltoggle", formData),
};

const Plan = {
  detail: (plan) => requests.get("plan/detail/" + plan),
  subscribe: (formData) => requests.post("plan/subscribe", formData),
};

export default {
  Auth,
  common,
  admin,
  Plan,
  customer,
  business,
  setToken: (_token) => {
    token = _token;
  },
};
