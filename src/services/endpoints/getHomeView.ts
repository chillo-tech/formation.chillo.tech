import axios from "axios";
import { axiosInstance } from "..";

const getHomeView = async () => {
  const responseNosValeur = await axiosInstance.get(
    "/api/backoffice/pageArticle/1/?fields=*,sections.section_id.*,images.image_id.*,sections.section_id.images.image_id.*"
  );

  const articleNosValeurs = responseNosValeur.data.data;
  const statisticsResponse = await axios.all([
    axiosInstance.get("/api/backoffice/statistics/1"),
    axiosInstance.get("/api/backoffice/statistics/2"),
    axiosInstance.get("/api/backoffice/statistics/3"),
  ]);
  return {
    articles: {
      articleNosValeurs,
    },
    statistics: {
      students: statisticsResponse[0].data.data,
      fans: statisticsResponse[1].data.data,
      years: statisticsResponse[2].data.data,
    },
  };
};

export { getHomeView };
