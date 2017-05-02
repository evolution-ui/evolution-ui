/**
 * Created by Aashish on 4/2/2017.
 */
export default function () {
  'use strict';

  var ikon = document.querySelector('.js-evo-c-ikon');
  if (ikon) {
    var ikonMembers = ikon.querySelectorAll('.js-evo-c-ikon-member');

    var rightmost = ikonMembers.length - 1;
    for (var i = rightmost; i >= 0; --i) {
      if (ikonMembers[i].getBoundingClientRect().right > ikonMembers[rightmost].getBoundingClientRect().right) {
        rightmost = i;
        break;
      }
    }

    [].forEach.call(ikonMembers, function (member) {
      member.addEventListener('click', function () {
        this.classList.add('evo_c-ikon__member--is-hovered');
      });

      var info = member.querySelector('.js-evo-c-ikon-member-info');
      info.querySelector('.js-evo-c-ikon-close-btn').addEventListener('click', function (event) {
        event.stopPropagation();
        member.classList.remove('evo_c-ikon__member--is-hovered');
      });

      if (ikonMembers.length > 2) {
        if (member.getBoundingClientRect().left === ikonMembers[0].getBoundingClientRect().left) {
          info.classList.add('evo_c-ikon__member-info--leftmost');
        } else if (member.getBoundingClientRect().right === ikonMembers[rightmost].getBoundingClientRect().right) {
          info.classList.add('evo_c-ikon__member-info--rightmost');
        }
      }
    });
  }
}
