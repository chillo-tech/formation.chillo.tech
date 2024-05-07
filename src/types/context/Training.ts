interface ITraining {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  slug: string;
  hours: number;
  type: string;
  rate: number;
  reviews: number;
  downloadableContent: boolean;
  handsOnExcercise: boolean;
  certificateOfComplete: boolean;
  lifetimeAcces: boolean;
  learnAtYourOwnPace: boolean;
  subTitle: string;
  price: IPrice;
  description: any;
  promotionVideo: IVideo;
  textColor?: string;
  image: IImage;
  onSale: boolean;
  status: string;
  isPreview: boolean;
  skills: {
    skills_id: ISkill;
  }[];
  chapters: {
    Chapter_id: IChapter;
  }[];
  levels: {
    Training_Levels_id: ILevel;
  }[];
  videos: {
    video_id: IVideo;
  }[];
  metadatas: any[];
  objectives: {
    objective_id: IObjective;
  }[];
  targets: {
    target_id: ITarget;
  }[];
  waitingList: any[];
  prerequisiteTrainings: any[];
  prerequisites: {
    prerequisite_id: IPrerequisite;
  }[];
}

export interface IVideo {
  user_updated: string;
  user_created: string;
  id: string;
  date_updated: string;
  date_created: string;
  link: string;
  title: string;
  description: string;
  formation_id: any;
  thumbnail: {
    image_id: IImage;
  }[];
  trainings: number[];
}

export interface IImage {
  user_updated: string;
  user_created: string;
  date_updated: string;
  date_created: string;
  backgroundColor: any;
  name: string;
  description: string;
  link: string;
  status: string;
  id: number;
  videos: number[];
}

interface IPrice {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  value: number;
  currency: string;
  description: string;
  trainings: number[];
}

interface IChapter {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  time: number;
  description: string;
  slug: string;
  status: any;
  trainings: number[];
  Lessons: ILesson[];
  skills: {
    skills_id: ISkill;
  }[];
  rate?: number;
  ratings?: number;
  objectives?: {
    objective_id: IObjective;
  }[];
}

interface ILesson {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  type?: string;
  url: any;
  time: number;
  Chapter_id: number;
  status: string;
  isFree: boolean;
  previewVideo: any;
  description: any;
  slug: string;
}

interface ILevel {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  description: string;
  trainings: number[];
}

interface ISkill {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  label: string;
}

interface IObjective {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  label: string;
  description: any;
  trainings: number[];
}

interface ITarget {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  label: string;
  description: any;
  trainings: number[];
}

interface IPrerequisite {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: any;
  date_updated: any;
  label: string;
  description: string;
  trainings: number[];
}

export type {
  IChapter,
  ILesson,
  ILevel,
  IObjective,
  IPrerequisite,
  ITarget,
  ITraining,
};
