import React from "react";
import InputGroup from "../common/InputGroup";

const SocialMedia = ({
  twitter,
  facebook,
  linkedin,
  youtube,
  instagram,
  onChange,
  errors
}) => {
  return (
    <section>
      <InputGroup
        id="twitter"
        placeholder="Twitter Profile URL"
        name="twitter"
        icon="fab fa-twitter"
        value={twitter}
        onChange={onChange}
        error={errors.twitter}
      />

      <InputGroup
        id="facebook"
        placeholder="Facebook Page URL"
        name="facebook"
        icon="fab fa-facebook"
        value={facebook}
        onChange={onChange}
        error={errors.facebook}
      />

      <InputGroup
        id="linkedin"
        placeholder="Linkedin Profile URL"
        name="linkedin"
        icon="fab fa-linkedin"
        value={linkedin}
        onChange={onChange}
        error={errors.linkedin}
      />

      <InputGroup
        id="youtube"
        placeholder="YouTube Channel URL"
        name="youtube"
        icon="fab fa-youtube"
        value={youtube}
        onChange={onChange}
        error={errors.youtube}
      />

      <InputGroup
        id="instagram"
        placeholder="Instagram Page URL"
        name="instagram"
        icon="fab fa-instagram"
        value={instagram}
        onChange={onChange}
        error={errors.instagram}
      />
    </section>
  );
};

export default SocialMedia;
