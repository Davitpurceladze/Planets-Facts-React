import { useState } from "react";
import Data from "../db/data.json";

export function getPlanetInformation(planetName: string | undefined) {
  //   const [planetData, setPlanetData] = useState();
  const [data] = Data.filter((planet) => {
    return planet.name == planetName;
  });

  return data;
  //   setPlanetData(data);
  //   return planetData;
}
