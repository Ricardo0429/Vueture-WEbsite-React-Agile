AgileVentures Website React Front End
=====================================

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

A useful [guide for the create react app is available](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Installation
------------

```
$ git clone https://github.com/AgileVentures/agile-ventures-website-react-front-end
$ cd agile-ventures-website-react-front-end
$ yarn
```

Run
---

```
$ yarn start
```
Dokku Deployment
-----------------

This will only work if you have been given access to our dokku system - this is for advanced users who have demonstrated ongoing committment to the project.

To make the commands simple, add the following to your ~/.ssh/config

```
Host avp-dokku
HostName agileventures-playground.westeurope.cloudapp.azure.com
User dokku
```
Then the following commands (assuming you have the correct ssh key set up) will create an app and allow pushing to the production server via git

```sh
$ ssh avp-dokku apps:create agileventures-react-front-end-production # if not yet created
$ git remote add agileventures-react-front-end-production dokku@agileventures-playground.westeurope.cloudapp.azure.com:agileventures-react-front-end-production    # assuming you are in local directory for this project -- only needed first time
$ git push agileventures-react-front-end-production master
```

Setting up a Domain on Dokku/Azure
----------------------------

Tell dokku what domain to use:
```
$ ssh avp-dokku domains:add agileventures-react-front-end-production react.agileventures.org
```

Ensure has the DNS Zone on Azure is set correctly:

![Azure DNS Zone configuration pane](https://dl.dropbox.com/s/dzgh7i3sn4wrxqz/Screenshot%202018-11-01%2013.32.30.png?dl=0)
