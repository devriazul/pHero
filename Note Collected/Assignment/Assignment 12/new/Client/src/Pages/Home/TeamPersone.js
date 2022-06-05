import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const TeamPersone = ({ singleTeamPersonInfo }) => {
  const { id, name, deg, photo, facebook, twitter, linkedin, instagram } =
    singleTeamPersonInfo;
  return (
    <div>
      <div className="card w-72 glass">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body text-center py-10">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="py-5">{deg}</p>
          <div className="card-actions justify-evenly w-3/4 mx-auto">
            <a href={facebook} target="_blank">
              <FaFacebookSquare />
            </a>
            <a href={twitter} target="_blank">
              <FaTwitterSquare />
            </a>
            <a href={linkedin} target="_blank">
              <FaLinkedin />
            </a>
            <a href={instagram} target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPersone;
