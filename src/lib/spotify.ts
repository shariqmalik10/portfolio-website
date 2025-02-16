// lib/spotify.ts
let accessToken: string | null = null;
let tokenExpiration: number = 0;

// export async function getAccessToken() {
//   if (Date.now() < tokenExpiration && accessToken) return accessToken;

//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Basic ' + Buffer.from(
//         `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
//       ).toString('base64')
//     },
//     body: new URLSearchParams({
//       grant_type: 'refresh_token',
//       refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!
//     })
//   });

//   const data = await response.json();
//   accessToken = data.access_token;
//   tokenExpiration = Date.now() + (data.expires_in * 1000) - 5000; // 5 sec buffer

//   console.log(`New access token generated: ${accessToken}`)
  
//   return accessToken;
// }

// lib/spotify.ts
let tokenData = {
  accessToken: null,
  expirationTime: 0
};

export async function getAccessToken() {
  // Force new token if current one is expired or will expire soon
  if (!tokenData.accessToken || Date.now() >= tokenData.expirationTime) {
    console.log('Getting new access token...');
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString('base64')
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.status}`);
    }

    const data = await response.json();
    
    tokenData = {
      accessToken: data.access_token,
      expirationTime: Date.now() + (data.expires_in * 1000) - 5000
    };
    
    console.log('New token expires in:', data.expires_in, 'seconds');
  }

  return tokenData.accessToken;
}