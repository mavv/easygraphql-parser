<h1 align="center">
  <img src="https://cdn.rawgit.com/EasyGraphQL/easygraphql-mock/baab331c/EasyGraphQL.png" alt="EasyGraphQL Mock " width="350">
  <br>
  EasyGraphQL Parser 
  <br>
  <br>
</h1>

easygraphql-parser is a node library used to parse the GraphQL schema into a JS object.

## Installation

```bash
$ npm install easygraphql-parser --save
```

## Usage
To get started with the mocks, you might need to follow the next steps:

### Schema

```gql
type Family {
  name: String!
  ages: [Int]!
}

type Query {
  getFamily: Family
}
```

### Parser
```js
'use strict'

const fs = require('fs')
const path = require('path')
const easygraphqlSchemaParser = require('easygraphql-parser')

const schemaCode = fs.readFileSync(path.join(__dirname, 'schema', 'schema.gql'), 'utf8')

const schema = easygraphqlSchemaParser(schemaCode)
console.log(schema)
```

### Result
```json
{ 
  Family: { 
    type: 'ObjectType',
    description: undefined,
    fields: [ 
      { 
        name: 'name',
        arguments: [],
        noNull: true,
        isArray: false,
        type: 'String' 
      },
      { 
        name: 'ages',
        arguments: [],
        noNull: true,
        isArray: true,
        type: 'Int' 
      } 
    ],
    values: [] 
  },
  Query: { 
    type: 'ObjectType',
    description: undefined,
    fields:  [ 
      { 
        name: 'getFamily',
        arguments: [],
        noNull: false,
        isArray: false,
        type: 'Family' 
      } 
    ],
    values: [] 
  } 
}
```

# License
### The MIT License

Copyright (c) 2018 EasyGraphQL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.