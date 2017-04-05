export default function() {
	(function() {
		var elems = document.querySelectorAll('ul.evo_c-svg-dot--default li'),
		makeActive;

		makeActive = function() {
			for (var i = 0; i < elems.length; i++)
				elems[i].classList.remove('is-active');

			this.classList.add('is-active');
		};

		for (var i = 0; i < elems.length; i++)
			elems[i].addEventListener('mousedown', makeActive);
	})();
}
