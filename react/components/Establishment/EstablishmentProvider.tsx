import React, { FC, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'

import EstablishmentContext from '../../context/EstablishmentContext'
import getEstablishmentQuery from '../../queries/getEstablishment.gql'
import deleteEstablishmentMutation from '../../queries/delete.gql'
import saveConfigurationMutation from '../../queries/saveConfiguration.gql'
import getDocks from '../../queries/getDocks.gql'
import { dockName } from '../Common/values'

const EstablishmentProvider: FC = (props) => {
  const [establishment, setEstablishments] = useState<Establishment>({})
  const [edit, setEdit] = useState<boolean>(false)

  const [showAlert, setShowAlert] = useState(false)

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const { data: docks } = useQuery<GetDocks>(getDocks)

  const valueDocks = docks?.getDocks

  if (dockName.options.length === 0) {
    valueDocks?.forEach((element) => {
      dockName.options.push({ value: element.name, label: element.name })
    })
  }

  const setEstablishment = (object: Establishment) => {
    setEstablishments({
      ...establishment,
      ...object,
    })

    if (object.dockName && !object.dockId) {
      getDockId(object)
    }
  }

  async function getDockId(object: Establishment) {
    valueDocks?.forEach((element) => {
      if (element.name === object.dockName) {
        setEstablishment({ dockName: object.dockName, dockId: element.id })
      }
    })
  }

  const {
    loading,
    data: establishmentList,
    refetch,
  } = useQuery<GetEstablishment>(getEstablishmentQuery)

  const [deleteEstablishment] = useMutation(deleteEstablishmentMutation)

  const update = (establishmentUpdate: Establishment) => {
    setEstablishment(establishmentUpdate)
    setEdit(true)
  }

  const deleteEstablishments = async (documentId: string) => {
    await deleteEstablishment({ variables: { documentId } })
    refetch()
  }

  const [saveConfiguration] = useMutation(saveConfigurationMutation)

  const saveConfigurations = async () => {
    const valueReturn = await saveConfiguration({
      variables: {
        esta: { ...establishment },
      },
    })

    if (valueReturn.data.saveConfiguration) setShowAlert(true)
    setEdit(false)
    refetch()
  }

  return (
    <EstablishmentContext.Provider
      value={{
        establishment,
        setEstablishment,
        edit,
        setEdit,
        loading,
        establishmentList: establishmentList?.establishments,
        update,
        deleteEstablishments,
        saveConfigurations,
        showAlert,
        setShowAlert,
        handleCloseAlert,
        docks: docks?.getDocks,
      }}
    >
      {props.children}
    </EstablishmentContext.Provider>
  )
}

export default EstablishmentProvider
