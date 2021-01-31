import React, { Component, Fragment } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import 'bootstrap/dist/css/bootstrap.css'
import { Props } from '../common/types'

export class ReactTb extends Component<Props> {
  onDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }
    const newOrder = Array.from(this.props.data)
    const [reorderedItem] = newOrder.splice(result.source.index, 1)
    newOrder.splice(result.destination.index, 0, reorderedItem)
    this.setState({ activityElements: newOrder })

    const newArray = newOrder.map((item: any, idx: number) => {
      return { ...item, id: item.id, name: item.title, order: idx + 1 }
    })
    this.props.onDragEnd(newArray)
  }
  render() {
    return (
      <Fragment>
        <div
          className='table-responsive'
          dir='auto'
          data-pattern='priority-columns'
        >
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId='droppable'>
              {(provided, __) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <table className='table table-bordered table-hover '>
                    <thead>
                      <tr className='react-tb-header'>
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
                        this.props.data.map((item: any, idx: number) => {
                          return (
                            <Draggable
                              key={item[this.props?.columnKey]}
                              draggableId={`${item[this.props?.columnKey]}`}
                              index={idx}
                              isDragDisabled={!this.props.isDraggable}
                            >
                              {(provided, snapshot) => (
                                <Fragment>
                                  <tr
                                    style={{
                                      cursor: 'pointer',
                                      color: snapshot.isDragging
                                        ? 'green'
                                        : 'white',
                                      width: '100%',
                                      ...provided.draggableProps.style
                                    }}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {this.props.columns.map((cl, idx) => {
                                      if (cl.isHidden) return null
                                      return (
                                        <Fragment key={idx}>
                                          {cl.body(item)}
                                        </Fragment>
                                      )
                                    })}
                                  </tr>
                                </Fragment>
                              )}
                            </Draggable>
                          )
                        })
                      ) : (
                        <tr>
                          <td colSpan={this.props.columns.length}>
                            {this.props.noDataLabel}
                          </td>
                        </tr>
                      )}
                      {provided.placeholder}
                    </tbody>
                  </table>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </Fragment>
    )
  }
}
