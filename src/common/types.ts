export interface ColumnsData {
  name: any
  body: any
  isHidden: boolean
}

export interface Props {
  columns: Array<ColumnsData>
  data: Array<any>
  noDataLabel: string
  //   withSearch?: boolean // experimental
  //   takeHeadersFromObjectKeys?: boolean // experimental
  columnKey: string
  isDraggable: boolean
  onDragEnd?: any
  jsxHeader?: boolean
}
