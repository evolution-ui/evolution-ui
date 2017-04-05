export default (articles) => {
  const articleToHighlight = ((articles) ? Array.from(articles) : false)
      .reverse()
      .find((article) => article.getBoundingClientRect().top + window.pageYOffset < window.pageYOffset + (window.innerHeight / 2))
    || articles[0];

  return articleToHighlight && articleToHighlight.getAttribute('id') || null;
}
