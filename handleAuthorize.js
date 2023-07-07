const handleAuthorize = async () => {
  try {
    const result = await authorize({
      issuer: "https://YOUR_ISSUER",
      clientId: "YOUR_CLIENT_ID",
      redirectUrl: "YOUR_REDIRECT_URI",
      scopes: ["openid", "profile", "email"],
      serviceConfiguration: {
        authorizationEndpoint: "https://YOUR_AUTHORIZATION_ENDPOINT",
        tokenEndpoint: "https://YOUR_TOKEN_ENDPOINT",
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
