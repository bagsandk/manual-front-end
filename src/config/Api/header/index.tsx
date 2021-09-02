const headers = {
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  "Content-Type": "application/x-www-form-urlencoded",
};

export default headers;
