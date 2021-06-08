import {
  ApplicationFromBackend,
  ClientType,
} from '../application-creation/types'

export type ApplicationInProgressType = ApplicationFromBackend & {
  client: ClientType
}
