let users = [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
];

export const getUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(users), 500);
    });
};

export const addUser = async (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            users.push({ ...user, id: Date.now() });
            resolve();
        }, 500);
    });
};

export const updateUser = async (id, updatedUser) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            users = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user));
            resolve();
        }, 500);
    });
};

export const deleteUser = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            users = users.filter((user) => user.id !== id);
            resolve();
        }, 500);
    });
};
