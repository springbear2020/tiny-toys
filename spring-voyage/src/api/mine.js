import request from "@/utils/request.js";

export const getMineBlogsList = async (page, pageSize) => {
  return request.get("/mine/blogs", { params: { page, pageSize } });
};

export const getMineBooksList = async (page, pageSize) => {
  return request.get("/mine/books", { params: { page, pageSize } });
};

export const getMineProjectsList = async (page, pageSize) => {
  return request.get("/mine/projects", { params: { page, pageSize } });
};

export const searchMineResources = async (keyword) => {
  return request.get("/mine/resources", { params: { keyword } });
};
