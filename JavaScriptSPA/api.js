// helper function to access the resource with the token
function callApiWithAccessToken(endpoint, accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
      };
  
    console.log('request made to Web API at: ' + new Date().toString());
    
    fetch(endpoint, options)
      .then(response => response.json())
      .then(response => {
        console.log('web API responded at: ' + new Date().toString());
        logMessage("web API returned:\n" + JSON.stringify(response));
      }).catch(error => {
        logMessage("Error calling the Web api:\n" + error);
      });
}

// calls the resource API with the token
function callApi() {
  getTokenPopup(tokenRequest)
      .then(tokenResponse => {
          try {
            callApiWithAccessToken(apiConfig.webApi, tokenResponse.accessToken);
          } catch(err) {
            console.log(err);
          }
      });
}