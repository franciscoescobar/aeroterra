import React, { useEffect } from "react";
import { StyledMap } from "./styled";
import { loadModules } from "esri-loader";
import { useSelector, useDispatch } from "react-redux";
import { onMapClick, clearForm } from "../../actions";
const BaseMap = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state);
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

        view.on("click", event => {
          const x = view.toMap({ x: event.x, y: event.y }).latitude.toFixed(3);
          const y = view.toMap({ x: event.x, y: event.y }).longitude.toFixed(3);
          dispatch(onMapClick(x, y));
        });
        info.dots.map(dot => {
          console.log(dot);
          return view.graphics.add(new Graphic(dot));
        });
      }
    );
    if (info.submit) dispatch(clearForm());
  }, [info.dots]);

  return <StyledMap id="viewDiv" />;
};

export default BaseMap;
