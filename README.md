# FoliaGetter

An API that I made to fetch a JAR of the latest Folia version.

You can check it out live at [fg.wtvr.cc](fg.wtvr.cc)

## But what's Folia?

A minecraft server software that has numerous performance gains over other software such as PaperMC, Spigot, Etc.

## Why did I make this?

Folia is still in it's very early stages and thus hasn't "officially" released.

PaperMC hasn't:
  - Made a public download for it
  - Labeled it as "publically available for download" (in a binary form)

So because of that, And the lack of a proper API call to fetch the latest version, I went ahead and made that.

## How to run this

FG runs on cloudflare workers with JS.

First install all packages locally:
```bash
$ cd <repo>
$ npm i
```

To run a dev server you have to run:
```bash
$ npm run start
# OR:
$ npx wrangler dev
```

# Enjoy!
