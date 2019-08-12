import React, { useEffect } from "react";
import { StyledMap } from "./styled";
import { loadModules } from "esri-loader";

const BaseMap = ({ info, onSubmit, onAddedPoint }) => {
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
          center: [30, 50],
          zoom: 11
        });
        const point = {
          type: "point",
          longitude: 30,
          latitude: 50
        };

        const simpleMarkerSymbol = {
          type: "simple-marker",
          color: [226, 119, 40], // orange
          outline: {
            color: [255, 255, 255], // white
            width: 1
          }
        };
        const attributes = {
          Address: info.address || "Av.Libertador 3578",
          Description: info.name || "Mi Casa",
          CoordinateX: info.coordinateX || "300",
          CoordinateY: info.coordinateY || "300",
          Phone: info.phone || "+5492645125864"
        };

        const popupTemplate = {
          title: "{Description}",
          content:
            "Dirección: {Address} <br> Teléfono: {Phone} <br>Coordenadas:  X: {CoordinateX} Y:{CoordinateY}"
        };
        const pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          attributes: attributes,
          popupTemplate: popupTemplate
        });

        view.graphics.add(pointGraphic);
      }
    );
  }, [onSubmit]);

  return <StyledMap id="viewDiv" />;
};

export default BaseMap;
