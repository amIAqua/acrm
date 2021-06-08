import { forward } from 'effector'
import { InProgressAPI } from '../../api/in-progress'
import {
  fetchApplicationsInProgressFx,
  fetchApplicationsInProgress,
  resetApplicationsInProgress,
  $applicationsInProgress,
} from './model'

forward({
  from: fetchApplicationsInProgress,
  to: fetchApplicationsInProgressFx,
})

fetchApplicationsInProgressFx.use(async () => {
  return InProgressAPI.fetchallInProgress()
})

$applicationsInProgress
  .on(
    fetchApplicationsInProgressFx.doneData,
    (_prev, applications) => applications
  )
  .reset(resetApplicationsInProgress)

$applicationsInProgress.watch((data) => {
  console.log(data)
})
