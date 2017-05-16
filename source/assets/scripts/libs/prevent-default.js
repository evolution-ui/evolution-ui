/**
 * Created by Aashish on 5/14/2017.
 */
export default () => {
  [].forEach.call(document.querySelectorAll('a[href="#"]'), anchor => {
    anchor.addEventListener('click', event => event.preventDefault());
  });
}
