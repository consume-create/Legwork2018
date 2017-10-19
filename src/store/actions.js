import { init } from '../api';
export default {
  FETCH_PROJECTS: () => {
    init()
      .then( (entries) => {
        _.each(entries, (entry) => {
          console.log(entry);
        });
      });
  }
};
