let permissions = [
    { id: 1, name: "Read" },
    { id: 2, name: "Write" },
    { id: 3, name: "Delete" },
];

// Define roles locally or import it from another module if needed
let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
];

export const getPermissions = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(permissions), 500);
    });
};

export const updateRolePermissions = async (roleId, updatedPermissions) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Update the roles array with new permissions for the specific role
            roles = roles.map((role) =>
                role.id === roleId ? { ...role, permissions: updatedPermissions } : role
            );
            resolve();
        }, 500);
    });
};
