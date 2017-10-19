import { init } from '../api';
export default {
  FETCH_PROJECTS: () => {
    init()
      .then( (entries) => {
        _.each(entries, (entry) => {
          // _.each(entry, (project) => {
          //   console.log(project.fields);
          // });
          console.log(entry.fields);
        });
      });
  }
};
