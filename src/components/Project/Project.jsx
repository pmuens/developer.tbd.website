import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

const Project = ({ icon, title, description, textButton, url }) => {
  return (
    <div className="flex flex-col tablet:h-full tablet:pt-6 tablet:pl-[1.25rem] tablet:pr-6 pb-12 tablet:border-primary-yellow tablet:border-2 tablet:rounded">
      <div className="pb-4 tablet:pb-6">
        <img src={icon} alt="" className="my-0" />
      </div>
      <div className="pb-6 tablet:pb-[0.875rem]">
        <h2 className="h2-caps my-0 text-primary-yellow">{title}</h2>
      </div>
      <div className="pb-9 tablet:pb-[4.1875rem] tablet:grow">
        <p className="copy text-primary-yellow my-0">{description}</p>
      </div>
      <div>
        <Button label={textButton} url={url} />
      </div>
    </div>
  );
};

Project.propTypes = {
  /**
   * Button contents
   */
  textButton: PropTypes.string.isRequired,
  /**
   * Icon shown on top
   */
  icon: PropTypes.string.isRequired,
  /**
   * Title of the component
   */
  title: PropTypes.string.isRequired,
  /**
   * Text of the component
   */
  description: PropTypes.string.isRequired,
  /**
   * Url for the button to go to
   */
  url: PropTypes.string.isRequired,
};
export default Project;
