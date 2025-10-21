# The Unfollower

This is a web app that makes it easy to unfollow lots of playlists. The app will ask the user for their Spotify credentials, present all of the user's playlists and allow the user to quickly unfollow any of the playlists.  An unfollowed playlist can be refollowed.

This web app uses the Spotify Web API.  

It is online at [The Unfollower](http://static.echonest.com/TheUnfollower/index.html)

![screenshot](http://static.echonest.com/TheUnfollower/images/ss.png)

## Setup Instructions

To use this app with your own domain, you need to set up a Spotify application:

### 1. Create a Spotify App

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create app"**
4. Fill in the app details:
   - **App name**: TheUnfollower (or any name you prefer)
   - **App description**: A tool to unfollow Spotify playlists
   - **Redirect URIs**: Add the following URLs (click "Add" after each):
     - `https://akafaneh.github.io/TheUnfollower/index.html` (for production)
     - `http://localhost:8000/index.html` (for local testing, if needed)
   - **Which API/SDKs are you planning to use?**: Select "Web API"
5. Accept the Spotify Developer Terms of Service
6. Click **"Save"**

### 2. Get Your Client ID

1. After creating the app, you'll be taken to your app's dashboard
2. Copy the **Client ID** (it will be a long string of letters and numbers)

### 3. Configure the App

1. Open `index.html` in a text editor
2. Find the configuration section at the top of the `<script>` tag (around line 95)
3. Replace the value of `SPOTIFY_CLIENT_ID` with your Client ID:
   ```javascript
   var SPOTIFY_CLIENT_ID = 'your-client-id-here'; // REPLACE THIS WITH YOUR CLIENT ID
   ```
4. Save the file

### 4. Deploy or Test Locally

- **For GitHub Pages**: Commit and push your changes. The app will be available at `https://yourusername.github.io/TheUnfollower/`
- **For local testing**: 
  1. Start a local web server in the TheUnfollower directory:
     ```bash
     python -m http.server 8000
     ```
  2. Open `http://localhost:8000/index.html` in your browser

## Troubleshooting

### "INVALID_CLIENT: Failed to get client" Error

This error occurs when:
- The Client ID is not configured correctly
- The redirect URI in your Spotify app settings doesn't match the URL you're accessing the app from
- The Spotify app has been deleted or is not accessible

**Solution**: Follow the setup instructions above to create a new Spotify app and configure your Client ID.

### "Trouble getting the user profile" Error

This may occur if:
- Your access token has expired
- The Spotify API is temporarily unavailable

**Solution**: Try clearing your browser cache and logging in again.