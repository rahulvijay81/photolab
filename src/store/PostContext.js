import { createContext, useState } from "react";

export const PostContext = createContext(null)


function Post({ children }) {
    const [postDetails, setPostDetails] = useState(null);

    return (
        <AuthContext.Provider value={{ postDetails, setPostDetails }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Post