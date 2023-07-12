import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit ? <div>
          Welcome to CryptoSpecs, please select your favorite coins to proceed.{' '}
        </div> : null
      }
    </AppContext.Consumer>
  );
};
