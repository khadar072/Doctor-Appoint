import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "@/context/UserContext";
import { toast } from "react-toastify";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const { userData, setUserData, token, getUser } = useContext(UserContext);
  const [image, setImage] = useState(null);

  // Update profile
  const updateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", userData.address);
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        "http://localhost:4300/user/api//profile-update",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await getUser();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Change password
  const changePassword = async () => {
  
  
    try {
      const { data } = await axios.post(
        "http://localhost:4300/user/api/change-password",
        { oldPassword, newPassword, ConfirmPassword },
        { headers: { token } }
      );
  
      if (data.success) {
        toast.success("Password changed successfully!");
        setoldPassword("");
        setnewPassword("");
        setConfirmPassword("");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Specific error response from server
        toast.error(error.response?.data?.message || "Failed to change password.");
      } else {
        // General error (network, etc.)
        toast.error("An unexpected error occurred.");
      }
      console.error(error);
    }
  };
  

  return (
    <div className="flex flex-col mt-6 px-10 gap-6">
      <div className="flex gap-6">
        {isEdit ? (
          <label htmlFor="image">
            <div>
              <img
                src={image ? URL.createObjectURL(image) : userData.image}
                className="w-56 border border-blue-500 object-cover"
                alt="Profile"
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img
            className="w-56 border border-blue-500 object-cover"
            src={userData.image}
            alt="Profile"
          />
        )}
        <div className="flex flex-col gap-2">
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Name:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={userData.name || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Name:</span>{" "}
              {userData.name}
            </p>
          )}
          <p className="text-blue-800">
            <span className="text-black font-medium">Email:</span>{" "}
            {userData.email}
          </p>
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Phone:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={userData.phone || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Phone:</span>{" "}
              {userData.phone}
            </p>
          )}
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Address:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={userData.address || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Address:</span>{" "}
              {userData.address}
            </p>
          )}
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Gender:</p>
              <select
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={userData.gender || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Gender:</span>{" "}
              {userData.gender}
            </p>
          )}
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Dob:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="date"
                value={userData.dob || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Dob:</span>{" "}
              {userData.dob}
            </p>
          )}
          <div className="flex items-start gap-4">
            {isEdit ? (
              <button
                onClick={updateProfile}
                className="bg-blue-500 px-6 py-2 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-green-500 px-6 py-2 text-white rounded-lg hover:bg-green-600 transition"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-64">
        <div className="flex flex-col gap-2 border border-blue-800 p-4 rounded-lg">
          <input
            type="password"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Previous password"
            value={oldPassword}
            onChange={(e) => setoldPassword(e.target.value)}
          />
          <input
            type="password"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
          />
          <input
            type="password"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm password"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            onClick={changePassword}
            className="bg-blue-800 text-center text-white py-2 rounded hover:bg-blue-900 transition"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
