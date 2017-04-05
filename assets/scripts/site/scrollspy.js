export default (spy) => {
  if (spy) {
    spy.style.width = window.pageYOffset * 100 / (document.body.offsetHeight - window.innerHeight) + 'vw'
  }
}
