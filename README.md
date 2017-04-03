# Evolution UI

> A collection of standard and innovative UI components made by [Bov Academy][bov-academy] students.

[View Showcase Website][showcase-website]

## Requirements

This project is compatible with **Linux**, **Unix**, and **Mac OSX** operating systems. It requires the following software to be already installed on your system:

- [Ruby][ruby]
- [RubyGems][rubygems]
- [Bundler][rubybundler]
- [Node.js][node]
- [npm][npm]

**Running Windows?** Jekyll (what we use to build our `/docs`) does not officially support the Windows operating system, but they do provide [special instructions][jekyll-windows] if you want to take a crack at it anyway.

## Installation

1. First, make sure all of the software listed above is installed on your local machine. The latest stable versions should work fine.

    - [Install Ruby/RubyGems][ruby]
    - [Install Ruby Bundler][rubybundler]
    - [Install Node.js/npm][node-install]

2. Once you have Node.js/npm installed, use it to install `gulp-cli` globally:

    ```bash
    npm install -g gulp-cli`
    ```

    The `-g` flag means it will be installed globally on your system, and can be used for any project.

3. Clone this repository to your local machine, and install the required packages by running the following command(s):

    ```bash
    git clone git@github.com:BovAcademy-opensource/evolution-ui.git
    cd /path/to/repository
    npm install
    ```

    This will install all the required software specific to the framework.

4. Use [Bundler][rubybundler] to install all required Ruby gems (the Ruby equivalent of “packages”) specific to the showcase website (located in the `/docs` directory) by running the following command(s):

    ```bash
    cd docs/
    gem install bundler
    bundle install
    ```

    **NOTE:** You only need to run `gem bundler install` if you didn’t already install [Bundler][rubybundler] on your machine in the previous steps.

Voilà! You have successfully installed all the dependencies.

## Usage

After installing the required software specific to the framework and showcase website, you can begin using them. The following commands can now be run in the terminal from the root directory of the repository:

- `npm start`: Builds the framework’s development environment, watches for file changes, and automatically reloads the browser window when files change.
- `npm run start-docs`: Copies the framework’s compiled assets over to the showcase website, and serves the showcase website.
- `npm run production`: Builds a “production-ready” version of the framework with minification and file hashes for a better cache management.
- `npm run deploy-docs`: Deploys the showcase website to the `gh-pages` branch, which updates the live website.
- `npm run sassdoc`: Builds and serves the Sass-specific documentation in your web browser.

**ProTip:** You can stop a running task in the terminal by using the  `Ctrl` + `C` keyboard shortcut.

## Contributing

Please follow our [detailed guidelines][contributions] if you would like to make a contribution to this project.

Thanks for your help!

## Core Maintainers

- Gabriele Romeo ([@GabrieleRomeo][maintainer-gabrieleromeo])
- Joseph Michael Matembu ([@jmatembu][maintainer-jmatembu])
- Vojislav Grujić ([@Gruximillian][maintainer-gruximillian])
- Brian Hernandez ([@brianhernandez][maintainer-brianhernandez])
- Léna Faure ([@lenafaure][maintainer-lenafaure])
- Carlos Coves ([@codephobe][maintainer-codephobe])
- Chris Bracco ([@cbracco][maintainer-cbracco])

## License
This project is released under the [MIT License][license].

[bov-academy]: https://bovacademy.com
[contributions]: .github/CONTRIBUTING.md
[gitflow]: https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow
[github-pages]: https://pages.github.com/
[jekyll]: https://jekyllrb.com
[jekyll-windows]: http://jekyllrb.com/docs/windows/#installation
[license]: LICENSE.md
[liquid]: http://liquidmarkup.org
[maintainer-brianhernandez]: https://github.com/brianhernandez
[maintainer-cbracco]: https://github.com/cbracco
[maintainer-codephobe]: https://github.com/codephobe
[maintainer-gabrieleromeo]: https://github.com/GabrieleRomeo
[maintainer-gruximillian]: https://github.com/Gruximillian
[maintainer-jmatembu]: https://github.com/jmatembu
[maintainer-lenafaure]: https://github.com/lenafaure
[node]: https://nodejs.org/en/
[node-install]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com
[pull-request]: https://help.github.com/articles/creating-a-pull-request-from-a-fork/
[repo]: https://github.com/BovAcademy-opensource/evolution-ui
[ruby]: https://www.ruby-lang.org/en/
[rubybundler]: http://bundler.io
[rubygems]: https://rubygems.org
[sass]: http://sass-lang.com
[showcase-website]: https://BovAcademy-opensource.github.io/evolution-ui/
