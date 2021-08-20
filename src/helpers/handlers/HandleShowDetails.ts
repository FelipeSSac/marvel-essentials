export default function HandleShowDetails(ArticleKey: string) {
  const article = document.querySelector(`[data-ts=${ArticleKey}]`);

  if (!article) {
    return null;
  }

  if (article.classList.contains('article--show-details')) {
    article.classList.remove('article--show-details');

    return article;
  }

  article.classList.add('article--show-details');

  return article;
}
