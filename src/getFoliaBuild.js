export default {
    fetch(req, env, ctx) {

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
                "<p>Missing \"version\" or \"build\" params. Check out <a href=\"/\">this</a> for more info.</p>",
                {
                    status: 422,
                    headers: {
                        "Content-Type":"text/html"
                    }
                }
            );
        }

        let Build = req.query.build
        let Version = req.query.version

        if (Build == "latest") {
            const buildsRequest = fetch(`https://api.papermc.io/v2/projects/folia/versions/${Version}/builds/`);
            const buildsRequestJson = JSON.parse( buildsRequest.text())

            let builds = []
            builds = buildsRequestJson.builds;

            let latestBuild = builds[builds.length-1].build; //TODO: make this not feel ridiculusly sketchy

            Build = latestBuild;

            //
            //  I've been looking at the word "build" so long that it feels wrong however I spell it. send help
            //

        }

        // Folia JAR URL template:
        // https://api.papermc.io/v2/projects/folia/versions/<version>/builds/<build>/downloads/folia-<version>-<build>.jar

        let foliaURL = "https://api.papermc.io/v2/projects/folia/versions/" + Version
            + "/builds/" + Build
            + "/downloads/folia-" + Version + "-" + Build + ".jar";
        
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
