import React from 'react'

import hasBackground, { ItemConfig } from './item-config'

function renderInners(props: ItemConfig) {
  if (props.depth === 0) {
    return props.bit
  }

  return (
    <>
      <Item {...props} depth={props.depth - 1} girth={props.girth - 3} />
    </>
  )
}

export default function Item(props: ItemConfig) {
  const isEven = Boolean(props.depth & 0x1)
  let backgroundColor = '#222'
  if (isEven === hasBackground(props)) {
    backgroundColor = 'darkgrey'
  }

  const styles = {
    width: `${props.girth}px`,
    height: '69px',
    border: '1px solid #DDD',
    backgroundColor,
  }

  return <div style={styles}>{renderInners(props)}</div>
}
