import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration';


async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query([
    Prismic.Predicates.at('document.type', 'miniature'),
    Prismic.Predicates.at('document.type', 'army')
  ], { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  console.info({ response }, 'queries.js@fetchDocs');
  return [...new Set(allRoutes)];
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
**/
export const queryRepeatableDocuments = async () => {
  return await fetchDocs()
}

export const homePageQuery = async () => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(doc => doc.type === 'post').slice(0, 5)
}
