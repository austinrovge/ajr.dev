# austinrovge.me
This project is my personal site that is built using GatsbyJS.

### Installation
The project needs to be cloned and the NPM modules need to be installed.

``` bash
$ git clone https://github.com/austinrovge/austinrovge.me.git
$ cd austinrovge.me
$ npm install -g
```

### Development

#### GitHub API Key
Before doing any development, you'll need to make a personal access token from GitHub and add it to a file named `.env.api` in the project root directory.

[Here's steps from GitHub on generating your own personal access token.](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) The token you generate doesn't need to have any extra permissions in order to talk to the GitHub GraphQL API.

Make sure you don't commit the access token to a project repository or share it anywhere else.

The inside of the `.env.api` file should have one line like this:

```
GITHUB_API_TOKEN=[YOUR API TOKEN GOES HERE]
```

#### Development

Gatsby will build a development version of the site and serve the files out by running:

``` bash
$ npm run dev
```

#### Production

A production build can be created and served on port 9000 using:

```bash
$ npm run build:prod
$ npm run serve
```

### Future Development
* ~~Dynamically add projects to project page~~
* ~~Dynamically add pictures to the photography page~~
* Create pages for different photo albums
* Add JSLint to the project
* Update gatsby-config
* Update directories
* Serve production files on port 80
* Convert CSS into SASS