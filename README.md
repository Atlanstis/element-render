### checkbox-group

```js
{
  type: 'checkbox-group',
    vModel: true,
      children: [
        {
          type: 'checkbox-button',
          props: {
            label: 'a'
          },
          text: 'A'
        },
        {
          type: 'checkbox-button',
          props: {
            label: 'b'
          },
          text: 'B'
        }
      ],
        on: {
          change: (val) => {
            console.log(`change: ${val}`)
          }
        }
}
```

### checkbox

```js
{
  type: 'checkbox',
    vModel: true,
      text: '测试',
        props: {
          disabled: true
        },
          on: {
            change: (val) => {
              console.log(`change: ${val}`)
            }
          }
}
```

### radio-group

```js
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
// radio-button
{
  type: 'radio-group',
    vModel: true,
      children: [
        {
          type: 'radio-button',
          text: '222',
          props: {
            label: 2
          }
        },
        {
          type: 'radio-button',
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

```js
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
