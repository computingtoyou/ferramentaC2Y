import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "background-start": {
        "overflow": "hidden",
        "background": "url('../img/background.jpeg') no-repeat fixed",
        "backgroundSize": "cover",
        "backgroundPositionY": "center"
    },
    "transparent-dark": {
        "background": "rgba(0,0,0,0.75)"
    },
    "full-screen": {
        "height": 100 * vh
    },
    "wrapper": {
        "height": "100%",
        "minHeight": "100%",
        "display": "flex",
        "WebkitAlignItems": "center",
        "alignItems": "center",
        "WebkitJustifyContent": "center",
        "justifyContent": "center"
    }
});