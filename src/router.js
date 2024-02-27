import { Router } from 'itty-router';
import getIndexHTML from './getIndexHtml'
import getFoliaBuild from './getFoliaBuild';

// now let's create a router (note the lack of "new")
const router = Router();

// download
router.get('/api/download', (req) => {
	let response = getFoliaBuild.fetch(req);

	return response;
});

let indexPages = [
	"/index.html",
	"/"
];

indexPages.forEach(function(value){
	router.get(value,function(req){
		return getIndexHTML.fetch(req);
	})
})

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
