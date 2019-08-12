import React, { useEffect } from "react";
import { StyledMap } from "./styled";
import { loadModules } from "esri-loader";

const BaseMap = () => {
  const url = "https://js.arcgis.com/4.12/";

  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView", "esri/Graphic"], url).then(
      ([Map, MapView, Graphic]) => {
        const map = new Map({
          basemap: "topo-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-118.27928, 34.13558],
          zoom: 11
        });
        const point = {
          type: "point",
          longitude: -118.29507,
          latitude: 34.13501
        };

        const simpleMarkerSymbol = {
          type: "simple-marker",
          color: [226, 119, 40], // orange
          outline: {
            color: [255, 255, 255], // white
            width: 1
          }
        };

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol
        });

        view.graphics.add(pointGraphic);
      }
    );
  }, []);

  return <StyledMap id="viewDiv" />;
};

export default BaseMap;
