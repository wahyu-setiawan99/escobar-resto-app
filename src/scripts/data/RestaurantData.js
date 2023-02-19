import endPointApi from '../globals/endpoint-api';

class RestaurantData {
  static async ListResto() {
    const response = await fetch(endPointApi.listResto);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async DetailResto(id) {
    const response = await fetch(endPointApi.detailResto(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async SearchResto(keyword) {
    const response = await fetch(endPointApi.searchResto(keyword));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantData;
