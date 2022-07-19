# ara

ara is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Below are some steps to run your new Docusaurus site locally, but you do not necessarily have to do this to get started. The main actions to take from here would
be:
1. Update your content, which can be done in GitHub
2. Enable GitHub Pages in your repository's [settings]
3. Deploy your site, which [can be done many ways](#deployment)

## Getting Started
### Installation..

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Micro-Sites are hosted with GitHub Pages and do not need any other type of infrastructure other than your GitHub repository. Docusaurus will build your main branch into a static website that will be pushed to the `gh-pages` branch and your changes are live! You can manually redeploy or configure automation to redeploy with every change to the main branch.

### Forge
The best way to deploy your Micro-Site is using Forge! The GitHub app runs seamlessly to automatically deploy your site to GitHub Pages whenever you merge a pull request to the main branch. To get started with Forge: 

1. Add the [GitHub app] to this repository
1. Create a Pull Request and merge it into the main branch
1. Enable GitHub Pages in your repository's [settings]
1. Check out your changes on your site's [GitHub Pages] link!

Take a look at the [Forge docs] to learn more!

### Manually
#### Using SSH

```
$ USE_SSH=true yarn deploy
```

#### Not using SSH

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

<!-- links -->
[GitHub app]: https://github.optum.com/github-apps/forge-github-app
[settings]: https://github.optum.com/pdhankar/ara/settings
[Forge docs]: https://forge-docs.optum.com
[GitHub Pages]: https://github.optum.com/pages/pdhankar/ara
