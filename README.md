1. download the repo
2. install node modules - npm i
3. run - npm start

Example usage from your frontend code:

    const response = await fetch(`http://localhost:3001/avatar/${twitterUsername}`);
    const data = await response.json();
    profile_url = data.url