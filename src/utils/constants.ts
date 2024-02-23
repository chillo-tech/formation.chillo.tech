const PHONE_PATTERN: any = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/;
//const EMAIL_PATTERN: any = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})$/;
const EMAIL_PATTERN: any = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,20})+$/;
const STRING_WITH_NUMBERS_REGEXP: any = /^\D*(\d\D*){10,}$/;
const PHONE_ERROR_MESSAGE: string = 'Votre numéro de téléphone est invalide';
const EMAIL_ERROR_MESSAGE: string = 'Votre mail est invalide';
const REQUIRED_ERROR_MESSAGE: string = 'Ce champ est requis';
const ACCEPT_FORM_ERROR_MESSAGE: string = 'Veuillez accepter les termes de notre politique';
const EMPTY_SESSION: string = "Aucune session n'est programée à ce jour";
const INITIAL_STATE = { trainingsParams: { path: 'formations' } };
const UPDATE_SEARCH_TRAINING_PARAMS = 'UPDATE_SEARCH_TRAINING_PARAMS';
const UPDATE_LAST_TRAINING = 'UPDATE_LAST_TRAINING';
const DISPLAY_INSCRIPTION_BUTTON = 'DISPLAY_INSCRIPTION_BUTTON';
const UPDATE_COMPANY = 'UPDATE_COMPANY';
const COMPANY_PROFILE_OPTIONS: any = [
  {
    value: 'formation de salariés',
    label: 'La formation de vos salariés',
  },
  {
    value: 'financement des formations de salariés',
    label: "Le Financement d'une Formation pour vos salariés",
  },
  {
    value: 'un partenariat',
    label: 'Une partenariat',
  },
  {
    value: 'autre',
    label: 'Autre',
  },
];
const USER_PROFILE: any = [
  {
    value: 'particulier',
    label: 'Particulier',
  },
  {
    value: 'entreprise',
    label: 'Entreprise',
  },
];
const CONTACT_CHANNEL: any = [
  {
    value: 'EMAIL',
    label: 'Par mail',
  },
  {
    value: 'PHONE',
    label: 'Par téléphone',
  },
];

const contacts = {
  title: 'Contacts',
  location: '36 avenue Pierre Brosolette - 92240 MALAKOFF',
  phone: '01 53 90 15 20',
  email: '',
  siret: 'Siret : 45303523000094',
};
const USER_PROFILE_OPTIONS: any = [
  {
    value: 'formations',
    label: 'Nos formations',
  },
  {
    value: 'financement des formations',
    label: "Le financement d'une Formation",
  },
  {
    value: 'une candidature',
    label: 'Une candidature',
  },
  {
    value: 'autre',
    label: 'Autre',
  },
];

const top_formations = {
  title: 'Nos meilleures formations',
};

const contact = {
  link: '/contact',
  title: 'Esic - Contact',
  subtitle: '',
  header: {
    title: 'Envoyez nous un message',
    subtitle: 'Nous reviendrons vers vous assez vite',
  },
  infos: {
    title: 'Nos coordonnées',
    description:
      "Toutes nos formations sont créées par des professionnels, les meilleurs dans leurs domaines afin de renforcer les compétences recherchées sur le marché du travail et tournées vers l'avenir. Suivre une formation c'est bien mais obtenir une certification en reconnaissance de ses capacités c'est mieux.",
  },
  form: {
    title: 'Envoyez nous votre message',
    first_name: {
      label: 'Prénom',
    },
    last_name: {
      label: 'Nom',
    },
    email: {
      label: 'Email',
    },
    phone: {
      label: 'Téléphone',
    },
    subject: {
      label: 'Subject',
    },
    message: {
      label: 'Message',
    },
    submit: {
      label: 'Envoyer',
    },
  },
};
const hero = {
  title: ['ESIC', 'Votre centre de formation'],
  subtitle:
    "Ensemble vers l'excellence dans vos compétences en informatique, gestion, design, langues et bureautique. Plus de 400 formations certifiées en formation professionnelle, en alternance et en apprentissage.",
  small: 'Start new carreer right by following of our path',
  form: {
    input: {
      label: '',
      placeholder: 'Rechercher une formation, e.g: Introduction à python',
    },
    submit: {
      label: 'Rechercher',
    },
    result: {
      cta: {
        label: 'Discover',
      },
    },
  },
};
const TRAINING_KEYS = [
  {
    key: 'objectifs',
    label: 'Objectifs de la formation'
  },
  {
    key: 'formateur',
    label: 'Equipe pédagogique'
  },
  {
    key: 'prerequis',
    label: 'Pré requis pour cette formation'
  },
  {
    key: 'programme',
    label: 'Programme de la formation',
    classes: 'programme'
  },
    /*
  {
    key: 'ressources',
    label: 'Ressources pour cette formation'
  },*/
  {
    key: 'certifications',
    label: 'Certifications pour cette formation'
  },
  {
    key: 'public',
    label: 'Votre profil pour cette formation'
  },
  {
    key: 'delai',
    label: "Modalités et délais d'accès"
  },
  {
    key: 'ressources',
    label: "Ressources pédagogiques"
  },
  {
    key: 'evaluations',
    label: "Moyens d'évaluation"
  },
  {
    key: 'accessibilite',
    label: "Pour les personnes à mobilité reduite"
  },
    /*
  {
    key: 'modalites',
    label: "Modalités d'accès à cette formation"
  },

  {
    key: 'methodes',
    label: "Nos méthodes d'enseignement"
  }

     */
];

const CERTICATION_KEYS = [
  {
    key: 'consignes',
    label: 'Consignes pour la certification'
  },
  {
    key: 'competences',
    label: 'Compétences acquises au terme de la certification'
  },
  {
    key: 'debouches',
    label: 'Débouchées de cette certification'
  }
];

const votreDemandeConcerne = [
  {
    value: 'nos-formations',
    label: 'Nos formations',
  },
  {
    value: 'financement-de-nos-formations',
    label: 'Le financement de nos formations',
  },
  {
    value: 'autres',
    label: 'Autres',
  },
];

const regionsEntreprise = [
  {
    value: 'bretagne',
    label: 'Bretagne',
  },
  {
    value: 'corse',
    label: 'Corse',
  },
  {
    value: 'ile-france',
    label: 'Ile-de-France',
  },
  {
    value: 'autres',
    label: 'Autres',
  },
];

const DEMANDE_CANDIDAT = {
  value: 'votre-candidature',
  label: 'Votre candidature',
}

const PREFERED_LOCATION = {
  DISTANCE: "online",
  PRESENTIEL: "presentiel"
}

const LIEN_POLITIQUE_SECURITE = "/mentions-legales-31"

const LOCATION_MAPPING: any= {
  ONLINE: 'En ligne',
  ONSITE: 'Dans nous locaux',
  INTRA: 'Dans vos locaux',
}
export {
  hero,
  contact,
  contacts,
  LOCATION_MAPPING,
  LIEN_POLITIQUE_SECURITE,
  PREFERED_LOCATION,
  top_formations,
  USER_PROFILE_OPTIONS,
  COMPANY_PROFILE_OPTIONS,
  CONTACT_CHANNEL,
  INITIAL_STATE,
  UPDATE_COMPANY,
  UPDATE_LAST_TRAINING,
  DISPLAY_INSCRIPTION_BUTTON,
  UPDATE_SEARCH_TRAINING_PARAMS,
  ACCEPT_FORM_ERROR_MESSAGE,
  EMPTY_SESSION,
  PHONE_PATTERN,
  EMAIL_PATTERN,
  STRING_WITH_NUMBERS_REGEXP,
  PHONE_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  USER_PROFILE,
  TRAINING_KEYS,
  DEMANDE_CANDIDAT,
  CERTICATION_KEYS,
  votreDemandeConcerne,
  regionsEntreprise,
};
