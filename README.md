# evolution-ui

[![travis](https://img.shields.io/travis/evolution-ui/evolution-ui.svg)](https://travis-ci.org/evolution-ui/evolution-ui) [![npm (scoped)](https://img.shields.io/npm/v/@cbracco/evolution-ui.svg)](https://npm.im/@cbracco/evolution-ui) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE.md) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![slack](https://evolution-ui.herokuapp.com/badge.svg)](https://evolution-ui.herokuapp.com/)

> A playground for the new Evolution UI directory structure and workflow.

## Introduction

Hello, and welcome to Evolution UI!

The first of its kind, Evolution UI is an open source front-end web framework comprising a collection of innovative and unique web components. These cutting-edge web components are intended to provide a different and enriched online experience and were created by the [students](https://students.bovacademy.com/) of Bov Academy Institute of Programming and Futuristic Engineering (you can learn more about this project and read a write-up on each component by visiting the [Bov Academy Blog](https://blog.bovacademy.com/)). This framework is intended to be a hub of web development innovation and we invite everyone to explore their creativity and contribute something innovative of their own to keep the project thriving.

While some of the components are still in development, many are ready for production. The components have been developed with HTML, CSS, Sass, and vanilla JavaScript.

Here, you'll be guided through the steps necessary to get started with Evolution UI. If you have any questions, please don't hesitate to contact the [project's maintainers]().


## Requirements

This project is compatible with **Linux**, **Unix**, and **Mac OSX** operating systems. It requires the following software to be already installed on your system:

- [Ruby][ruby]
- [RubyGems][rubygems]
- [Bundler][rubybundler]
- [Node.js][node] (version 7 and up)
- [npm][npm]

**Need to update Node.js?** Use [nvm][nvm] to manage multiple versions of Node.js on your local machine.

## Usage

There are several ways to begin using Evolution UI in your project.

### npm

You can download Evolution UI as an npm package, which includes the required CSS and JavaScript files.

```bash
npm install evolution-ui
```

### CDN

Or, you can include external links the required CSS and JavaScript files using a CDN.

We recommend you include a link to the CSS in the `<head>` of your HTML document, and a link to the JavaScript source at the bottom of your file, right before the closing `</body>` tag.

**CSS:**

```html
<link rel="stylesheet" href="https://unpkg.com/evolution-ui/dist/evolution-ui.min.css">
```

**JavaScript:**

```html
<script src="https://unpkg.com/evolution-ui/dist/evolution-ui.min.css"></script>
```

After including the required CSS and JavaScript files, simply add the appropriate HTML to your document to render a component. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Project</title>
    <link rel="stylesheet" href="https://unpkg.com/evolution-ui/dist/evolution-ui.min.css">
</head>
<body>
    <!-- Dot Navigation -->
    <nav class="evo_c-dot-navigation evo_c-dot-navigation--flip">
        <ul>
            <li class="is-active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>
    <script src="https://unpkg.com/evolution-ui/dist/evolution-ui.min.css"></script>
</body>
</html>
```

You can find many HTML markup examples and demos on the [showcase website][showcase-website] for Evolution UI.

## Development

### Source Code

If you would like to modify the source of Evolution UI, you will have to install the project’s dependencies after you download, clone or fork the repository. To clone this repository to your local machine and navigate to its location, run the following command(s):

```bash
git clone git@github.com:evolution-ui/evolution-ui.git
cd /path/to/repository
```

#### Install Dependencies

First, make sure all of the software [listed above][requirements] is installed on your local machine. The latest stable versions should work fine.

Next, install all of Evolution UI’s required software dependencies.

```bash
npm install
```

**NOTE:** Sometimes you will run into module dependency issues with `npm`. When you see error messages like `Module not found: Can't resolve ...` or `Cannot find module ...`, updating npm (run `npm update` in your command line) can sometimes fix these issues.

#### Workflow

Evolution UI follows the [git-flow][git-flow] workflow. Any new work should begin and/or branch from the `development` branch, which gets periodically merged into `master` as a somewhat-formal "release". We use [commitizen][commitizen] to ensure quality commits, and [semantic-release][semantic-release] to automate the release process.

A typical workflow would look something like this:

1. Checkout the `development` branch and pull in the latest changes:

    ```bash
    git checkout development
    git pull --rebase origin development
    ```

2. Start the development environment, and navigate to http://localhost:3000/ in your web browser:

    ```bash
    npm start
    ```

3. You can view any single component in the browser by visiting the following URL pattern: `http://localhost:300/[evolution|standard]/[component-name]/[variant-name].html`

4. Do work!

5. When you are finished with your feature, bug fix, or whatever, commit your changes using the [commitizen][commitizen] CLI (which we have handily aliased as an npm script):

    ```bash
    git add .
    npm run commit
    ```

    We also use [husky][husky] to ensure that our tests (`npm run test`) run and pass before every commit and push attempt.

6. When ready to push a new release, we use [semantic-release][semantic-release] to automate the process of bumping the version number and publishing the package to npm:

    ```bash
    npm run release
    ```

### Showcase Website

In addition to Evolution UI’s source code, we include the source code for the showcase website inside this same repository. The website serves as a showcase of all the UI components in this library. It is built using the [Jekyll][jekyll] static site generator, because Jekyll couples nicely with [GitHub Pages][gh-pages].

#### Install Dependencies

Use [Bundler][rubybundler] to install all required Ruby gems (the Ruby equivalent of “packages”) specific to the showcase website (located in the `/docs` directory) by running the following command(s):

```bash
cd docs/
gem install bundler
bundle install
```

**NOTE:** You only need to run `gem bundler install` if you didn’t already install [Bundler][rubybundler] on your machine in the previous steps.

**Running Windows?** Jekyll (what we use to build our `/docs`) does not officially support the Windows operating system, but they do provide [special instructions][jekyll-windows] if you want to take a crack at it anyway.

#### Workflow

To build the showcase website, run the following the command(s):

```bash
npm run docs
```

This command will build the latest Evolution UI source and copy the compiled assets into the `docs/` directory. Then it builds the Jekyll source files and runs the result in the web browser at http://localhost:3000, and watches for changes as you work and automatically reloads (thanks [browser-sync][browser-sync]!).

#### Deploying to GitHub Pages

When you are done working on the showcase website, and your commits have been pushed/merged in, you can deploy the latest changes to the showcase website by running the following command(s):

```bash
npm run deploy-docs
```

## Contributing

Please follow our [detailed guidelines][contributions] if you would like to make a contribution to this project.

Thanks to all of [our wonderful contributors][credits] for your hard work!

## License
This project is released under the [MIT License][license].

[bov-academy]: https://bovacademy.com
[browser-sync]: https://browsersync.io/
[commitizen]: https://github.com/commitizen/cz-cli
[contributions]: .github/CONTRIBUTING.md
[credits]: https://github.com/evolution-ui/evolution-ui/graphs/contributors
[husky]: https://github.com/typicode/husky
[gh-pages]: https://pages.github.com/
[git-flow]: https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow
[jekyll]: https://jekyllrb.com
[jekyll-windows]: http://jekyllrb.com/docs/windows/#installation
[license]: LICENSE.md
[node]: https://nodejs.org/en/
[node-install]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com
[nvm]: https://github.com/creationix/nvm
[requirements]: #requirements
[ruby]: https://www.ruby-lang.org/en/
[rubybundler]: http://bundler.io
[rubygems]: https://rubygems.org
[semantic-release]: https://github.com/semantic-release/semantic-release
[showcase-website]: https://evolution-ui.github.io/evolution-ui/
