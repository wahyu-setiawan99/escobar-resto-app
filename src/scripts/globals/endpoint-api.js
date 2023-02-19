import config from './config';

const endPointApi = {
  listResto: `${config.BaseUrl}/list`,
  detailResto: (id) => `${config.BaseUrl}/detail/${id}`,
  searchResto: (keyword) => `${config.BaseUrl}/search?q=${keyword}`,
  addReview: `${config.BaseUrl}/review`,
};

export default endPointApi;
