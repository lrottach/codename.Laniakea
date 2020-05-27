// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <msalConfig>
const msalConfig = {
    auth: {
      clientId: '18361284-c9f8-421f-b85a-a78cb94da9ed',
      redirectUri: 'http://localhost:5500/'
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
      forceRefresh: false
    }
  };
  
  const loginRequest = {
    scopes: [
      'openid',
      'profile',
      'user.read',
      'calendars.read',
      'DeviceManagementConfiguration.Read.All'
    ]
  }
  // </msalConfig>