import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
interface ColumnsData {
  name: string
  body: any
  isHidden: boolean
}

interface Props {
  columns: Array<ColumnsData>
  data: Array<any>
  noDataLabel: string
  withSearch?: boolean // experimental
  takeHeadersFromObjectKeys?: boolean // experimental
}

export class ReactTable extends Component<Props> {
  render() {
    return (
      <Fragment>
        <div className='table-responsive' data-pattern='priority-columns'>
          <table className='table table-bordered table-hover '>
            <thead>
              <tr>
                {this.props.columns.map((column, idx) => {
                  if (column.isHidden) return null
                  return (
                    <th key={idx} style={{ textAlign: 'center' }}>
                      {column.name}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody className='text-center'>
              {this.props.data.length > 0 ? (
                this.props.data.map((item, idx: number) => {
                  return (
                    <tr key={idx}>
                      {this.props.columns.map((cl, idx) => {
                        if (cl.isHidden) return null
                        return <Fragment key={idx}>{cl.body(item)}</Fragment>
                      })}
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={this.props.columns.length}>
                    {this.props.noDataLabel}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}
