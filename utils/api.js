import http from "@/utils/http";

// export const showCaptcha = (params = {}) => http.get("/admin/showCaptcha", { params });
export const login = (data = {}) => http.post("/admin/login/index", data);
export const profile = (params = {}) => http.get("/admin/user/profile", { params });
export const userList = (params = {}) => http.get("/admin/user/index", { params });