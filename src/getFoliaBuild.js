export default {
    async fetch(req, env, ctx) {

        let requiredParams = [
            "version",
            "build"
        ];

        let missingParams = false;
        
        requiredParams.forEach(function(value){
            if(!req.query[value]) {
                missingParams = true;
            }
        });

        if (missingParams){
            return new Response(
                "<p>Missing \"version\" or \"build\" params. Check out <a href=\"/\">this</a> for more information on using FoliaGetter.</p>",
                {
                    status: 422,
                    headers: {
                        "Content-Type":"text/html"
                    }
                }
            );
        }

        let foliaBuild = req.query.build
        let foliaVersion = req.query.version

        if (foliaBuild == "latest") {
            const buildsRequest = new Request(`https://api.papermc.io/v2/projects/folia/versions/${foliaVersion}/builds/`);
            const buildsResponse = await fetch(buildsRequest)
                .then(function(response){
                    if(!response.ok) {
                        throw new Error(`HTTP Error. Code: ${response.status}`);
                    }
                    return response.text();
                })
                .then(function(response){
                    return JSON.parse(response);
                });

            let builds = []
            builds = buildsResponse.builds;

            let latestBuild = builds[builds.length-1].build; //TODO: make this not feel ridiculusly sketchy

            foliaBuild = latestBuild;

            //
            //  I've been looking at the word "build" so long that it feels wrong however I spell it. send help
            //

        }

        // Folia JAR URL template:
        // https://api.papermc.io/v2/projects/folia/versions/<version>/builds/<build>/downloads/folia-<version>-<build>.jar

        let foliaURL = "https://api.papermc.io/v2/projects/folia/versions/" + foliaVersion
            + "/builds/" + foliaBuild
            + "/downloads/folia-" + foliaVersion + "-" + foliaBuild + ".jar";
        
        return new Response(
            "Moved",
            {
                status: 302,
                headers: {
                    Location: foliaURL
                }
            }
        );
	},
};
