/*
/!* From layer-utils.js *!/
export const isOutOfLayers = (element) => element.classList.contains('evo_c-3dlayers')
|| !Array.from(element.classList).some(elementClass => elementClass.match(/^evo_c-3dlayer/))

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

export const calculateContainerHeight = layer => Array.from(layer.parentNode.querySelectorAll('.evo_c-3dlayer'))
  .reduce((total, curr) => curr === layer
      ? calculateLayerHeight(curr) + total
      : curr.querySelector('.evo_c-3dlayer__header').offsetHeight + total
    , 2)

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

/!* From layer-animations.js *!/
import { slide, calculateLayerHeight, calculateContainerHeight } from './layer-utils'

const layers = Array.from(document.querySelectorAll('.evo_c-3dlayer'))
const layerContainers = Array.from(document.querySelectorAll('.evo_c-3dlayers'))

const staggeredBackwards = (backwardsLayers, previousLayer) => {

  previousLayer = previousLayer || backwardsLayers[backwardsLayers.length - 1].previousElementSibling
  return previousLayer !== null
    ? new Promise((resolve) => {
      backwardsLayers.forEach((bLayer, index) => {
        index === 0
          ? bLayer.parentNode.insertBefore(bLayer, previousLayer)
          : bLayer.parentNode.insertBefore(bLayer, backwardsLayers[index - 1])
      })
      setTimeout(() => {
        resolve(staggeredBackwards(backwardsLayers, backwardsLayers[backwardsLayers.length - 1].previousElementSibling))
      }, 200)
    })
    : Promise.resolve(backwardsLayers)
}

const animateFrontLayers = layer => slide(layer.parentNode.lastElementChild, 480, 300)
  .then(oldFrontLayer => new Promise((resolve) => {
    oldFrontLayer.classList.add('evo_c-3dlayer--visited')
    oldFrontLayer.classList.remove('evo_c-3dlayer--selected')
    const backwardsLayers = [oldFrontLayer]
    let previousLayer = oldFrontLayer.previousElementSibling
    while (previousLayer !== layer) {
      backwardsLayers.push(previousLayer)
      previousLayer = previousLayer.previousElementSibling
    }
    setTimeout(() => {
      resolve(backwardsLayers)
    }, 150)
  }))
  .then(backwardsLayers => Promise.all(backwardsLayers.map((blayer, index) => {
    return new Promise(resolve => {
      setTimeout(() => {
        blayer.classList.add('evo_c-3dlayer--hide')
        resolve(blayer)
      }, 150 * index)
    })
  })))
  .then(data => new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 150)
  }))
  .then(backwardsLayers => new Promise((resolve) => {
    staggeredBackwards(backwardsLayers, layer)
      .then(backwardsLayers => {
        resolve(layer)
        return backwardsLayers
      })
      .then(backwardsLayers => backwardsLayers.forEach((blayer, index) => {
        setTimeout(() => {
          blayer.classList.remove('evo_c-3dlayer--hide')
        }, 200 * (index + 1))
      }))
  }))

const animateNewFrontLayer = layer => {
  const frontHeight = calculateLayerHeight(layer)
  const containerHeight = calculateContainerHeight(layer)
  layer.classList.add('evo_c-3dlayer--selected')
  return Promise.all([slide(layer, frontHeight, 500, true), slide(layer.parentNode, containerHeight, 500, true)])
}

const resizeFrontLayer = event => {
  const target = event.target
  if (target.classList.contains('evo_c-3dlayer--selected')) {
    const frontHeight = calculateLayerHeight(target)
    const containerHeight = calculateContainerHeight(target)
    return Promise.all([slide(target, frontHeight, 500, true), slide(target.parentNode, containerHeight, 500, true)])
  }
}

const moveForward = layer => {
  layers.forEach(label => label.removeEventListener('click', moveForwardListener))

  animateFrontLayers(layer)
    .then(animateNewFrontLayer)
    .then(() => {
      layers.forEach(label => label.addEventListener('click', moveForwardListener))
    })
}

const moveForwardListener = event => {
  const layer = event.currentTarget
  if (!layer.classList.contains('evo_c-3dlayer--selected')) {
    moveForward(layer)
  }
}

export default () => {
  layers.forEach(layer => {
    layer.addEventListener('click', moveForwardListener)
    layer.addEventListener('resizelayer', resizeFrontLayer)
  })
  layerContainers.forEach(layerContainer => {
    const selected = layerContainer.querySelector('.evo_c-3dlayer--selected')
    selected.style.height = calculateLayerHeight(selected) + 'px'
    layerContainer.style.height = calculateContainerHeight(selected) + 'px'
  })
}

/!* From layer-drag-and-drop.js *!/
import * as utils from './layer-utils'

const layers = Array.from(document.querySelectorAll('.evo_c-3dlayer'))
const layerDragIcons = Array.from(document.querySelectorAll('.evo_c-3dlayer__icon-drag'))

let draggedLayer = undefined

const safeTransition = (layer) => {
  layer.removeEventListener('mouseleave', mouseLeave)
  layer.removeEventListener('mouseenter', mouseEnter)
  setTimeout(() => {
    layer.addEventListener('mouseleave', mouseLeave)
    layer.addEventListener('mouseenter', mouseEnter)
  }, 100)
}

const mouseLeave = event => {
  if (draggedLayer && event.buttons === 1) {
    const leavingLayer = event.target
    const enteringElement = event.relatedTarget

    if (utils.isOutOfLayers(enteringElement)) {
      leavingLayer.parentNode.insertBefore(draggedLayer, draggedLayer.parentNode.firstElementChild)
      draggedLayer.classList.add('evo_c-3dlayer--drop')
    }
  }
}

const mouseEnter = event => {
  if (draggedLayer && event.buttons === 1) {
    const target = event.target
    if (target !== draggedLayer && utils.isNextSibling(draggedLayer, target)) {
      safeTransition(target)
      target.parentNode.insertBefore(draggedLayer, target.nextElementSibling)
      draggedLayer.classList.add('evo_c-3dlayer--drop')
    }
    if (target !== draggedLayer && utils.isPreviousSibling(draggedLayer.previousElementSibling, target)) {
      safeTransition(target)
      target.parentNode.insertBefore(draggedLayer, target.nextElementSibling)
      draggedLayer.classList.add('evo_c-3dlayer--drop')
    }
  }
}

const dropLayer = () => {
  if (draggedLayer) {
    const container = draggedLayer.parentNode
    const newFrontLayer = container.lastElementChild
    const frontHeight = utils.calculateLayerHeight(newFrontLayer)
    const containerHeight = utils.calculateContainerHeight(newFrontLayer)

    document.body.classList.remove('evo_h-3dlayer--body-grabbing')
    draggedLayer.classList.remove('evo_c-3dlayer--dragging')
    newFrontLayer.classList.add('evo_c-3dlayer--selected')
    utils.slide(newFrontLayer, frontHeight, 500, true)
    utils.slide(container, containerHeight, 500, true)

    draggedLayer.draggable = false
    draggedLayer.classList.remove('evo_c-3dlayer--drop')
    draggedLayer = undefined
  }
}

const pickLabel = event => {
  event.preventDefault()
  draggedLayer = event.target.parentNode.parentNode
  draggedLayer.draggable = true
  draggedLayer.classList.add('evo_c-3dlayer--dragging')
}

const pickLayer = event => {
  if (event.target.nodeType === 1 && event.target.classList.contains('evo_c-3dlayer__icon-drag')) {
    document.body.classList.add('evo_h-3dlayer--body-grabbing')
    event.preventDefault()
    event.stopPropagation()
    utils.slide(event.currentTarget.parentNode.lastElementChild, 480, 300)
      .then(layer => {
        layer.classList.remove('evo_c-3dlayer--selected')
        layer.classList.add('evo_c-3dlayer--visited')
      })
  }
}

export default () => {
  layerDragIcons.forEach(icon => icon.addEventListener('dragstart', pickLabel))
  layers.forEach(layer => {
    layer.addEventListener('dragstart', pickLayer)
    layer.addEventListener('mouseleave', mouseLeave)
    layer.addEventListener('mouseenter', mouseEnter)
  })

  window.addEventListener('mouseup', dropLayer)
}

*/
