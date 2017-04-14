const documentReady = (...callbacks) => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    callbacks.forEach(cb => cb())
  }
  else {
    callbacks.forEach(cb => document.addEventListener('DOMContentLoaded', cb))
  }
}

export default documentReady
