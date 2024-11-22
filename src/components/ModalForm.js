import React, { useState, useEffect } from "react";

const ModalForm = ({ user, role, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        permissions: [],
        status: "Active",
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                role: user.role,
                status: user.status,
            });
        } else if (role) {
            setFormData({
                name: role.name,
                permissions: role.permissions || [],
            });
        }
    }, [user, role]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (permission) => {
        setFormData((prev) => ({
            ...prev,
            permissions: prev.permissions.includes(permission)
                ? prev.permissions.filter((perm) => perm !== permission)
                : [...prev.permissions, permission],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{user ? "Edit User" : role ? "Edit Role" : "Add Item"}</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    {user && (
                        <>
                            <label>
                                Role:
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Status:
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </label>
                        </>
                    )}

                    {role && (
                        <div>
                            <h4>Permissions:</h4>
                            {["Read", "Write", "Delete"].map((perm) => (
                                <label key={perm}>
                                    <input
                                        type="checkbox"
                                        checked={formData.permissions.includes(perm)}
                                        onChange={() => handleCheckboxChange(perm)}
                                    />
                                    {perm}
                                </label>
                            ))}
                        </div>
                    )}

                    <div className="modal-actions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
