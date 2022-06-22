/* eslint-disable react/prop-types */
import React from 'react';
import { Video } from '../Video';
const HighlightsEmbed = ({ title, url }) => {
  return (
    <div>
      test
      <Video url={url} />
      <div className="mb-4">
        <h3 className="h3 font-medium text-primary-yellow">{title}</h3>
      </div>
    </div>
  );
};

export default HighlightsEmbed;
