const handleSignOut = async () => {
  try {
    await signOut(options);
    console.log("User signed out");
  } catch (error) {
    console.error(error);
  }
};
