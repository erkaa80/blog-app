import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { blogsCollection, tagsCollection, usersCollection } from "../firebase";

const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const { children } = props;
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      blogsCollection,
      async (collectionSnapshot) => {
        const blogPromises = collectionSnapshot.docs.map(async (blogDoc) => {
          const blogData = blogDoc.data();

          // Fetching user data
          const userRef = doc(usersCollection, blogData.userId);
          const userDoc = await getDoc(userRef);
          const userData = userDoc.exists() ? userDoc.data() : null;

          // Fetching tag data
          const tagRef = doc(tagsCollection, blogData.tagId);
          const tagDoc = await getDoc(tagRef);
          const tagData = tagDoc.exists() ? tagDoc.data() : null;

          return {
            blogId: blogDoc.id,
            ...blogData,
            user: userData,
            tag: tagData,
          };
        });

        const blogWithDetails = await Promise.all(blogPromises);

        setBlogs(blogWithDetails);
        setBlogsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, blogsLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
