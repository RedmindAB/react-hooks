# react-hooks

> React hooks for native and web

[![NPM](https://img.shields.io/npm/v/react-hooks.svg)](https://www.npmjs.com/package/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hooks
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'react-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [redmindab](https://github.com/redmindab)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
