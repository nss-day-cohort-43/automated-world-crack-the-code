import { listCreator } from "../ListCreator.js";
import { dataCopier } from "../DataCopier.js";
import { malianCities } from "./CityData.js";
import { malianLandmarks } from "./LandmarkData.js"
import { malianLeaders } from "./LeaderData.js";



const cityDataCopy = dataCopier(malianCities);
listCreator(cityDataCopy, "cities");

const landmarkDataCopy = dataCopier(malianLandmarks);
listCreator(landmarkDataCopy, "landmarks");

const leaderDataCopy = dataCopier(malianLeaders);
listCreator(leaderDataCopy, "leaders");
