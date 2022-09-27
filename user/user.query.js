const getUsersQuery = () => `
  SELECT * from table_user
`;

const getUserByIdQuery = (id) => `
  SELECT * from table_user
  WHERE id=${id}
`;

const getUserByEmailQuery = (email) => `
  SELECT * from table_user
  WHERE email=${email}
`;

module.exports = {
  getUsersQuery,
  getUserByIdQuery,
  getUserByEmailQuery,
};
