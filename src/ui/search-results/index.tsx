import { FC, useEffect } from 'react'
import { useList, useStore } from 'effector-react'
import { $fetchedClients, resetFetchedClients } from '../../lib/clients-search'
import { $loading } from '../../lib/loading'
import { Loader } from '../../reusable/loader'
import { StyledSearchResults } from './styled'
import { FetchedClientCard } from '../fetched-client-card'
import { columns, data } from './table-config'
import { Table } from 'antd'

export const SearchResults: FC = () => {
  const loading = useStore($loading)
  const fetchedClients = useList($fetchedClients, (client) => {
    return <FetchedClientCard client={client} />
  })

  useEffect(() => {
    return () => resetFetchedClients()
  }, [])

  return (
    <StyledSearchResults>
      {loading ? <Loader>Загрузка...</Loader> : null}
      {fetchedClients}
      <Table columns={columns} dataSource={data} />
    </StyledSearchResults>
  )
}
