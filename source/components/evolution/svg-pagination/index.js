export default function() {
	(function() {
		var elems = document.querySelectorAll('ul.evo_c-svg-dot--default li'),
		len=elems && elems.length || 0,
		makeActive;

		makeActive = function() {
			for (var i = 0; i < len; i++)
				elems[i].classList.remove('is-active');

			this.classList.add('is-active');
		};

		for (var i = 0; i < len; i++)
			elems[i].addEventListener('mousedown', makeActive);
	})();

}
