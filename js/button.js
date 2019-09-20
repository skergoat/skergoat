$(window).bind("load", function() {
    class e {
        constructor(e) {
            this.element = e, this.data_url = $(e).attr("data-url"), this.position = $(this.data_url).position(), this.left = this.position.left, this.top = $(this.data_url).offset().top
        }
        down() {
            var e = $(this.data_url + " .page").height();
            $("#main-2").css({
                "max-height": e + "px",
                height: e + "px"
            }), $("html, body").animate({
                scrollLeft: this.left + "px"
            }, 0).animate({
                scrollTop: this.top + "px"
            }, 300), $("body").addClass("offWheel");
            $(window).width();
            document.ontouchmove = function(e) {
                return !0
            }, $("body").css("touch-action", "auto")
        }
        up() {
            $("#main-2").animate({
                position: "absolute",
                "z-index": "100000000",
                left: this.left
            }, 0), $("html, body").animate({
                scrollLeft: this.left + "px"
            }, 0).animate({
                scrollTop: this.top + "px"
            }, 300), $("body").removeClass("offWheel"), $(window).width() <= 500 && (document.ontouchmove = function(e) {
                e.preventDefault()
            }, $("body").css("touch-action", "none"))
        }
    }
    $(".QuiSuisJe").hide(0), $(".down").click(function() {
        $("#main-2").css("display", "flex");
        var s = $("body").attr("id");
        $(".QuiSuisJe").not("#sublink_" + s).hide(0), $("#sublink_" + s).show(0), "#sub-1" == $(this).attr("data-url") && $("#span-info").addClass("who");
        var t = $(this).attr("data-url");
        $(".sub").not(t).css("display", "none"), $(t).css("display", "block"), $("#info-name").text(t);
        var n = new e(this);
        if ($(".hamburger").hasClass("responsive")) {
            if ($(".hamburger").toggleClass("responsive"), $(window).width() > 780) var a = 90;
            else a = 55;
            $("nav").animate({
                height: a + "px"
            }, 0), $(".hamburger").css("transition", "0s ease-in-out").css("margin-top", "-=10px"), $("#slice-1").css("transition", "0s ease-in-out").css("transform", "rotate(0deg) translateY(0px)"), $("#slice-2").css("transition", "0s ease-in-out").css("transform", "translateX(0px)").fadeIn(0), $("#slice-3").css("transition", "0s ease-in-out").css("transform", "rotate(0deg) translateY(0px)")
        }
        if ($("nav").animate({
                position: "relative",
                top: "-120px"
            }, 300), $("footer").animate({
                position: "relative",
                bottom: "-50px"
            }, 300), $(".bulle-container").css("transition", "0s").animate({
                opacity: "0"
            }, 200), $(".skill-container").animate({
                opacity: "0"
            }, 200), $(".scroll-container").animate({
                opacity: "0"
            }, 200), $(".allons-y-container").animate({
                opacity: "0"
            }, 200), $("#go-left").animate({
                left: "-100px"
            }, 200), $("#go-right").animate({
                right: "-100px"
            }, 200), $(this).hasClass("skill-box")) {
            switch ($(this).attr("id")) {
                case "code":
                    var i = "Code";
                    $("#section-2-subtitle-1").hide(), $("#section-2-subtitle-2").text("Trouvons l’outil le mieux adapté à vos besoins.");
                    var o = "Wordpress",
                        r = "« From Scratch »",
                        u = "Wordpress est un site clé en main, maintenable sans écrire la moindre ligne de code et par n’importe qui. <span class='strong'>Ideal si vous êtes néophyte !</span>",
                        l = "Dans Wordpress vous customisez vous-même les pages, les couleurs, les polices, etc. et bien sur vous créez votre propre contenu. <span class='strong'>C’est l’outil parfait pour créer son blog !</span>",
                        p = "Wordpress est livré avec un ou plusieurs designs de qualité professionnelle. Vous choisissez celui qui vous plait et remplacez les logos, les images et les textes par les vôtres. <span class='strong'>Idéal pour créer rapidement de belles vitrines d’entreprise  !</span>",
                        c = "<span class='strong'>Mais Wordpress à une courbe d’apprentissage qui peut vous décourager si vous n’y connaissez rien.</span>",
                        d = "Lorsque vous savez déjà vous en servir, vous découvrez <span class='strong'>qu’il n’est pas possible de modifier les thèmes en profondeur sans avoir de bonnes connaissances en code.</span>";
                    $("#section-2-p6").css("display", "inline-block").html('<span class="strong">Je vous apporte mon aide pour créer un site de zéro ou apporter toutes les modifications que vous souhaitez a un thème existant.</span>'), $("#section-2-p7").css("display", "inline-block").html('<span class="strong">Je travaille avec Divi, l’un des thèmes Wordpress les plus puissants qui permet de créer n’importe quel design en un temps record !</span>');
                    var m = "<span class='strong'>« From sratch »  signifie « partir de zéro »</span>. Travailler « from scratch » c’est donc coder un site par soi-même.",
                        v = "<span class='strong'>Autant dire que pour cela, il faut être calé en code</span>. C’est pourquoi la plupart des gens choisissent d’utiliser Wordpress qui ne demande aucune connaissance particulière.",
                        h = "Mais travailler « from scratch » a plein d'avantages. <span class='strong'>D’abord il permet d’être libre dans sa manière de travailler</span>. Wordpress peut être assez contraignant et il arrive qu’on s’arrache les cheveux pour changer un petit détail. Travailler avec votre propre code, permet au contraire de toujours savoir ou on en est.",
                        g = "<span class='strong'>De plus travailler « from scratch » permet de construire un site sophistiqué, avec des fonctionnalités innovantes</span>. Génial si vous voulez lancer un nouveau business digital !";
                    $("#section-2-p12").css("display", "block").html('<span class="strong">Je développe vos applications en HTML, javascript et PHP, seul ou en collaboration avec vos équipes, avec ou sans framework.</span>'), $("#round-p").css("text-align", "justify").html("Etes vous plutôt Wordpress ou « from scratch » ? Voulez-vous construire un blog, une vitrine pour votre entreprise ou créer une application innovante ? Si vous avez fait votre choix ou avez besoin d’un conseil, ");
                    break;
                case "design":
                    i = "Design";
                    $("#section-2-subtitle-1").show().text("Pour créer un style à votre image"), $("#section-2-subtitle-2").text("nous avons besoin :");
                    o = "D’une maquette", r = "Qu’il soit « responsive » ", u = "Rien à voir avec une maquette d’architecte ! Et pourtant ça y ressemble : de même que <span class='strong'>la maquette d’un bâtiment est un prototype à petite échelle, de même la maquette est le prototype visuel d’un site.</span>", l = "Pour la créer, le designer utilise des images et des dessins faits par ordinateurs. Il simule ainsi l’apparence de votre futur site pour vous en donner une idée aussi précise que possible. <span class='strong'>Pour vous, la maquette a donc un avantage : elle permet de définir votre identité visuelle avec précision.</span>", p = "<span class='strong'>La maquette est aussi très utile au développeur web </span>: elle lui donne une idée précise de ce qu’il va coder et lui évite d’ « improviser » son design au dernier moment. Pour vous c’est l’assurance que votre identité visuelle sera respectée.", c = "<span class='strong'>Mais les services d’un designer sont souvent très chers</span> et seules les entreprises ont les moyens de se les offrir.", d = "<span class='strong'>Si vous travaillez sur Wordpress, vous n’aurez sans doute pas besoin d’un designer</span>. Les themes sont souvent biens faits et suffisent dans la plupart des cas. ";
                    $("#section-2-p6").css("display", "inline-block").html('<span class="strong">Mais si vous souhaitez créer votre design ou votre thème personnalisé, vous aurez sans doute besoin d’aide.</span>'), $("#section-2-p7").css("display", "inline-block").html('<span class="strong">Je vous accompagne dans la création de votre identité visuelle et réalise votre maquette. Je me sers d’outils puissants comme Adobe XD qui permettent d’obtenir un résultat rapide et professionnel.</span>');
                    m = "« Responsive » veut dire « adaptable » en anglais. <span class='strong'>Un design « responsive » veut dire qu’il s’adapte à différents format d’écrans (smartphone, tablette, etc.).</span>", v = "<span class='strong'>Autrefois, l’ordinateur était le seul moyen de consulter internet</span>.  On ne prêtait alors aucune attention aux éventuels changements de taille des écrans. Ainsi lorsqu’on réduisait la taille du navigateur, le site sortait de la page et le design pouvait sauter.", h = "<span class='strong'>Mais aujourd’hui les choses ont changées : le smartphone a remplacé l’ordinateur pour la consulation d’internet et les designers ont dû suivre</span>. Ils ont donc créé un design « responsive », adaptable aux différentes tailles d’écrans. Verifiez vous-mêmes : si vous reduisez la taille de cette page, vous verrez que mon site s’adapte parfaitement.", g = "On comprend qu’aujourd’hui, la première exigence des clients est d’avoir un site responsive. <span class='strong'>Pour ma part cela va tellement de soi que « site web » et « responsive » sont parfaitement synonymes !</span>";
                    $("#section-2-p12").css("display", "none"), $("#round-p").css("text-align", "justify").html("Vous souhaitez un design à votre image, qui reste beau sur les différentes tailles d’écran ? N’attendez plus :");
                    break;
                case "seo":
                    i = "SEO";
                    $("#section-2-subtitle-1").show().text("Ou « référencement » en français."), $("#section-2-subtitle-2").text("J’y contribue par :");
                    o = "Un code adapté", r = "Un contenu pertinent", u = "A quoi sert d’avoir un site web si personne ne le voit ? Ça semble tellement évident que bon nombre de gens croient que développeur web et spécialiste du référencement c’est la même chose. <span class='strong'>Mais coder un site et booster votre position sur Google sont deux métiers très différents !</span> L’un demande de parler un langage informatique pointu et l’autre de savoir ruser avec les robots de Google. Rien à voir !", l = "Pourtant il y a certaines choses qu’un développeur comme moi peut faire :", p = "<span class='strong'>- créer un site qui charge vite</span>. Google adore les sites rapides. Ainsi plus le site est « léger » (code simple et efficace, poids des images réduit, utilisation d’un CDN, etc.), plus il a des chances d’être bien référencé !", c = "<span class='strong'>- utiliser des « balises » dédiées</span>. Une balise HTML est un petit drapeau qui indique le positionnement (haut, bas, etc.) et la nature des éléments d’une page (titre, paragraphe, citation, etc). Placer ces balises permet a Google de repérer plus facilement vos mots clés. Par ex. La balise « titre » indique à Google le mot le plus important de votre page. Elle doit donc être utilisée avec soin. Il en va de même des balises schéma.org qui identifient plus précisément les éléments de votre page.", d = "<span class='strong'>- utiliser Wordpress (car Google aime le code de Wordpress) et ajouter des plugins dédiés comme Yoats SEO</span>.";
                    $("#section-2-p6").css("display", "none"), $("#section-2-p7").css("display", "none");
                    m = "Si vous vous êtes déjà intéressés au web, vous avez sans doute entendu parler des fameux « mots clés ». Lorsqu’un utilisateur fait une recherche sur Google, ce dernier va analyser les mots de la recherche et trouver les pages qui les contiennent. <span class='strong'>Un mot clé est donc le moyen de dire à Google que vous êtes la meilleure réponse à la question d’un utilisateur.</span>", v = "Cela prend toute son importance lorsqu’on crée un business en ligne, car <span class='strong'>trouver les bons mots-clés c’est s’assurer que Google va nous amener les bons clients</span>, c’est-à-dire ceux qui constituent notre cible. Pour prendre un exemple grossier, si je suis opticien j’ai tout intérêt à placer « lunette » dans une de mes pages, car il y a fort à parier que les utilisateurs qui cherchent un opticien tapent « lunette » dans Google. Dans la réalité les choses sont plus complexes évidemment. Mais cela nous donne une petite idée de l’importance des mots-clés !", h = "<span class='strong'>Mais le référencement est un métier et le meilleur moyen d’être bien placé sur Google est de faire appel à un professionnel</span>. Malheureusement ils sont souvent très chers et seules les entreprises ont les moyens de se les payer.", g = "Pourtant, à mon niveau, je peux vous apporter une aide. Ancien professeur de philosophie, j’ai des facilités pour organiser, exprimer et clarifier mes idées. Pendant 10 ans, j’ai corrigé et affiné mon expression écrite. <span class='strong'>Je peux vous aider à créer un contenu qui ne nuise pas à votre visibilité ou qui, dans le meilleur des cas, y soit favorable.</span>";
                    $("#section-2-p12").css("display", "none"), $("#round-p").css("text-align", "center").html("Vous souhaitez un site qui se voit sur Google ? <br>N’attendez plus :");
                    break;
                case "ecoute":
                    i = "Ecoute";
                    var f = "C’est votre premier site web et vous ne savez pas encore comment vous y prendre ? Mon rôle est de vous accompagner et de répondre à toutes vos questions.",
                        b = "Ne venant pas moi-meme du monde du web, je n’ai pas l’impatience des informaticiens qui ne comprennent pas qu’on ne comprenne pas. Je suis capable de me mettre à votre place et de vous entendre.",
                        q = "Pour cela il faut que nous créions dès le départ un dialogue constructif et cordial. De mon côté, je me mets à votre disposition et suis ouvert à toutes vos remarques.  Du votre, vous me dites tout ce que vous pensez, avec franchise et simplicité. Si, à la fin de notre travail, « site web » rime pour vous avec « sérénité », ma mission sera accomplie !";
                    break;
                case "qualite":
                    i = "Qualité", f = "Par nature je ne me vends pas, je donne ce que je suis. Lorsque je fais un site web, je m’investis complètement dans la production d’un résultat impeccable. Tous mes travaux sont conçus, façonnés, ouvragés avec soin. Ce que j’aime par-dessus tout : voir la satisfaction du client.", b = "La qualité ne repose pas seulement sur l’engagement mais aussi sur la compétence. Je maitrise les principaux langages et les dernières technologies du web. Du HTML au PHP en passant par Ajax et JQuery, mais aussi l’utilisation de frameworks ou de Wordpress, j’ai les outils pour répondre à tous vos besoins.", q = "Vous ne connaissez rien au web et ce que je dis ne vous parle pas ? Je vous invite a découvrir mon portfolio. Je suis sur que ça suffira pour vous convaincre.";
                    break;
                case "dispo":
                    i = "Disponibilité", f = "Vous avez besoin de temps pour concevoir votre site web mais l’inspiration vous vient au coup par coup ? Ça tombe bien : je suis disponible pour échanger avec vous 24h/ 24 et 7j/ 7.", b = "Quand j’étais enseignant, ce qui me frustrait était qu’on nous poussait à faire nos journées, sans plus, en attendant les vacances. Pour ma part, j’étais incapable de compter mes heures car mon travail me passionnait. C’est la même chose dans le développement web. Tout nouveau projet me stimule, me passionne. Qu’il soit petit ou grand, c’est toujours un défi à relever et je ne peux pas m’arrêter avant d’être arrivé au bout.", q = "Ainsi que vous ayez ou non du temps à consacrer à votre projet, je serai toujours disponible pour en parler avec vous. Et pour cause : chaque fois que vous me faites une remarque vous faites avancer mon travail. Alors n’hésitez plus : contactez-moi dès maintenant et commençons à travailler ensemble !"
            }
            $("#section-2-titre").text(i), $("#paragraph-title-2-1").html(o), $("#paragraph-title-2-2").html(r), $("#section-2-p1").html(u), $("#section-2-p2").html(l), $("#section-2-p3").html(p), $("#section-2-p4").html(c), $("#section-2-p5").html(d), $("#section-2-p8").html(m), $("#section-2-p9").html(v), $("#section-2-p10").html(h), $("#section-2-p11").html(g), $("#section-3-titre").text(i), $("#section-3-p1").text(f), $("#section-3-p2").text(b), $("#section-3-p3").text(q)
        }
        return setTimeout(function() {
            n.down(), $("#go-left").css({
                display: "none"
            }, 200), $("#go-right").css({
                display: "none"
            }, 200)
        }, 300), setTimeout(function() {
            $("#main").css("display", "none"), $("html, body").animate({
                scrollTop: $("#main-2").offset().top
            }, 0)
        }, 600), !1
    }), $(".up").click(function() {
        $("#main").css("display", "flex"), $("html, body").animate({
            scrollTop: $("#main-2").offset().top
        }, 0);
        var s = $(this).attr("id");
        return setTimeout(function() {
            "sublink_6" == s && ($(".inputs").removeClass("active"), $("#input-1").addClass("active"))
        }, 300), $("#info-name").text(""), new e(this).up(), setTimeout(function() {
            $("#span-info").removeClass("who"), $("nav").animate({
                position: "relative",
                top: "0px"
            }, 300), $("footer").animate({
                position: "relative",
                bottom: "0px"
            }, 300), $(".bulle-container").animate({
                opacity: "1"
            }, 200), $(".skill-container").animate({
                opacity: "1"
            }, 200), $(".scroll-container").animate({
                opacity: "1"
            }, 200), $(".allons-y-container").animate({
                opacity: "1"
            }, 200), $("#go-left").css("display", "block").css({
                left: "0px"
            }), $("#go-right").css("display", "block").css({
                right: "0px"
            }), $(".slide-mobile").show(200), $(window).width() > 780 && $("nav").animate({
                height: "90px"
            }, 0), $(".sub").css("display", "block"), $("#main-2").animate({
                position: "absolute",
                "z-index": "1",
                left: "0px"
            }, 0).animate({
                position: "relative"
            }, 0).css("display", "none")
        }, 300), !1
    })
});