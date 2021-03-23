import "leaflet/dist/leaflet.css";
import $l from "leaflet";

import "esri-leaflet-renderers";

import { basemapLayer, dynamicMapLayer, featureLayer } from "esri-leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import { Option } from "element-ui";

let DefaultIcon = $l.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
$l.Marker.prototype.options.icon = DefaultIcon;

let ActiveMaker = null;
let $Map = null;

const init = (divId, opts) => {
  let map = $l.map(divId, opts);
  $Map = map;
  return map;
};

const addEsriBasemap = async type => {
  return await basemapLayer(type).addTo($Map);
};

const addEsriDynanmicLayer = async (opts, popUpInit) => {
  return await dynamicMapLayer(opts)
    .bindPopup((err, featureCollection) => {
      return popUpInit(err, featureCollection);
    })
    .addTo($Map);
};

const addEsriFeatuerLayer = async (opts, popUpInit) => {
  return await featureLayer(opts)
    .bindPopup(popUpInit)
    .addTo($Map);
};

const addMakerByCoordinates = async (coordinate, iconUrl, iconSize) => {
  let icon = $l.icon({ iconUrl: iconUrl, iconSize: iconSize });
  return await $l
    .marker($l.latLng(coordinate[1], coordinate[0]), { icon })
    .addTo($Map);
};

const addMaker = async (map, coordinate, options) => {
  let icon = options ? $l.icon(options) : "";
  let maker = icon
    ? await $l
        .marker($l.latLng(coordinate[0], coordinate[1]), { icon })
        .addTo(map)
    : await $l.marker($l.latLng(coordinate[0], coordinate[1])).addTo(map);
  return maker;
};

const setActiveMaker = async opts => {
  if (ActiveMaker) ActiveMaker.remove();
  switch (opts.type) {
    case "coordinate":
      ActiveMaker = await addMakerByCoordinates(
        opts.coordinates,
        opts.iconUrl,
        opts.iconSize
      );
      break;
    default:
  }
};

const clearActiveMaker = () => {
  if (ActiveMaker) ActiveMaker.remove();
  $Map.closePopup();
};

export default {
  init,
  setActiveMaker,
  addEsriBasemap,
  addEsriDynanmicLayer,
  addEsriFeatuerLayer,
  addMakerByCoordinates,
  clearActiveMaker,
  addMaker
};
