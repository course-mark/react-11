import React from "react";

const UserCard = (props) => {
  const user = props.user;

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-gray-600 mb-4">
            Email:{" "}
            <a
              href="mailto:Rey.Padberg@karina.biz"
              className="text-blue-500 hover:underline"
            >
              Rey.Padberg@karina.biz
            </a>
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Address</h3>
            <p className="text-gray-600">
              {`Street: Kattie Turnpike`}
              <br />
              {`Suite: Suite 198`}
              <br />
              {`City: Lebsackbury`}
              <br />
              {`Zipcode: 31428-2261`}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">Contact</h3>
            <p className="text-gray-600">
              Phone:{" "}
              <a
                href="tel:0246483804"
                className="text-blue-500 hover:underline"
              >
                024-648-3804
              </a>
            </p>
            <p className="text-gray-600">
              Website:{" "}
              <a
                href="https://ambrose.net"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                ambrose.net
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">Company</h3>
            <p className="text-gray-600">
              <span className="font-medium">Name:</span> Hoeger LLC
              <br />
              <span className="font-medium">CatchPhrase:</span> Centralized
              empowering task-force
              <br />
              <span className="font-medium">BS:</span> Target end-to-end models
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
