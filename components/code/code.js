(function () {

  'use strict';

  var codeElement = document.querySelectorAll('.su_code-example'),
      codeElementParent = codeElement.parentElement,
      stringsToReplace = {
        '<': '&lt;',
        '\">': '&quot;&gt;',
        '=\"': '=&quot;',
        '>': '&gt;'
      };


  for (var i = codeElement.length - 1; i >= 0; i--) {

    var code,
        codeContainer = document.createElement('div'),
        preCodeElement = document.createElement('pre');

    codeContainer.setAttribute('class', 'su_code-container');
    preCodeElement.setAttribute('class', 'su_code');

    code = codeElement[i].innerHTML.replace(/<|\">|=\"|>/gi, function(match) {
      return stringsToReplace[match];
    });

    preCodeElement.innerHTML = code;
    codeContainer.appendChild(preCodeElement);

    codeElement[i].parentElement.appendChild(codeContainer);

  }

}());