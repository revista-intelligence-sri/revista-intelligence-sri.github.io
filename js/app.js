function onPrompt(a) {
   termen = a;
   mainView.loadPage('cauta.html');
}

function showPrompt() {
    var s = prompt("Cauta");
	if (s != null) {
   		onPrompt(s);
	} 
}

function goArt() {
    ga != 0 && mainView.loadPage('index.html');
}

function getArticol(b) {
    var a = compiledArticol(b);
    $$('.articolcontainer').html(a), $$('.newpreloader').remove();
}

function getArticolData() {
    $$.get(base + 'get_post&post_id=' + id, function(a) {
        obja = JSON.parse(a), getArticol(obja);
    });
}

function sendemail() {
    var a = $$('.titluarticol').text();
    var b = $$('.content-block-inner').text();
    document.location.href = 'mailto:?subject=' + a + '&body=' + b;
}

function getArticles(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.unu').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getData(a) {
    $$.get(base + 'get_recent_posts&page=' + a + '&count=10', function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticles(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.unu').css('display', 'none'));
    });
}

function getArticlesC2(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.doi').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataC2(a) {
    $$.get(base + 'get_category_posts&id=6&count=10&page=' + a, function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticlesC2(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.doi').css('display', 'none'));
    });
}

function getArticlesC3(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.trei').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataC3(a) {
    $$.get(base + 'get_category_posts&id=4&count=10&page=' + a, function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticlesC3(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.trei').css('display', 'none'));
    });
}

function getArticlesC4(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.patru').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataC4(a) {
    $$.get(base + 'get_category_posts&id=8&count=10&page=' + a, function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticlesC4(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.patru').css('display', 'none'));
    });
}

function getArticlesC5(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.cinci').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataC5(a) {
    $$.get(base + 'get_category_posts&id=3&count=10&page=' + a, function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticlesC5(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.cinci').css('display', 'none'));
    });
}

function getArticlesC6(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.sase').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataC6(a) {
    $$.get(base + 'get_category_posts&id=5&count=10&page=' + a, function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticlesC6(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.sase').css('display', 'none'));
    });
}

function getArticlesC7(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.sapte').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataC7(a) {
    $$.get(base + 'get_category_posts&id=7&count=10&page=' + a, function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticlesC7(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.sapte').css('display', 'none'));
    });
}

function getArticlesC8(b) {
    var a = compiledArticles(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.opt').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataC8(a) {
    $$.get(base + 'get_category_posts&id=2&count=10&page=' + a, function(a) {
        obj = JSON.parse(a), obj.count > 0 ? getArticlesC8(obj) : ($$('.infinite-scroll-preloader').css('display', 'none'), $$('.opt').css('display', 'none'));
    });
}

function getArticlesCauta(b) {
    var a = compiledCauta(b);
    $$('.lst ul').append(a), $$('.infinite-scroll-preloader').css('display', 'none'), $$('.ccauta').css('display', 'block'), $$('.meniu').on('click', 'li', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}

function getDataCauta(a) {
    $$.get(base + 'get_search_results&search=' + termen + '&count=10', function(a) {
        obj = JSON.parse(a), getArticlesCauta(obj);
    });
}

function onBackKeyDown() {
    $$('.back').click();
}
var base = 'http://ri.sri.ro/api/?json=';
var myApp = new Framework7({
    template7Pages: !0
});
var $$ = Framework7.$;
var id = null;
var status = null;
var category = null;
var termen = null;
var x = 1;
var ga = 0;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: !0,
    animatePages: !1,
    swipeBackPage: !1,
    swipeout: !1
});
var acasatemp = $$('#acasatemp').html();
var compiledAcasa = Template7.compile(acasatemp);
var articles = $$('#listaarticole').html();
var compiledArticles = Template7.compile(articles);
var articoltemp = $$('#articoltemp').html();
var compiledArticol = Template7.compile(articoltemp);
var cautatemp = $$('#cautatemp').html();
var compiledCauta = Template7.compile(cautatemp);
$$.get(base + 'get_recent_posts&count=5', function(c) {
    var a = JSON.parse(c);
    var b = compiledAcasa(a);
    $$('.acasa').html(b), mySlider = myApp.slider('.slider-container', {
        pagination: '.slider-pagination'
    }), $$('.slider-slide').on('click', function() {
        var a = $$(this);
        id = a.attr('id'), mainView.loadPage('articol.html');
    });
}), myApp.onPageInit('index', function(a) {
    $$.get(base + 'get_recent_posts&count=5', function(c) {
        var a = JSON.parse(c);
        var b = compiledAcasa(a);
        $$('.acasa').html(b), mySlider = myApp.slider('.slider-container', {
            pagination: '.slider-pagination'
        }), $$('.slider-slide').on('click', function() {
            var a = $$(this);
            id = a.attr('id'), mainView.loadPage('articol.html');
        }), p = 1;
    });
}), myApp.onPageAfterAnimation('index', function(a) {
    ga = 0;
}), myApp.onPageInit('articol', function(a) {
    $$('.trimiteemail').on('click', function() {
        sendemail();
    }), status = 'no', status2 = 'no', status3 = 'no', status4 = 'no', status5 = 'no', status6 = 'no', status7 = 'no', status8 = 'no', cstatus = 'no';
}), myApp.onPageAfterAnimation('articol', function(a) {
    getArticolData();
}), myApp.onPageInit('lista', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.unu').css('display', 'none'), status = 'ok';
    var a = 1;
    $$('.unu').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getData(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('lista', function(a) {
    if (status == 'no') {
        status = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.unu').css('display', 'block');
        return;
    }
    getData(1), ga = 1;
}), myApp.onPageInit('categoria2', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.doi').css('display', 'none'), status2 = 'ok';
    var a = 1;
    $$('.doi').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataC2(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('categoria2', function(a) {
    if (status2 == 'no') {
        status2 = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.doi').css('display', 'block');
        return;
    }
    getDataC2(1), ga = 1;
}), myApp.onPageInit('categoria3', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.trei').css('display', 'none'), status3 = 'ok';
    var a = 1;
    $$('.trei').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataC3(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('categoria3', function(a) {
    if (status3 == 'no') {
        status3 = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.trei').css('display', 'block');
        return;
    }
    getDataC3(1), ga = 1;
}), myApp.onPageInit('categoria4', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.patru').css('display', 'none'), status4 = 'ok';
    var a = 1;
    $$('.patru').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataC4(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('categoria4', function(a) {
    if (status4 == 'no') {
        status4 = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.patru').css('display', 'block');
        return;
    }
    getDataC4(1), ga = 1;
}), myApp.onPageInit('categoria5', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.cinci').css('display', 'none'), status5 = 'ok';
    var a = 1;
    $$('.cinci').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataC5(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('categoria5', function(a) {
    if (status5 == 'no') {
        status5 = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.cinci').css('display', 'block');
        return;
    }
    getDataC5(1), ga = 1;
}), myApp.onPageInit('categoria6', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.sase').css('display', 'none'), status6 = 'ok';
    var a = 1;
    $$('.sase').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataC6(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('categoria6', function(a) {
    if (status6 == 'no') {
        status6 = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.sase').css('display', 'block');
        return;
    }
    getDataC6(1), ga = 1;
}), myApp.onPageInit('categoria7', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.sapte').css('display', 'none'), status7 = 'ok';
    var a = 1;
    $$('.sapte').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataC7(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('categoria7', function(a) {
    if (status7 == 'no') {
        status7 = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.sapte').css('display', 'block');
        return;
    }
    getDataC7(1), ga = 1;
}), myApp.onPageInit('categoria8', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.opt').css('display', 'none'), status8 = 'ok';
    var a = 1;
    $$('.opt').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataC8(a);
    }), ga = 1;
}), myApp.onPageAfterAnimation('categoria8', function(a) {
    if (status8 == 'no') {
        status8 = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.opt').css('display', 'block');
        return;
    }
    getDataC8(1);
}), myApp.onPageInit('cauta', function(b) {
    $$('.infinite-scroll-preloader').css('display', 'block'), $$('.ccauta').css('display', 'none'), cstatus = 'ok';
    var a = 1;
    $$('.ccauta').on('click', function() {
        $$('.infinite-scroll-preloader').css('display', 'block'), a += 1, getDataCauta(a);
    });
}), myApp.onPageAfterAnimation('cauta', function(a) {
    if (cstatus == 'no') {
        cstatus = 'ok', $$('.infinite-scroll-preloader').css('display', 'none'), $$('.ccauta').css('display', 'block');
        return;
    }
    getDataCauta(1);
}), document.addEventListener('backbutton', onBackKeyDown, !1);