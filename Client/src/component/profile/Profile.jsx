import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    useEffect(() => {
        // Fetch the user profile data when the component mounts
        axios.get('/api/profile')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the profile data!', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the password change request
        axios.post('/api/profile', passwords)
            .then(response => {
                alert('Profile updated successfully');
            })
            .catch(error => {
                console.error('There was an error updating the profile!', error);
            });
    };

    return (
        <div className="container">
            <div className="profile-container">
                <div className="header">
                    <div>Home / My Account</div>
                    <div>Welcome! <a href="#" className="link">{profile.firstName} {profile.lastName}</a></div>
                </div>
                <div className="form-section">
                    <h2>Edit Your Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" value={profile.firstName} disabled className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" value={profile.lastName} disabled className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={profile.email} disabled className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" value={profile.address} disabled className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentPassword">Current Password</label>
                            <input type="password" id="currentPassword" name="currentPassword" value={passwords.currentPassword} onChange={handleChange} className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPassword">New Password</label>
                            <input type="password" id="newPassword" name="newPassword" value={passwords.newPassword} onChange={handleChange} className="input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmNewPassword">Confirm New Password</label>
                            <input type="password" id="confirmNewPassword" name="confirmNewPassword" value={passwords.confirmNewPassword} onChange={handleChange} className="input" />
                        </div>
                        <div className="button-group">
                            <button type="button" onClick={() => alert('Edit canceled.')} className="button">Cancel</button>
                            <button type="submit" className="button save-button">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
