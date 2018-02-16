import { injectReducer } from '../../store/reducers';
import { getAnimal } from './modules/animal';

export default (store) => ({
  path : 'animal',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    if (nextState.location.query.id) {
      store.dispatch(getAnimal(nextState.location.query.id));
    }

    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Search = require('./components/Animal').default
      const reducer = require('./modules/animal').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'search', reducer })

      /*  Return getComponent   */
      cb(null, Search)

      /* Webpack named bundle   */
    }, 'animal')
  }
})
