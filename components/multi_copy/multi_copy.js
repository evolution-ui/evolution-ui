(function() {
  var clipboard = document.createElement('textarea');
  clipboard.id = 'clipboard';
  clipboard.style.position = 'absolute';
  clipboard.style.top = '0px';
  clipboard.style.left = '9999px';

  document.querySelector('body').appendChild(clipboard);

  document.querySelector('body').addEventListener('click', function() {
    if (window.getSelection().toString() !== "") {
      clipboard.value += window.getSelection().toString() + '\n\n';
      clipboard.select();
      document.execCommand('copy');
    }
  });
})()
