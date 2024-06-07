"use client"
import React, { useState, useRef } from 'react';
import styles from './profile.module.css';
import { FaCamera, FaPen, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [profilePic, setProfilePic] = useState('/default-profile.jpg');
  const [username, setUsername] = useState('JohnDoe');
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you would typically save the changes to your backend
  };

  const handleLogout = () => {
    // Perform logout actions (e.g., clearing tokens, session)
    router.push('/login');
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        {isEditing ? (
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className={styles.usernameInput}
          />
        ) : (
          <h2 className={styles.username}>{username}</h2>
        )}
        <div className={styles.profilePicWrapper}>
          <div className={styles.profilePicContainer}>
            <img src={profilePic} alt="Profile" className={styles.profilePic} />
          </div>
          <button className={styles.cameraButton} onClick={handleCameraClick}>
            <FaCamera />
          </button>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleProfilePicChange}
      />
      <div className={styles.actionsContainer}>
        {isEditing ? (
          <button className={styles.actionButton} onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className={styles.actionButton} onClick={handleEditClick}>
            <FaPen /> Edit Profile
          </button>
        )}
        <button className={styles.actionButton} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;