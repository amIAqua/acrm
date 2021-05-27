import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { $fetchedClients, resetFetchedClients } from '../../lib/clients-search'
import { $loading } from '../../lib/loading'
import { StyledSearchResults } from './styled'
import { columns } from './table-config'
import { Table } from 'antd'

export const SearchResults: FC = () => {
  const loading = useStore($loading)
  const fetchedClients = useStore($fetchedClients)

  useEffect(() => {
    return () => resetFetchedClients()
  }, [])

  return (
    <StyledSearchResults>
      <Table
        columns={columns}
        dataSource={fetchedClients.map((client, index) => {
          return {
            ...client,
            fullName: `${client.name} ${client.surname}`,
            key: index + 1,
          }
        })}
        loading={loading}
      />
    </StyledSearchResults>
  )
}
