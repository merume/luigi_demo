// You can now use ES6 syntax here
Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        children: [
          {
            pathSegment: 'hw',
            label: 'Hello World!',
            viewUrl: '/assets/basicMicroFrontend.html'
          },
          {
            pathSegment: 'one',
            label: 'Section one',
            viewUrl: '/assets/basicMicroFrontend.html#one'
          },
          {
            pathSegment: 'nuxt',
            label: 'Nuxt3 Page',
            viewUrl: 'http://localhost:6010/',
            virtualTree: false,
            loadingIndicator: {
              enabled: false
            }
          },
          {
            pathSegment: 'gatsby',
            label: 'Gatsby Page',
            viewUrl: 'http://localhost:6020/',
            virtualTree: false,
            loadingIndicator: {
              enabled: false
            }
          },
          {
            pathSegment: 'qwik',
            label: 'Qwik Page',
            viewUrl: 'http://localhost:6030/',
            virtualTree: false,
            loadingIndicator: {
              enabled: false
            }
          }
        ]
      }
    ]
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: false
  },
  settings: {
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
});
