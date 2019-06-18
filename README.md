# austinrovge.dev
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
GITHUB_API_TOKEN=000000000000000
```

with the zeros replaced with your access token.

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

### Project Development
The GitHub board for this project can be found [using this link!](https://github.com/austinrovge/austinrovge.dev/projects/2)

Future development, current work, and completed tasks can be found here.