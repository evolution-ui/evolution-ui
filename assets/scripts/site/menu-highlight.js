export default (articles) => {
  const articleToHighlight = Array.from(articles)
      .reverse()
      .find((article) => article.getBoundingClientRect().top + window.pageYOffset < window.pageYOffset + (window.innerHeight / 2))
    || articles[0];

  return articleToHighlight.getAttribute('id');
}
