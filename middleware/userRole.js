import jwt from 'jsonwebtoken';

export const verifyUserAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(
      new HandleError(
        "Authentication is missing !Please login to access resource",
        401
      )
    );
  }
  const decodedDate = jwt.verify(token, process.env.JWT_KEY);
  req.user = await User.findById(decodedDate.id);
  next();
};