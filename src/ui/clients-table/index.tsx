import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { $fetchedClients, resetFetchedClients } from '../../lib/clients-search'
import { $loading } from '../../lib/loading'
import { StyledSearchResults } from './styled'
import { columns } from './table-config'
import { Empty, Table } from 'antd'

export const ClientsTable: FC = () => {
  const loading = useStore($loading)
  const fetchedClients = useStore($fetchedClients)

  useEffect(() => {
    return () => resetFetchedClients()
  }, [])

  return (
    <StyledSearchResults>
      {fetchedClients.length ? (
        <Table
          columns={columns}
          bordered
          dataSource={fetchedClients.map((client, index) => {
            return {
              ...client,
              fullName: `${client.name} ${client.surname}`,
              key: index + 1,
            }
          })}
          loading={loading}
        />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ marginTop: '100px' }}
        />
      )}
    </StyledSearchResults>
  )
}
