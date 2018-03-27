import { connect } from 'react-redux'
import { getApplicantApplications, getOverseenApplications, getAllApplications } from '../modules/applications'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import ApplicationsList from '../components/ApplicationsList'

const mapDispatchToProps = {
  getApplicantApplications : (applicantId) => getApplicantApplications(applicantId),
  getOverseenApplications : (userId) => getOverseenApplications(userId),
  getAllApplications : () => getAllApplications()
}

const mapStateToProps = (state) => ({
  applications : state.applications.applications,
  auth: state.auth,
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsList)
