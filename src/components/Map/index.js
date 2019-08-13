import React, { useState } from "react";
import { StyledMap, Container, Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { onMapClick, deleteDot } from "../../actions";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const BaseMap = ({ google }) => {
  const dispatch = useDispatch();
  const info = useSelector(state => state);
  const [open, setOpen] = useState(false);
  const [activeDot, setActiveDot] = useState({});
  const handleMapClick = (mapProps, map, clickEvent) => {
    dispatch(onMapClick(clickEvent.latLng.lat(), clickEvent.latLng.lng()));
  };
  const handleMarkerClick = dot => {
    setOpen(true);
    setActiveDot(dot);
  };
  const deleteMarker = () => {
    dispatch(deleteDot(activeDot));
  };
  return (
    <StyledMap id="map">
      <Map
        google={google}
        zoom={14}
        initialCenter={{
          lat: 42,
          lng: -77
        }}
        onClick={handleMapClick}
      >
        {info.dots.map(dot => (
          <Marker
            key={dot.name}
            name={dot.name}
            position={{ lat: dot.x, lng: dot.y }}
            onClick={() => handleMarkerClick(dot)}
          />
        ))}
        {open ? (
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClick={() => setOpen(false)}
          >
            <Container>
              <Wrapper>
                <h1>{activeDot.name}</h1>
                <p>Dirección: {activeDot.address}</p>
                <p>Teléfono: {activeDot.phone}</p>
                <p>Latitud: {activeDot.x}</p>
                <p>Longitud: {activeDot.y}</p>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={deleteMarker}
                  style={{ marginTop: "10px" }}
                >
                  Eliminar Marcador
                </Button>
              </Wrapper>
            </Container>
          </Modal>
        ) : null}
        <InfoWindow>
          <div>
            <h1>Something</h1>
          </div>
        </InfoWindow>
      </Map>
    </StyledMap>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAxctAox1p5fNhBSufVyGxZuK20G5ZreM4"
})(BaseMap);
