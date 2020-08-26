import { listCreator } from "../ListCreator.js";
import { dataCopier } from "../DataCopier.js";
import { testCities } from "./CityData.js";
import { testLandmarks } from "./LandmarkData.js"
import { testLeaders } from "./LeaderData.js";



const cityDataCopy = dataCopier(testCities);
listCreator(cityDataCopy, "cities");

const landmarkDataCopy = dataCopier(testLandmarks);
listCreator(landmarkDataCopy, "landmarks");

const leaderDataCopy = dataCopier(testLeaders);
listCreator(leaderDataCopy, "leaders");
