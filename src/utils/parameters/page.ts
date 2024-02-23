import {FILE_PARAMS} from './fichiers';
import {IMAGE_PARAMS} from './images';
const pages = 'pages.pages_id.id,pages.pages_id.libelle,pages.pages_id.image,pages.pages_id.description,pages.pages_id.abstrait';
const base = 'id,libelle,souslibelle,ordre,image,description,abstrait,*';
const categories = 'categories.*';
const articles = 'articles.id,articles.libelle,articles.description';
const cpf = 'cpf.cpf_id.*';
const pagesSessions = 'sessions.*';
const certifications = `
  certifications.certifications_id.id,
  certifications.certifications_id.nom,
  certifications.certifications_id.Statut,
  certifications.certifications_id.CODE_RNCP,
  certifications.certifications_id.CODE_RS,
  certifications.certifications_id.alias,
  certifications.certifications_id.image.*
 `;
const PAGE_PARAMS = `
  ${base},
  ${pages},
  ${categories},
  ${pagesSessions},
  ${articles},
  ${certifications},
  ${cpf},
  ${IMAGE_PARAMS},
  ${FILE_PARAMS}
 `;
export {PAGE_PARAMS};
