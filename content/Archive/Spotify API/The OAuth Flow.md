1. Client requests authorization (permission) to access data from Spotify {This includes any scopes that the client needs aka what resources they need to access}
2. Spotify authorizes access to client 
3. User grants app access to their Spotify data
4. Client receives access token from Spotify (sometimes a refresh token is also returned)
5. Client uses access token to request data from Spotify

`Implementing the OAuth Flow`
