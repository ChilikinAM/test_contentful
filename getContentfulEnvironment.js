const contentfulManagement = require("contentful-management")

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: 'CFPAT-QU_tYnLsndLongQVMuQ4lXMtJNZASKOamHvnr0ybQ2g',
    })

    return contentfulClient
        .getSpace('81u3a6g31mpb')
        .then(space => space.getEnvironment('master'))
}