import React, { useState, useEffect } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../mockAPI/userApi";
import ModalForm from "./ModalForm";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    const handleAddUser = (user) => {
        addUser(user).then(() => getUsers().then(setUsers));
    };

    const handleUpdateUser = (user) => {
        updateUser(user.id, user).then(() => getUsers().then(setUsers));
    };

    const handleDeleteUser = (id) => {
        deleteUser(id).then(() => getUsers().then(setUsers));
    };

    return (
        <div className="user-management">
            <h2>User Management</h2>
            <button onClick={() => setIsModalOpen(true)}>Add User</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                <button onClick={() => { setCurrentUser(user); setIsModalOpen(true); }}>Edit</button>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <ModalForm
                    user={currentUser}
                    onClose={() => { setIsModalOpen(false); setCurrentUser(null); }}
                    onSave={currentUser ? handleUpdateUser : handleAddUser}
                />
            )}
        </div>
    );
};

export default UserManagement;
