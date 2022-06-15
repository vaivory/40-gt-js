console.log();

class Page404 {
    render() {
        return '404 content'
    }
}
class PageHome {
    render() {
        return 'Home content'
    }
}

//susiejimas ka vartotojas gali parasyti
//ir ka mes tada darytume  (kuria klase kviesti)
const router = {
    '': PageHome,
    '404': Page404,
}

//vartotojo ivestas kelias
const trimmedPath = 'asd';

//reikiamos naudoti klases atranka
//kai 404 yra musu defaoult pasirinkimas
let pageClass = router['404']; //atranka kaip rasti busima naudoti klase
if (trimmedPath in router) {
    pageClass = router[trimmedPath];
}

//pagal rasta naudojimui klase yra kuriamas jos objektas
const pageObj = new pageClass(); //prasom suformuoti HTML
//ir tas objektas generuoja savo html turini
const HTML = pageObj.render(); //pieskis


//..spausdinam
console.log(pageClass);
console.log(pageObj);
console.log(HTML);
