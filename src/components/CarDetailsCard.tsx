import React from "react";

const CarDetailsCard = (props) => {
  const color = props.color;
  const size = props.size;
  const tagline = props.tagline;
  const carName = props.carName;
  const model = props.model;
  const carPhoto = props.carPhoto;
  const engineCC = props.engineCC;
  const engineCylinder = props.engineCylinder;
  const safetyRating = props.safetyRating
  const textColor = props.textColor;
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={carPhoto}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{carName}</div>
          <p className={"text-base "+textColor}>
          The Alto originated as a commercial vehicle derivative of the Fronte, 
          but over time the Alto nameplate gained in popularity and by 1988
           it replaced the Fronte name completely.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {color}
          </span>
          
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr2">
            {tagline}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4">
            {model}
          </span>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
            {size}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2  ">
            {engineCC}
          </span>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mr-2">
            {engineCylinder}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 mr-2">
            {safetyRating}
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default CarDetailsCard;