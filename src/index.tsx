import React from 'react'
import { ReactTb as RTB } from './bin/table'
import { Props } from './common/types'

export const ReactTb = (props: Props) => {
  return (
    <RTB
      columnKey={props.columnKey}
      data={props.data}
      columns={props.columns}
      onDragEnd={props.onDragEnd}
      isDraggable={props.isDraggable}
      noDataLabel={props.noDataLabel}
    />
  )
}
