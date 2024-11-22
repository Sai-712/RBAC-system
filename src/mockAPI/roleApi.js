let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
];

export const getRoles = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(roles), 500);
    });
};

export const addRole = async (role) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            roles.push({ ...role, id: Date.now() });
            resolve();
        }, 500);
    });
};

export const updateRole = async (id, updatedRole) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            roles = roles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role));
            resolve();
        }, 500);
    });
};

export const deleteRole = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            roles = roles.filter((role) => role.id !== id);
            resolve();
        }, 500);
    });
};
