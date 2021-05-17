import React, { FC, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import * as yup from 'yup'

import EstablishmentContext from '../../context/EstablishmentContext'
import getEstablishmentQuery from '../../queries/getEstablishment.gql'
import deleteEstablishmentMutation from '../../queries/delete.gql'
import saveConfigurationMutation from '../../queries/saveConfiguration.gql'
import getDocks from '../../queries/getDocks.gql'
import { dockName } from '../Common/values'
import getAddress from '../../queries/getAddress.gql'
import { cnpjValidation } from './validCnpj'

const EstablishmentProvider: FC = (props) => {
  const [establishment, setEstablishments] = useState<Establishment>({})
  const [edit, setEdit] = useState<boolean>(false)
  const [validation, setValidation] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState(false)
  const [zip, setZip] = useState(false)

  const schema = yup.object().shape({
    activitySector: yup.string().required(),
    icmsTaxPayer: yup.string().required(),
    taxRegime: yup.string().required(),
    entityType: yup.string().required(),
    stateTaxId: yup.string(),
    street: yup.string().required(),
    neighborhood: yup.string().required(),
    zipCode: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Deve conter somente números')
      .length(8),
    cityCode: yup.number().required().positive().integer(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    streetNumber: yup.number().required().positive().integer(),
    complement: yup.string().required(),
    phone: yup.string().required(),
    cnpj: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Deve conter somente números')
      .length(14),
    suframa: yup.string(),
    messageType: yup.string().required(),
    dockId: yup.string().required(),
    dockName: yup.string().required(),
  })

  // Return 1 if its ok, 2 if is null and 3 if cep is smaller than 3 caracteres
  async function validationFuntion(object: Establishment) {
    let text = ''

    for (const [key, value] of Object.entries(object)) {
      try {
        schema.validateSyncAt(key, object)
        if (key === 'cnpj') {
          const returnValue = cnpjValidation(value)

          if (!returnValue) text = 'CNPJ inválido'
        }
      } catch (e) {
        if (
          key === 'zipCode' &&
          e.errors[0] === 'zipCode must be exactly 8 characters'
        )
          text = 'CEP deve conter 8 caracteres'
        else if (
          key === 'cnpj' &&
          e.errors[0] === 'cnpj must be exactly 14 characters'
        )
          text = 'CNPJ deve conter 14 caracteres'
        else text = 'Preencha o campo obrigatório'
      }
    }

    return text
  }

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

    if (object.zipCode && !object.city) {
      getInfo(object)
    }
  }

  async function getDockId(object: Establishment) {
    valueDocks?.forEach((element) => {
      if (element.name === object.dockName) {
        setEstablishment({ dockName: object.dockName, dockId: element.id })
      }
    })
  }

  const [gettingAddress] = useMutation(getAddress)

  async function getInfo(object: Establishment) {
    if (object.zipCode) {
      if (object.zipCode.length === 8) {
        setZip(false)
        const { zipCode } = object
        const valueReturn = await gettingAddress({ variables: { zipCode } })

        setEstablishment({
          city: valueReturn.data.getAddress.city,
          state: valueReturn.data.getAddress.state,
          street: valueReturn.data.getAddress.street,
          neighborhood: valueReturn.data.neighborhood,
          streetNumber: valueReturn.data.number,
          zipCode: object.zipCode,
          complement: valueReturn.data.complement,
        })
      } else {
        setZip(true)
      }
    }

    setValidation(true)
    setValidation(false)
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

  async function validationValues() {
    const object = establishment
    const retorno = await schema.validate(object).catch(function (err) {
      err.name // => 'ValidationError'
      err.errors // => ['Deve ser maior que 18']

      return false
    })

    return retorno
  }

  const [saveConfiguration] = useMutation(saveConfigurationMutation)

  const saveConfigurations = async () => {
    const valid = await validationValues()

    setValidation(true)
    setValidation(false)

    if (valid) {
      const valueReturn = await saveConfiguration({
        variables: {
          esta: { ...establishment },
        },
      })

      if (valueReturn.data.saveConfiguration) setShowAlert(true)
      setEdit(false)
      refetch()
    }
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
        validation,
        zip,
        validationFuntion,
      }}
    >
      {props.children}
    </EstablishmentContext.Provider>
  )
}

export default EstablishmentProvider
