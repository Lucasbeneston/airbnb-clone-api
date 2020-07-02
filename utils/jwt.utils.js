const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET =
  '9gMQj5wdpSfYwDBWji3wJoVcXwgEXvaBXc1FFBJiY2yXI9447gzTgCA-kyWOkGTVlEQUuVDqdeKJLLWuHpuU-0GY3SzqwrxxrvkIl8l84HKItZWRFA1UxHh7r7LaF7xUZ';

module.exports = {
  generateTokenForUser: (userData) => {
    return jwt.sign(
      {
        userId: userData.id,
        isAdmin: userData.isAdmin,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: '1h',
      }
    );
  },
};
