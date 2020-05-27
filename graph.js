// Create an options object with the same scopes from the login
const options = 
    new MicrosoftGraph.MSALAuthenticationProviderOptions([
        'user.read',
        'calendars.read',
        'DeviceManagementConfiguration.Read.All'
    ]);

// Create an authentication provider for the implicit flow
const authProvider = 
    new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalClient, options);

// Initialize the Graph Client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({authProvider});

async function getEvents() {
    try {
        let events = await graphClient
            .api('/me/events')
            .select('subject,organizer,start,end')
            .orderby('createdDatetime DESC')
            .get();
        updatePage(msalClient.getAccount(), Views.calendar, events)
    } catch (error) {
        updatePage(msalClient.getAccount(), Views.error, {
            message: 'Error getting events',
            debug: error
        })
    }
}

async function getConfigurationProfiles() {
    try {
        let configurations = await graphClient
            .api('/deviceManagement/deviceConfigurations')
            .select('id,displayName')
            .get();
        updatePage(msalClient.getAccount(), Views.configuration, configurations)
    } catch (error) {
        updatePage(msalClient.getAccount(), Views.error, {
            message: 'Error getting configuration profiles.',
            debug: error
        })
    }
}