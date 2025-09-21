// BigBlueButton open source conferencing system - http://www.bigbluebutton.org/.
//
// Copyright (c) 2022 BigBlueButton Inc. and by respective authors (see below).
//
// This program is free software; you can redistribute it and/or modify it under the
// terms of the GNU Lesser General Public License as published by the Free Software
// Foundation; either version 3.0 of the License, or (at your option) any later
// version.
//
// Greenlight is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License along
// with Greenlight; if not, see <http://www.gnu.org/licenses/>.

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Title({ children: title }) {
  let displayTitle = title || "Gam Medical";
  
  // Replace any occurrence of 'BigBlueButton' with 'Gam Medical'
  if (typeof displayTitle === 'string') {
    displayTitle = displayTitle.replace(/BigBlueButton/gi, 'Gam Medical');
  } else {
    // If title is not a string, use the default
    displayTitle = "Gam Medical";
  }
  
  return (
    <Helmet>
      <title>{displayTitle}</title>
      <meta property="og:title" content={displayTitle} />
    </Helmet>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

