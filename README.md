# Basic

### A standard library for Javascript/Typescript

### Installation

```
yarn add @scally/basic
```

### Usage

```
import { compact } from '@scally/basic/array'

const withNulls = [1,2,3,null,undefined,4]
console.log(compact(withNulls)) // [1,2,3,4]
```

### Why

- Javascript's lack of a standard library keeps causing a massive dependency tree. This doesn't help much as no one else but me uses it, but what are you gonna do
- I was bored and this seemed like a fun kata

### License

WTFPL
