# Evolution UI Showcase Website

> The source code for the showcase website of the Evolution UI Framework. It is built using [Jekyll][jekyll], a powerful and simple static site generation tool written in [Ruby][ruby].

## Requirements

This project is compatible with **Linux**, **Unix**, and **Mac OSX** operating systems. It requires the following software to be already installed on your system:

- [Ruby][ruby]
- [RubyGems][rubygems]
- [Bundler][rubybundler]
- [Node.js][node] (version 7 and up)
- [npm][npm]

**Need to update Node.js?** Use [nvm][nvm] to manage multiple versions of Node.js on your local machine.

**Running Windows?** Jekyll does not officially support the Windows operating system, but they do provide [special instructions][jekyll-windows] if you want to take a crack at it anyway.

## Features

- [Jekyll][jekyll] as a blog-focused static site generator that uses the [Liquid][liquid] templating language.
- [Sass][sass] for features that don’t exist in CSS yet like variables, nesting, mixins, inheritance, and more.

## Installation

Clone this repository to your local machine, and install its dependencies with the following command(s):

```bash
git clone git@github.com:BovAcademy-opensource/evolution-ui.git
cd evolution-ui/docs
bundle install
```

The `bundle install` command will install the required Ruby gems.

## Usage

To start working, first run the following command(s) from the **root directory** of this repository:

```bash
npm run start-docs
```

The `npm run start-docs` command will run copy the compiled CSS/JS files from the UI framework into the `docs/assets/` directory, and run a Jekyll command that builds the templates and starts a local server at http://localhost:4000 that watches for changes to template and Sass files and automatically re-builds the website.

This is considered **“Development Mode”**, which means that the files being served in this local environment are not yet minified or optimized for deployment.

## Deploying

When you are finished working and want to deploy your changes to the production server (in this case [GitHub Pages][github-pages]), run the following command(s) from the **root directory** of this repository:

```bash
npm run deploy-docs
```

The `npm run deploy-docs` command will build a production-ready version of the website, and deploy only the `/docs/_site` directory to the `gh-pages` branch.

[github-pages]: https://pages.github.com/
[jekyll]: https://jekyllrb.com
[jekyll-windows]: http://jekyllrb.com/docs/windows/#installation
[liquid]: http://liquidmarkup.org
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com
[nvm]: https://github.com/creationix/nvm
[ruby]: https://www.ruby-lang.org/en/
[rubybundler]: http://bundler.io
[rubygems]: https://rubygems.org
[sass]: http://sass-lang.com
