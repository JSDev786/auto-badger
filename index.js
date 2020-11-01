#! /usr/bin/env node

const badges = require("./src/badges");
const path = require('path');
const fs = require('fs/promises');
const { startPlaceholder, endPlaceholder } = require("./src/constants/strings");
async function autoBadger(input, cliArgs) {
    const readmePath = path.resolve(process.cwd(), 'README.md');
    const readmeBuffer = await fs.readFile(readmePath);
    const readmeContent = readmeBuffer.toString();
    const startPlaceholderIndex = readmeContent.indexOf(startPlaceholder);
    const endPlaceholderIndex = readmeContent.indexOf(endPlaceholder);
    if (startPlaceholderIndex === -1) {
        console.error("No placeholder found in markdown");
        return;
    }
    let allBadges = await Promise.all([
        badges.build.generate(),
        badges.version.generate(),
        badges.dependancies.generate(),
        badges.size.generate(),
        badges.downloads.generate(),
        badges.coverage.generate(),
        badges.github.generate(),
        badges.license.generate(),
        badges.twitter.generate(cliArgs.twitterUsername),
        badges.community.generate({
            communityProvider: cliArgs.communityProvider,
            communityId: cliArgs.communityName,
            communityServerUrl: cliArgs.communityServerUrl
        })
    ]);
    [
        buildBadge,
        versionBadge,
        dependanciesBadge,
        sizeBadge,
        downloadsBadge,
        coverageBadge,
        allContributersBadge,
        codeOfConduct,
        starsBadge,
        forkBadge,
        licenseBadge,
        twitterBadge,
        communityBadge
    ] = allBadges.flat(Infinity);
    const allBadgesString = [
        [
            buildBadge,
            versionBadge,
            sizeBadge,
            coverageBadge,
            licenseBadge
        ].filter(Boolean).join("\n"),
        [
            dependanciesBadge,
            downloadsBadge,
            allContributersBadge,
            codeOfConduct,
            communityBadge
        ].filter(Boolean).join("\n"),
        [
            starsBadge,
            forkBadge,
            twitterBadge
        ].filter(Boolean).join("\n")
    ].join("\n\n");
    console.log("Generated Badges Are");
    console.log(allBadgesString);
    // Replace placeholder in readme.md
    await fs.copyFile(readmePath, "readme.md.bk");
    try {
        await fs.truncate(readmePath, 0);
        await fs.appendFile(readmePath, readmeContent.slice(0, startPlaceholderIndex + startPlaceholder.length + 1));
        await fs.appendFile(readmePath, "\n\n" + allBadgesString);
        let contentToAppend;
        if (startPlaceholderIndex > -1 && endPlaceholderIndex > -1) {
            contentToAppend = readmeContent.slice(endPlaceholderIndex + endPlaceholder.length + 1, readmeContent.length);
        } else if (startPlaceholderIndex > -1) {
            contentToAppend = readmeContent.slice(startPlaceholderIndex + startPlaceholder.length + 1, readmeContent.length);
        }
        await fs.appendFile(readmePath, "\n\n" + `:clap: & :heart: to [auto badger](https://github.com/technikhil314/auto-badger) for making badging simple`)
        await fs.appendFile(readmePath, "\n\n" + endPlaceholder);
        await fs.appendFile(readmePath, "\n\n" + contentToAppend);
    } catch (err) {
        console.err(err);
        console.err("Sorry something is wrong you might want to report an issue.");
        await fs.copyFile("readme.md.bk", readmePath);
    } finally {
        await fs.unlink("readme.md.bk");
    }
}


module.exports = autoBadger;
