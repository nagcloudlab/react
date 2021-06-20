import React, { Component } from "react";
import Box from "./Box";
import Veg from "./Veg";
import NonVeg from "./NonVeg";

class BoxApp extends Component {
  render() {
    return (
      <div>
        <Box
          render={(size) => {
            return (
              <>
                <li className="list-group-item">
                  <Veg />
                </li>
                <li className="list-group-item">
                  <Veg />
                </li>
              </>
            );
          }}
        ></Box>

        <Box>
          <NonVeg />
          <NonVeg />
        </Box>
        <Box>
          <Veg />
          <NonVeg />
        </Box>
      </div>
    );
  }
}

export default BoxApp;
