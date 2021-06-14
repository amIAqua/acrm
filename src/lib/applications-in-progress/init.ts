import { forward } from 'effector'
import { InProgressAPI } from '../../api/in-progress'
import {
  fetchApplicationsInProgressFx,
  fetchApplicationsInProgress,
  resetApplicationsInProgress,
  $applicationsInProgress,
} from './model'
import { changeStatus } from '../application-statuses'
import { changeStatusFx } from '../application-statuses/model'

forward({
  from: fetchApplicationsInProgress,
  to: fetchApplicationsInProgressFx,
})

// Updating applications in progress list after closing
forward({
  from: changeStatusFx.done,
  to: fetchApplicationsInProgressFx,
})

fetchApplicationsInProgressFx.use(async () => {
  return InProgressAPI.fetchAllInProgress()
})

$applicationsInProgress
  .on(
    fetchApplicationsInProgressFx.doneData,
    (_prev, applications) => applications
  )
  .reset(resetApplicationsInProgress)
