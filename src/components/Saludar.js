import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props){
    const { firstname, lastname } = props

    return <Text>Hola {firstname} {lastname}</Text>
}

Saludar.defaultProps = {
    firstname: "Lihue",
    lastname: "Maidana"

}

Saludar.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
}