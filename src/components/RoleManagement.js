import React, { useState, useEffect } from "react";
import { getRoles, addRole, updateRole, deleteRole } from "../mockAPI/roleApi";
import ModalForm from "./ModalForm";

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentRole, setCurrentRole] = useState(null);

    useEffect(() => {
        getRoles().then(setRoles);
    }, []);

    const handleAddRole = (role) => {
        addRole(role).then(() => getRoles().then(setRoles));
    };

    const handleUpdateRole = (role) => {
        updateRole(role.id, role).then(() => getRoles().then(setRoles));
    };

    const handleDeleteRole = (id) => {
        deleteRole(id).then(() => getRoles().then(setRoles));
    };

    return (
        <div className="role-management">
            <h2>Role Management</h2>
            <button onClick={() => setIsModalOpen(true)}>Add Role</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Permissions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td>{role.permissions.join(", ")}</td>
                            <td>
                                <button onClick={() => { setCurrentRole(role); setIsModalOpen(true); }}>Edit</button>
                                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <ModalForm
                    role={currentRole}
                    onClose={() => { setIsModalOpen(false); setCurrentRole(null); }}
                    onSave={currentRole ? handleUpdateRole : handleAddRole}
                />
            )}
        </div>
    );
};

export default RoleManagement;
