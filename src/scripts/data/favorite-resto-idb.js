import { openDB } from 'idb';
import config from '../globals/config';

const { DatabaseName, DatabaseVersion, ObjectStoreName } = config;

const dbPromise = openDB(DatabaseName, DatabaseVersion, {
  upgrade(database) {
    database.createObjectStore(ObjectStoreName, { keyPath: 'id' });
  },
});

const FavoriteRestaurant = {
  async getResto(id) {
    return (await dbPromise).get(ObjectStoreName, id);
  },
  async getAllResto() {
    return (await dbPromise).getAll(ObjectStoreName);
  },
  async putResto(resto) {
    return (await dbPromise).put(ObjectStoreName, resto);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(ObjectStoreName, id);
  },
};

export default FavoriteRestaurant;
