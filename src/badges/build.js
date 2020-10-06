const types = require("../constants/types");
const { detectRepoUrl } = require("../helpers/detectRepoUrl");
const { detectType } = require("../helpers/detectType")
const { parseRepoUrl } = require("../helpers/parseRepoUrl");
const { ciProviders } = require("../constants/provierConstants");

exports.generate = async function () {
    const [{ type, ...rest }, repoUrl] = await Promise.all([detectType(ciProviders, "CI"), detectRepoUrl()]);
    const { repoOwner, repoName } = parseRepoUrl(repoUrl);
    switch (type) {
        case types.TRAVIS:
            return `[![Build Status](https://img.shields.io/travis/${repoOwner}/${repoName}.svg?style=flat-square&color=%23007a1f)](https://travis-ci.org/${repoOwner}/${repoName})`
        case types.GITHUB:
            return `[![Build Status](https://github.com/${repoOwner}/${repoName}/workflows/${rest.jobName}/badge.svg?branch=master)](https://github.com/${repoOwner}/${repoName}/actions)`
        case types.APPVEYOR:
            return `[![Build Status](https://img.shields.io/appveyor/build/${repoOwner}/${repoName})](https://ci.appveyor.com/api/projects/status/github/${repoOwner}/${repoName})`
        case types.CIRCLECI:
            return `[![Build Status](https://circleci.com/gh/${repoOwner}/${repoName}.svg?style=svg)](https://circleci.com/gh/${repoOwner}/${repoName})`
        default:
            console.error("Could not find any CI related configuration. Skipping it...")
            return '';
    }
}