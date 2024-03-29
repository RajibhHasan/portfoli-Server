
const { body, validationResult } = require('express-validator');








const validateUser = [
  body('username').isLength({ min: 3 }).withMessage('name must be at last 3 characters logn '),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('phone').optional().isString(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  
    
  body('avatar').optional().isString(),
  body('isAdmin').optional().isBoolean()
];

const handleValidationResult = (req, res, next) => {
	console.log(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // Proceed to the next middleware if validation passes
};

module.exports = { validateUser, handleValidationResult };
