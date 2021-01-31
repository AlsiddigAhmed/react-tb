# react-tb

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-tb.svg)](https://www.npmjs.com/package/react-tb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tb
```

## Usage Example

```tsx

import { ReactTb } from 'react-tb'

class Example extends Component {
  render() {
    return <ReactTb
        columns={columns}
        data={data}
        noDataLabel='no data found!'
        isDraggable={true}
        onDragEnd={() => {}}
        columnKey={'id'}
      />
  }
}
```
### Using Columns

columns are the array that defines the table columns to show the data like (firstname, lastname, ...etc).
> columns example

```js

const columns = [
  {
    name: "firstname", // column name will show in the header (accept html also)
    isHidden: false, // you can also hide or show the column by setting isHidden value
    body: (item) => {
      // you can use data with the specific column like item.whatever
      return <td></td> // you should always return jsx decorated by td tag
    }
  }
]

```

### Table Props (required)

|prop name|description|
|---------|-----------|
|`column` |the table columns to define table|
|`data` |the table data (could come from the database)|
|`columnKey` |the unique key to identify each row|
|`noDataLabel` |label to show when no data|
|`isDraggable` |make the table's row draggable|
|`onDragEnd` |callback function will be fired when drag is end ( will give you the new order)|



## License

MIT © [AlsiddigAhmed](https://github.com/AlsiddigAhmed)
