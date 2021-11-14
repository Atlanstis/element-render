### radio-group

```json
{
  type: 'radio-group',
  vModel: true,
  children: [
    {
      type: 'radio',
      text: '222',
      props: {
        label: 2
      }
    },
    {
      type: 'radio',
      text: '333',
      props: {
        label: 3
      }
    }
  ],
  on: {
    change: (val) => {
      console.log(`change: ${val}`)
    }
  }
}
```

### input

```json
// slot
{
  type: 'input',
  vModel: true,
  children: [
    {
      tag: 'template',
      slot: 'prepend',
      text: 'Http://'
    }
  ],
  on: {
    change: (val) => {
      console.log(`change: ${val}`)
    }
  }
}
```

