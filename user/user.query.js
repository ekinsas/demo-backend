const getUsersQuery = () => `
  Select * from public."table_user"
`;

const getUserByIdQuery = (id) => `
  Select * from public."table_user" where id = ${id}
`;

const getUserByEmailQuery = (email) => `
  Select * from public."table_user" where email = ${email}
`;

module.exports = {
  getUsersQuery,
  getUserByIdQuery,
  getUserByEmailQuery,
};
