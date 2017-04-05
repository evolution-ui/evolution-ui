export const isOutOfLayers = (element) => element.classList.contains('c-layers')
|| !Array.from(element.classList).some(elementClass => elementClass.match(/^c-layer/))

export const isNextSibling = (element, sibling) => {
  let nextElement = element.nextElementSibling
  while (nextElement !== null && nextElement !== sibling) {
    nextElement = nextElement.nextElementSibling
  }
  return nextElement !== null
}

export const isPreviousSibling = (element, sibling) => {
  let previousElement = element.previousElementSibling
  while (previousElement !== null && previousElement !== sibling) {
    previousElement = previousElement.previousElementSibling
  }
  return previousElement !== null
}

export const calculateLayerHeight = layer => {
  const contentHeight = Array.from(layer.children)
    .reduce((total, curr) => curr.offsetHeight + total, 2)
  return contentHeight < 480 ? 480 : contentHeight
}

export const calculateContainerHeight = layer => Array.from(layer.parentNode.querySelectorAll('.c-layer'))
  .reduce((total, curr) => curr === layer
      ? calculateLayerHeight(curr) + total
      : curr.querySelector('.c-layer__header').offsetHeight + 1 + total
    , 0)

export const slide = (layer, endHeight, duration, down = false) => new Promise((resolve, reject) => {
  let start = null
  const initHeight = layer.offsetHeight

  function step (timestamp) {
    if (!start) start = timestamp
    const progress = timestamp - start
    layer.style.height = down
      ? easingDown(progress, initHeight, endHeight - initHeight, duration) + 'px'
      : easing(progress, initHeight, endHeight - initHeight, duration) + 'px'
    if (progress < duration) {
      window.requestAnimationFrame(step)
    } else {
      endAnimation()
    }
  }

  // easeOutCubic - George McGinley Smith - https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
  function easing (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  }

  function easingDown (t, b, c, d) {
    return c * (t /= d) * t * t + b
  }

  function endAnimation () {
    layer.style.height = endHeight + 'px'
    resolve(layer)
  }

  window.requestAnimationFrame(step)
})