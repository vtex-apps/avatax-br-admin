import React, { useState } from 'react'
import { Tab } from 'vtex.styleguide'

type WithChildren<T> = T & { children?: React.ReactNode }
type Props = WithChildren<{
  label: string
  currentTabNumber: number
}>

function TabArea({ label, currentTabNumber, children }: Props) {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

  return (
    <Tab
      label={label}
      active={tab.currentTab === currentTabNumber}
      onClick={() => setTab({ currentTab: currentTabNumber })}
    >
      {children}
    </Tab>
  )
}

export default TabArea
