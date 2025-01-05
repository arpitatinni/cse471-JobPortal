import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    const { token } = req.cookies; // Destructure token from cookies
    const UNAUTHORIZED_RESPONSE = { message: "Unauthorized", success: false };
    
    if (!token) {
        console.warn("Authentication failed: No token provided");
        return res.status(401).json(UNAUTHORIZED_RESPONSE); // Return unauthorized if no token is present
    }

    try {
        // Verify the JWT format (basic check for the presence of three parts in the token)
        const tokenParts = token.split(".");
        if (tokenParts.length !== 3) {
            console.error("Invalid token format");
            return res.status(401).json(UNAUTHORIZED_RESPONSE);
        }

        // Decode the token using the secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Set the user ID for future use in the request object
        req.id = decoded.userId;

        // Proceed to the next middleware
        next();
    } catch (error) {
        // Detailed error logging
        console.error("JWT verification failed:", error.message);
        return res.status(401).json(UNAUTHORIZED_RESPONSE);
    }
};

export default isAuthenticated;
