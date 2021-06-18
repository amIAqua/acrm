import {} from '@testing-library/react'
import {
  IApplicationFromBackend,
  Status,
} from '../../api/application-creation/types'
import { tableRows, TableRowType } from '../table-rows'

describe('Table rows', () => {
  let applications: IApplicationFromBackend[]
  let expectedTableRows: TableRowType[]

  beforeAll(() => {
    applications = [
      {
        id: '1',
        clientId: '1',
        issues: {
          description: 'description',
        },
        vehicle: {
          brand: 'Toyota',
          model: 'Camry',
          yearOfIssue: '2015',
          registrationNumber: '123321',
          engineSpecification: '2.0',
          VIN: 'VIN',
        },
        client: {
          name: 'Vasya',
          surname: 'Pupkin',
          phoneNumber: '123123',
          email: '',
        },
        status: Status.CREATED,
      },
      {
        id: '2',
        clientId: '1',
        issues: {
          description: 'description2',
        },
        vehicle: {
          brand: 'Toyota2',
          model: 'Camry2',
          yearOfIssue: '2015',
          registrationNumber: '123321',
          engineSpecification: '2.0',
          VIN: 'VIN2',
        },
        client: {
          name: 'Vasya',
          surname: 'Pupkin',
          phoneNumber: '123123',
          email: '',
        },
        status: Status.CREATED,
      },
    ]

    expectedTableRows = [
      {
        key: '1',
        id: '1',
        vehicleName: 'Toyota Camry',
        engineSpecification: '2.0',
        registrationNumber: '123321',
        yearOfIssue: '2015',
        VIN: 'VIN',
        status: Status.CREATED,
        description: 'description',
        client: {
          name: 'Vasya',
          surname: 'Pupkin',
          phoneNumber: '123123',
          email: '',
        },
      },
      {
        key: '2',
        id: '2',
        vehicleName: 'Toyota2 Camry2',
        engineSpecification: '2.0',
        registrationNumber: '123321',
        yearOfIssue: '2015',
        VIN: 'VIN2',
        status: Status.CREATED,
        description: 'description2',
        client: {
          name: 'Vasya',
          surname: 'Pupkin',
          phoneNumber: '123123',
          email: '',
        },
      },
    ]
  })

  it('accepts applications as a parameter and returns instance of TableRowType', () => {
    const returnedTableRows = tableRows(applications)

    expect(returnedTableRows).toStrictEqual(expectedTableRows)
  })
})
