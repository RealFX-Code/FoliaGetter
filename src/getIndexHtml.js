// stupid workaround for workers
export default {
    async fetch(_request){
        return new Response(
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="FoliaGetter's Documentation">
            <title>
                FoliaGetter docs
            </title>
            <style>
                body {
                    color-scheme: light dark;
                }
                code {
                    background-color: #242424;
                    color: #efefef;
                    padding: 8px;
                }
            </style>
        </head>
        <body>
            <h1>
                FoliaGetter how-to
            </h1>
            <hr>
            <div>
                <h2>
                    What's Folia?
                </h2>
                <p>
                    Folia is a minecraft server software that's more performant than alternatives like Spigot, Paper, etc.
                    Most importantly featuring improved multithreading.
                </p>
            </div>
            <hr>
            <div>
                <h2>
                    FoliaGetter example
                </h2>
                <p>
                    to get a folia jar for version 1.20.4 with the latest available build:
                </p>
                <code>
                    https://fg.wtvr.cc/download?version=1.20.4&build=latest
                </code>
                <ul>
                    <li>
                        In the build query you can replace "build" with a specific build you want to download.
                    </li>
                    <li>
                        You can also replace the version query with your desired version.
                    </li>
                </ul>
            </div>
            <hr>
            <div>
                <h2>
                    Where to find Folia's available versions/builds
                </h2>
                <p>
                    To check the available versions available for Folia go to:
                </p>
                <code>
                    https://api.papermc.io/v2/projects/folia/
                </code>
                <p>
                    You can also check the available builds for a specific version at:
                </p>
                <code>
                    https://api.papermc.io/v2/projects/folia/versions/&lt;version&gt;/builds/
                </code>
            </div>
        </body>
    </html>
    `,{headers:{"Content-Type":"text/html"}});
    }
}