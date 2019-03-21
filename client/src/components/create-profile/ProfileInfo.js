import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import UploadFileGroup from "../common/UploadFileGroup";

const ProfileInfo = ({
  errors,
  handle,
  location,
  bio,
  onChange,
  fileSelectedHandler
}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-2">
          <UploadFileGroup
            error={errors.file}
            icon="fas fa-file-upload fa-8x"
            type="file"
            name="file"
            onChange={fileSelectedHandler}
            info="Profile Image"
          />
        </div>
        <div className="col-md-6 mt-5">
          <TextFieldGroup
            id="handle"
            placeholder="* Username"
            name="handle"
            value={handle}
            onChange={onChange}
            error={errors.handle}
            info="Your username"
          />
          <TextFieldGroup
            id="location"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            error={errors.location}
            info="Your Location"
          />
        </div>
      </div>
      <TextAreaFieldGroup
        id="bio"
        placeholder="Short Bio"
        name="bio"
        value={bio}
        onChange={onChange}
        error={errors.bio}
        info="Your bio"
      />
    </>
  );
};

export default ProfileInfo;
