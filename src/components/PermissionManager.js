import React, { useState, useEffect } from "react";
import { getPermissions, updateRolePermissions } from "../mockAPI/permissionApi";

const PermissionManager = () => {
    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    useEffect(() => {
        // Fetch permissions when the component loads
        getPermissions().then(setPermissions);
    }, []);

    // Handle permission toggle
    const handlePermissionChange = (permissionId) => {
        setSelectedPermissions((prev) =>
            prev.includes(permissionId)
                ? prev.filter((id) => id !== permissionId) // Remove if already selected
                : [...prev, permissionId] // Add if not selected
        );
    };

    // Save selected permissions for a role (example roleId = 1)
    const handleSavePermissions = async () => {
        try {
            await updateRolePermissions(1, selectedPermissions);
            alert("Permissions updated successfully!");
        } catch (error) {
            console.error("Error updating permissions:", error);
        }
    };

    return (
        <div className="permission-manager">
            <h2>Permission Manager</h2>
            {permissions.map((perm) => (
                <div key={perm.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedPermissions.includes(perm.id)}
                            onChange={() => handlePermissionChange(perm.id)}
                        />
                        {perm.name}
                    </label>
                </div>
            ))}
            <button onClick={handleSavePermissions}>Save Permissions</button>
        </div>
    );
};

export default PermissionManager;
