import React, { useState } from 'react'
import { ButtonWithIcon, Modal } from 'vtex.styleguide'
import ReactJson from 'react-json-view'

import Info from '../../assets/icons/info.png'

export const LogViewButton = (cellData: CalculationLog) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const omitTypename = (key: string, value: unknown) => {
    return key === '__typename' ? undefined : value
  }

  return (
    <>
      <ButtonWithIcon
        icon={<img src={Info} alt="Mais detalhes" />}
        variation="tertiary"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal centered isOpen={isModalOpen} onClose={handleModalToggle}>
        <ReactJson
          src={JSON.parse(
            JSON.stringify({
              ...cellData,
              payload: JSON.parse(cellData.payload, omitTypename),
            }),
            omitTypename
          )}
          iconStyle="square"
          displayDataTypes={false}
          name={false}
          displayObjectSize={false}
        />
      </Modal>
    </>
  )
}
