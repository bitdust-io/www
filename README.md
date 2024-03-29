![Nuxt CMS](https://bitdust.io/assets/img/og/og-image.jpg)

# BitDust


## About

BitDust - is decentralized, secure, and anonymous online storage, where only the owner has access and absolute control over its data.

Imagine a situation when you and your friends agree to help each other to store the data. On your computer, you store the data that both of your friends uploaded to you via the Internet, and you, in turn, can use the free space on their machines to save your files. This creates [redundancy](https://github.com/bitdust-io/docs/blob/master/storage.md) but allows safer storage of important data. It is also a fair deal because all three are interested in the maximum safety and availability of stored information.

BitDust network is a voluntary association of people sharing resources of their personal computers. Their machines run the same copies of the BitDust program, which enables device communication via the Internet when data are transmitted directly from one user to another and stored on user hard disk drives. 

Uploaded input data is divided into blocks and fragments, [encrypted](https://github.com/bitdust-io/docs/blob/master/security.md), and uploaded on other users' computers. The system is designed to monitor each node, which stores your data continuously.

The BitDust program constantly keeps a state, enabling you to download your data back to your machine anytime. The mechanism of [automatic data restoration](https://github.com/bitdust-io/docs/blob/master/rebuilding.md) allows the dynamic reassembling of the data fragments uploaded into the network on the new nodes without any action from the user.

BitDust program is written in [Python](http://python.org) using [Twisted](http://twistedmatrix.com/) Framework and is distributed in open source code - we are still deciding about the license type. 

The project is in the stage of deep development, but the demo version will be available in the near future. 

We invite everyone interested in this direction - primarily developers and enthusiasts. Join our [team](https://github.com/bitdust-io), or directly [support us](https://github.com/bitdust-io/docs/blob/master/donate.md). Together we can create a fairer alternative and trusted solutions than existing global networks.



## Beginning

+ [Introduction](https://github.com/bitdust-io/docs/blob/master/intro.md)
+ [Concept](https://github.com/bitdust-io/docs/blob/master/concept.md)
+ [Definitions](https://github.com/bitdust-io/docs/blob/master/definitions.md)
+ [Philosophy](https://github.com/bitdust-io/docs/blob/master/philosophy.md)
+ [How Does It Work?](https://github.com/bitdust-io/docs/blob/master/principle.md)
+ [Installation](https://github.com/bitdust-io/docs/blob/master/install.md)
+ [Commands](https://github.com/bitdust-io/docs/blob/master/commands.md)
+ [Settings](https://github.com/bitdust-io/docs/blob/master/settings.md)
+ [Glossary](https://github.com/bitdust-io/docs/blob/master/glossary.md)


## Working Principles

+ [User Identification](https://github.com/bitdust-io/docs/blob/master/identities.md)
+ [Distributed Storage](https://github.com/bitdust-io/docs/blob/master/storage.md)
+ [Data Security](https://github.com/bitdust-io/docs/blob/master/security.md)
+ [Automatic Rebuilding](https://github.com/bitdust-io/docs/blob/master/rebuilding.md)
+ [Distributed Hash-Table](https://github.com/bitdust-io/docs/blob/master/dht.md)
+ [Network services](https://github.com/bitdust-io/docs/blob/master/services.md)
+ [Transport protocols](https://github.com/bitdust-io/docs/blob/master/transports.md)
+ [Crypto-contracts](https://github.com/bitdust-io/docs/blob/master/crypto_contracts.md)


## Development

+ [Roadmap](https://github.com/bitdust-io/docs/blob/master/roadmap.md)
+ [Finite State Machines](https://github.com/bitdust-io/docs/blob/master/automats.md)
+ [Technologies](https://github.com/bitdust-io/docs/blob/master/technologies.md)
+ [API Interface](https://github.com/bitdust-io/docs/blob/master/api.md)
+ [Known bugs](https://github.com/bitdust-io/docs/blob/master/bugs.md)


## Deploying

You can just open a "index.html" file in the root folder of your local "www" repository, and a fully automated and independent copy of the website will be rendered in your web browser. The website does not require a database to be available on your host and only serves static HTML pages at the moment.

On the live machine serving https://bitdust.io resource "www", the repository is cloned and directly loaded into the WWW folder maintained by the Apache2 web server.

The live machine cron job runs every 5 minutes and executes the `./deploy` script from the repository root. After merging your "Pull Request", changes will be automatically delivered to the BitDust website quickly.



## Contributing

This repository  uses .html files generated from [BitDust documentation](https://github.com/bitdust-io/docs) sources built in Markdown format. If you want to modify any page on the web site, create a fork of both repositories on GitHub and clone it locally:

    git clone git@github.com:<your github username>/docs.git bitdust.docs
    cd bitdust.docs
    git remote add upstream https://github.com/bitdust-io/docs.git


You also need to have [bitdust.devel](https://github.com/bitdust-io/devel) repository cloned in the parent folder, because some of Markdown pages are generated from BitDust Python sources. So Makefile expects `../bitdust.devel` folder to be already existed:

    cd ..
    git clone https://github.com/bitdust-io/devel.git bitdust.devel


Next make a fork and clone BitDust web site repository:

    git clone git@github.com:<your github username>/www.git bitdust.www
    cd bitdust.www
    git remote add upstream https://github.com/bitdust-io/www.git


Also please be sure you have markdown2 package installed globally:

    sudo apt-get install python-pip
    pip install --user six
    pip install --user markdown2


Now you can start making changes in .md files of your local "bitdust.docs" repo. Save modified .md file and run `make html` in "bitdust.www" repo - a new .html file will be generated with fresh changes you just did in the corresponding .md file.

Then you can re-generate the whole BitDust web site locally that way:

    cd ../bitdust.docs
    make build
    cd ../bitdust.www
    make html


To put your changes in live you need to make two Pull Requests: first to bitdust.docs repo and second to bitdust.www repo. Commit and push your git changes to your bitdust.docs fork repository and start a [Pull Request](https://github.com/bitdust-io/docs/pulls):

    cd ../bitdust.docs
    make build
    git add -u -v
    git commit -m "some comment to describe what you did"
    git push origin master


Do the same for bitdust.www repository and start a second [Pull Request](https://github.com/bitdust-io/www/pulls):

    cd ../bitdust.www
    make html
    git add -u -v
    git commit -m "some comment to describe what you did"
    git push origin master


After your changes got merged you need to pull latest changes from upstream and push to your fork:

    git pull upstream master
    git push orgigin master


BitDust team is doing public code reviews and we will be in touch with you to go further. If you like the project, join [BitDust contributors](https://github.com/bitdust-io) on GitHub.


## Development

    npm i

### Generate CSS from sass files

    npm run build-css

### Generate index (english translations)

    npm run translate

### Develop mode

    npm start


[bitdust.io](https://bitdust.io)
