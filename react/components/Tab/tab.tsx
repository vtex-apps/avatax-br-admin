import React, { FC, useState } from 'react'
import { Tab } from 'vtex.styleguide'

interface Props {
  label: string
  currentTabNumber: number
}

const TabArea: FC<Props> = (props) => {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

  const { currentTabNumber, label, children } = props
  let disableNumber = 1

  if (currentTabNumber === 1) disableNumber = 2

  return (
    <Tab
      label={label}
      active={tab.currentTab === currentTabNumber}
      onClick={() => setTab({ currentTab: currentTabNumber })}
      disable="true"
    >
      {children}
    </Tab>
  )
}

export default TabArea
