// stupid workaround for workers
export default {
    async fetch(_request){

        let indexHTMLReq = new Request("https://raw.githubusercontent.com/RealFX-Code/FoliaGetter/master/src/static/index.html");
        let indexHTML = fetch(indexHTMLReq)
            .then(async function(response){
                return await response.text();
            });

        return new Response(
            await indexHTML,
            {
                headers:{
                    "Content-Type":"text/html"
                }
            }
        );
    }
}