# Git Auto badger

A npm cli tool that reads your packagejson/project metadata and git config and connects your readme with multiple badge providers (shields.io, badgen.net etc)

[//]: <> (start placeholder for auto-badger)


[![Build Status](https://img.shields.io/travis/technikhil314/auto-badger.svg?style=flat-square&color=%23007a1f)](https://travis-ci.org/technikhil314/auto-badger)
[![version](https://img.shields.io/npm/v/git-auto-badger.svg?style=flat-square)](https://npmjs.org/git-auto-badger)
[![package size](https://packagephobia.com/badge?p=git-auto-badger)](https://packagephobia.com/result?p=git-auto-badger)
[![license](https://img.shields.io/npm/l/git-auto-badger?color=%23007a1f)](https://github.com/technikhil314/auto-badger/blob/master/LICENSE)

[![dependancies](https://img.shields.io/librariesio/release/npm/git-auto-badger?color=%23007a1f)](https://libraries.io/npm/git-auto-badger)
[![downloads](https://img.shields.io/npm/dm/git-auto-badger)](https://npmcharts.com/compare/git-auto-badger)
[![all contributors](https://img.shields.io/github/all-contributors/technikhil314/auto-badger)](https://github.com/technikhil314/auto-badger/graphs/contributors)
[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/technikhil314/auto-badger/blob/master/CODE_OF_CONDUCT.md)
[![chat with community](https://img.shields.io/gitter/room/technikhil314/auto-badger?color=%23007a1f)](https://gitter.im/auto-badger)

[![stargazers](https://img.shields.io/github/stars/technikhil314/auto-badger?style=social)](https://github.com/technikhil314/auto-badger/stargazers)
[![number of forks](https://img.shields.io/github/forks/technikhil314/auto-badger?style=social)](https://github.com/technikhil314/auto-badger/fork)
[![Follow technikhil314 on twiter](https://img.shields.io/twitter/follow/technikhil314?label=Follow)](https://www.twitter.com/technikhil314)

The badges are auto generated by [auto badger](https://github.com/technikhil314/auto-badger)

[//]: <> (end placeholder for auto-badger)








<br/>

## Prerequisites

Node >= 10.x.x

<br/>

## See the demo running here

[![demo](https://raw.githubusercontent.com/technikhil314/my-static-assets/master/terminal-casts/auto-badger.svg)](https://raw.githubusercontent.com/technikhil314/my-static-assets/master/terminal-casts/auto-badger.svg)

<br/>

## Why

Because why not? I did not find any such tool out there to minimise efforts of such a robotic job. Plus some of the default provided badges lack of accessibility constrint. White on green does not meet any contrast ratio. See the badge below for example it will be difficult for low vision people to read it

![demo](https://img.shields.io/librariesio/release/npm/git-auto-badger?style=flat-square)

<br/>

## How to use

### Install the cli

```
npm i -g git-auto-badger

or 

yarn add -g git-auto-badger
```
### Add placeholder to add badges

Add following markdown comment where you want the badges to appear

```
[//]: <> (start placeholder for auto-badger)
```
### Run the cli

then run following in your project root directory

```
npx auto-badger
```

And whoo hoo you are done. All the necessary badges are added to your markdown.

<br/>

## What all things are supported

This cli currently supports following providers from each category

1. VCS
   - [Github](https://www.github.com/) [:heavy_check_mark:]
   - [Gitlab](https://www.gitlab.com/) [Coming soon]
1. CI/CD
   - [Travis CI](https://travis-ci.org/) [:heavy_check_mark:]
   - [Github Actions (first Job)](https://github.com/features/actions) [:heavy_check_mark:]
   - [Appveyor](https://www.appveyor.com/) [:heavy_check_mark:]
   - [Circle CI](https://circleci.com/) [:heavy_check_mark:]
1. Coverage
   - [Coveralls](https://coveralls.io/) [:heavy_check_mark:]
   - [CodeCov](https://codecov.io/) [:heavy_check_mark:]
1. Package Managers
   - [NPM](https://www.npmjs.com/) [:heavy_check_mark:]
   - [PyPI](https://pypi.org/) [Coming soon]
1. License
   - Github License File [:heavy_check_mark:]
1. Code of Conduct
   - Github CoC File [:heavy_check_mark:]
1. Dependancies
   - [Libraries.io for NPM](https://libraries.io/) [:heavy_check_mark:]
1. Package size
   - [Bundelphobia](https://bundlephobia.com/) [:heavy_check_mark:]
1. Download Count
   - [NPM Per month](https://npmcharts.com/) [:heavy_check_mark:]
1. Social
   - Github (Repo Stars, Fork) [:heavy_check_mark:]
   - twitter (Follow user/org) [:heavy_check_mark:]
1. Chat
   - [Gitter](https://gitter.im/) [:heavy_check_mark:]
   - [Spectrum](https://spectrum.chat/) [:heavy_check_mark:]
   - [Discord](https://discord.com/) [:heavy_check_mark:]

<br/>

### How it works?

1. It looks for different file in your project root directory. To decide what tools are you using. And generates badges based on it.

   e.g. If you have .travis.yml then it assumes you are using travis for CI/CD and it creates a dynamic badge for travis latest build status
   <br/>
   <br/>
   or
   <br/>
   <br/>
   if you have appveyor.yml then it assumes you are using appveyor for CI/CD and it creates a dynamic badge for appveyor latest build status

### Defaults

Badge Type | Default
-----------|---------------
Size       | Bundle phobia (if browser only package)
Size       | package phobia (if node only package e.g cli)