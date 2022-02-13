import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div className="container" display="flex">
        <GoogleMaps
          apiKey={"AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As"}
          style={{ height: "220px", width: "600px" }}
          zoom={18}
          center={{
            lat: 4.5147589,
            lng: -75.7100823
          }}
          markers={[
            { lat: 4.5147589, lng: -75.7100823 ,}
            // { lat: 40.412072, lng: -3.676463 },
            // { lat: 40.451824, lng: -3.690759 }
          ]}
        />
      </div>
    );
  }
}