let accessToken;

const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return accessToken;
    }

    // Check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if(accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = number(expiresInMatch[1]);
      // This clears the parameters allowing us to grab a new access token when it expires
      
    }
  }
}

export default Spotify;


