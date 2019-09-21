$(window).bind("load", function() {
    class Button {

        constructor(element) {

            this.element = element;
            this.data_url = $(element).attr('data-url');
            this.position = $(this.data_url).position();
            this.left = this.position.left;
            this.top = $(this.data_url).offset().top;
            this.width = $(window).width();
        }

        down() {

            // resize height 

            var height = $(this.data_url + ' .page').height();
            $('#main-2').css({'max-height': (height) + 'px', 'height':height + 'px'});

            // got to 

            var speed;

            if(this.width > 450) {

                speed = 300;
            }
            else {
                
                speed = 0;

            }

            $('html, body').animate({ 
                                scrollLeft:this.left + "px",
                            }, 0)
                            .animate({ 
                                scrollTop:this.top + "px"
                            }, speed);


            // disable scroll
            $('body').addClass('offWheel');

            document.ontouchmove = function(e){ return true; }
            $('body').css('touch-action', 'auto');

            // if(this.width <= 450) { 

            $('body').css('overflow', 'scroll');
            // }

        }

        up() {

            // go at the wright section 

            $('#main-2').animate({'position':'absolute','z-index':'100000000', 'left': this.left}, 0);

            var speed;

            if(this.width > 450) {

                speed = 300;
            }
            else {

            speed = 0;

            }

            $('html, body').animate({ 
                                scrollLeft:this.left + "px",
                            }, 0)
                            .animate({ 
                                scrollTop:this.top + "px"
                            }, speed);

            // disable scroll
            $('body').removeClass('offWheel');
            // $('body').css('overflow', 'hidden');
            
            var width = $(window).width();

            if(width <= 500) {

                // disable scroll on IOS 
                document.ontouchmove = function(e){ e.preventDefault(); }
                // disable scroll on android 
                    $('body').css('touch-action', 'none');

                if(this.width <= 450) {

                    $('body').css('overflow', 'hidden');

                } 

            }
            
        }

    }

    $('.QuiSuisJe').hide(0);

    $('.down').click(function() {

        // enable #main 2 

        $('#main-2').css('display', 'flex');

        // show #sub-1 up button 

        // $('.QuiSuisJe').hide(0);
        var body_id = $('body').attr('id');

        $('.QuiSuisJe').not('#sublink_' + body_id).hide(0);
        $('#sublink_' + body_id).show(0);

        // prepare #sub-1 resize 

        if($(this).attr('data-url') == '#sub-1') {

            $('#span-info').addClass('who');
        }

        // enable wright sub

        var data_url = $(this).attr('data-url');

        $('.sub').not(data_url).css('display', 'none');
        $(data_url).css('display', 'block');

        // prepare resize

        $('#info-name').text(data_url);

        // go down 

        var button = new Button(this);

        // close menu responsive 

        if($('.hamburger').hasClass('responsive')) {

            $('.hamburger').toggleClass('responsive');

            var width = $(window).width();

            if(width > 780) {

                var navHeight = 90;
            }
            else {

                var navHeight = 55;
            }

            $('nav').animate({'height': navHeight + 'px'}, 0);

            // toggle button

            $('.hamburger').css('transition', '0s ease-in-out').css('margin-top', '-=10px');
            $('#slice-1').css('transition', '0s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');
            $('#slice-2').css('transition', '0s ease-in-out').css('transform', 'translateX(0px)').fadeIn(0);
            $('#slice-3').css('transition', '0s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');
        }

        // hide buble

        $('nav').animate({'position':'relative', 'top':'-120px'}, 300);
        $('footer').animate({'position':'relative', 'bottom':'-50px'}, 300);
        $('.bulle-container').css('transition', '0s').animate({'opacity': '0'}, 200);
        $('.skill-container').animate({'opacity':'0'}, 200);
        $('.scroll-container').animate({'opacity':'0'}, 200);
        $('.allons-y-container').animate({'opacity':'0'}, 200);
        // slide buttons

        if(width > 450) {

            $('#go-left').animate({'left':'-100px'}, 200);
            $('#go-right').animate({'right':'-100px'}, 200);
        }
        else {

            $('#go-left').css({'transition':'0.2s', 'right':'-100px'});
            $('#go-right').css({'transition':'0.2s', 'right':'-100px'});
        }

        // section 2 and 3 content 

        if($(this).hasClass('skill-box')) {

            var skill_box_id = $(this).attr('id');

            switch(skill_box_id) {

                case "code" :
                var sectionTitre = "Code";
                $('#section-2-subtitle-1').hide();
                $('#section-2-subtitle-2').text("Trouvons l’outil le mieux adapté à vos besoins.");

                var paragraph_title = "Wordpress";
                var paragraph_title_2 = "\« From Scratch \»";

                var section_2_p1 = "Wordpress est un site clé en main, maintenable sans écrire la moindre ligne de code et par n’importe qui. <span class='strong'>Ideal si vous êtes néophyte !</span>";
                var section_2_p2 = "Dans Wordpress vous customisez vous-même les pages, les couleurs, les polices, etc. et bien sur vous créez votre propre contenu. <span class='strong'>C’est l’outil parfait pour créer son blog !</span>";
                var section_2_p3 = "Wordpress est livré avec un ou plusieurs designs de qualité professionnelle. Vous choisissez celui qui vous plait et remplacez les logos, les images et les textes par les vôtres. <span class='strong'>Idéal pour créer rapidement de belles vitrines d’entreprise  !</span>";
                var section_2_p4 = "<span class='strong'>Mais Wordpress à une courbe d’apprentissage qui peut vous décourager si vous n’y connaissez rien.</span>";
                var section_2_p5 = "Lorsque vous savez déjà vous en servir, vous découvrez <span class='strong'>qu’il n’est pas possible de modifier les thèmes en profondeur sans avoir de bonnes connaissances en code.</span>";
                $('#section-2-p6').css('display', 'inline-block').html('<span class="strong">Je vous apporte mon aide pour créer un site de zéro ou apporter toutes les modifications que vous souhaitez a un thème existant.</span>');
                $('#section-2-p7').css('display', 'inline-block').html('<span class="strong">Je travaille avec Divi, l’un des thèmes Wordpress les plus puissants qui permet de créer n’importe quel design en un temps record !</span>');

                var section_2_p8 = "<span class='strong'>« From sratch »  signifie « partir de zéro »</span>. Travailler « from scratch » c’est donc coder un site par soi-même.";
                var section_2_p9 = "<span class='strong'>Autant dire que pour cela, il faut être calé en code</span>. C’est pourquoi la plupart des gens choisissent d’utiliser Wordpress qui ne demande aucune connaissance particulière.";
                var section_2_p10 = "Mais travailler « from scratch » a plein d'avantages. <span class='strong'>D’abord il permet d’être libre dans sa manière de travailler</span>. Wordpress peut être assez contraignant et il arrive qu’on s’arrache les cheveux pour changer un petit détail. Travailler avec votre propre code, permet au contraire de toujours savoir ou on en est.";
                var section_2_p11 = "<span class='strong'>De plus travailler « from scratch » permet de construire un site sophistiqué, avec des fonctionnalités innovantes</span>. Génial si vous voulez lancer un nouveau business digital !";
                $('#section-2-p12').css('display', 'block').html('<span class="strong">Je développe vos applications en HTML, javascript et PHP, seul ou en collaboration avec vos équipes, avec ou sans framework.</span>');

                $('#round-p').css('text-align', 'justify').html("Etes vous plutôt Wordpress ou « from scratch » ? Voulez-vous construire un blog, une vitrine pour votre entreprise ou créer une application innovante ? Si vous avez avez fait votre choix ou avez besoin d’un conseil, ");


                break;

                case "design" :
                var sectionTitre = "Design";
                $('#section-2-subtitle-1').show().text("Pour créer un style à votre image");
                $('#section-2-subtitle-2').text("nous avons besoin :");

                var paragraph_title = "D’une maquette";
                var paragraph_title_2 = "Qu’il soit \« responsive \» ";

                var section_2_p1 = "Rien à voir avec une maquette d’architecte ! Et pourtant ça y ressemble : de même que <span class='strong'>la maquette d’un bâtiment est un prototype à petite échelle, de même la maquette est le prototype visuel d’un site.</span>";
                var section_2_p2 = "Pour la créer, le designer utilise des images et des dessins faits par ordinateurs. Il simule ainsi l’apparence de votre futur site pour vous en donner une idée aussi précise que possible. <span class='strong'>Pour vous, la maquette a donc un avantage : elle permet de définir votre identité visuelle avec précision.</span>";
                var section_2_p3 = "<span class='strong'>La maquette est aussi très utile au développeur web </span>: elle lui donne une idée précise de ce qu’il va coder et lui évite d’ « improviser » son design au dernier moment. Pour vous c’est l’assurance que votre identité visuelle sera respectée.";
                var section_2_p4 = "<span class='strong'>Mais les services d’un designer sont souvent très chers</span> et seules les entreprises ont les moyens de se les offrir.";
                var section_2_p5 = "<span class='strong'>Si vous travaillez sur Wordpress, vous n’aurez sans doute pas besoin d’un designer</span>. Les thèmes sont souvent biens faits et suffisent dans la plupart des cas. ";
                $('#section-2-p6').css('display', 'inline-block').html('<span class="strong">Mais si vous souhaitez créer votre design ou votre thème personnalisé, vous aurez sans doute besoin d’aide.</span>');
                $('#section-2-p7').css('display', 'inline-block').html('<span class="strong">Je vous accompagne dans la création de votre identité visuelle et réalise votre maquette. Je me sers d’outils puissants comme Adobe XD qui permettent d’obtenir un résultat rapide et professionnel.</span>');

                var section_2_p8 = "« Responsive » veut dire « adaptable » en anglais. <span class='strong'>Un design « responsive » veut dire qu’il s’adapte à différents format d’écrans (smartphone, tablette, etc.).</span>";
                var section_2_p9 = "<span class='strong'>Autrefois, l’ordinateur était le seul moyen de consulter internet</span>.  On ne prêtait alors aucune attention aux éventuels changements de taille des écrans. Ainsi lorsqu’on réduisait la taille du navigateur, le site sortait de la page et le design pouvait sauter.";
                var section_2_p10 = "<span class='strong'>Mais aujourd’hui les choses ont changé : le smartphone a remplacé l’ordinateur pour la consulation d’internet et les designers ont dû suivre</span>. Ils ont donc créé un design « responsive », adaptable aux différentes tailles d’écrans. Verifiez vous-mêmes : si vous reduisez la taille de cette page, vous verrez que mon site s’adapte parfaitement.";
                var section_2_p11 = "On comprend qu’aujourd’hui, la première exigence des clients est d’avoir un site responsive. <span class='strong'>Pour ma part cela va tellement de soi que « site web » et « responsive » sont parfaitement synonymes !</span>";
                $('#section-2-p12').css('display', 'none');

                $('#round-p').css('text-align', 'justify').html("Vous souhaitez un design à votre image, qui reste beau sur les différentes tailles d’écran ? N’attendez plus :");

                break;

                case "seo" :
                var sectionTitre = "SEO";
                $('#section-2-subtitle-1').show().text("Ou « référencement » en français.");
                $('#section-2-subtitle-2').text("J’y contribue par :");

                var paragraph_title = "Un code adapté";
                var paragraph_title_2 = "Un contenu pertinent";

                var section_2_p1 = "A quoi sert d’avoir un site web si personne ne le voit ? Ça semble tellement évident que bon nombre de gens croient que développeur web et spécialiste du référencement c’est la même chose. <span class='strong'>Mais coder un site et booster votre position sur Google sont deux métiers très différents !</span> L’un demande de parler un langage informatique pointu et l’autre de savoir ruser avec les robots de Google. Rien à voir !";
                var section_2_p2 = "Pourtant il y a certaines choses qu’un développeur comme moi peut faire :";
                var section_2_p3 = "<span class='strong'>- créer un site qui charge vite</span>. Google adore les sites rapides. Ainsi plus le site est « léger » (code simple et efficace, poids des images réduit, utilisation d’un CDN, etc.), plus il a des chances d’être bien référencé !";
                var section_2_p4 = "<span class='strong'>- utiliser des « balises » dédiées</span>. Une balise HTML est un petit drapeau qui indique le positionnement (haut, bas, etc.) et la nature des éléments d’une page (titre, paragraphe, citation, etc). Placer ces balises permet à Google de repérer plus facilement vos mots clés. Par ex. la balise « titre » indique à Google le mot le plus important de votre page. Elle doit donc être utilisée avec soin. Il en va de même des balises schema.org qui identifient plus précisément les éléments de votre page.";
                var section_2_p5 = "<span class='strong'>- utiliser Wordpress (car Google aime le code de Wordpress) et ajouter des plugins dédiés comme Yoats SEO</span>.";
                $('#section-2-p6').css('display', 'none');
                $('#section-2-p7').css('display', 'none');

                var section_2_p8 = "Si vous vous êtes déjà intéressé au web, vous avez sans doute entendu parler des fameux « mots clés ». Lorsqu’un utilisateur fait une recherche sur Google, ce dernier va analyser les mots de la recherche et trouver les pages qui les contiennent. <span class='strong'>Un mot clé est donc le moyen de dire à Google que vous êtes la meilleure réponse à la question d’un utilisateur.</span>";
                var section_2_p9 = "Cela prend toute son importance lorsqu’on crée un business en ligne, car <span class='strong'>trouver les bons mots-clés c’est s’assurer que Google va nous amener les bons clients</span>, c’est-à-dire ceux qui constituent notre cible. Pour prendre un exemple grossier, si je suis opticien j’ai tout intérêt à placer « lunettes » dans une de mes pages, car il y a fort à parier que les utilisateurs qui cherchent un opticien tapent « lunette » dans Google. Dans la réalité les choses sont plus complexes évidemment. Mais cela nous donne une petite idée de l’importance des mots-clés !";
                var section_2_p10 = "<span class='strong'>Mais le référencement est un métier et le meilleur moyen d’être bien placé sur Google est de faire appel à un professionnel</span>. Malheureusement ils sont souvent très chers et seules les entreprises ont les moyens de se les payer.";
                var section_2_p11 = "Pourtant, à mon niveau, je peux vous apporter une aide. Ancien professeur de philosophie, j’ai des facilités pour organiser, exprimer et clarifier mes idées. Pendant 10 ans, j’ai corrigé et affiné mon expression écrite. <span class='strong'>Je peux vous aider à créer un contenu qui ne nuise pas à votre visibilité ou qui, dans le meilleur des cas, y soit favorable.</span>";
                $('#section-2-p12').css('display', 'none');

                $('#round-p').css('text-align', 'center').html("Vous souhaitez un site qui se voit sur Google ? <br>N’attendez plus :");

                break;

                case "ecoute" :
                var sectionTitre = "Ecoute";
                var sectionP1 = "C’est votre premier site web et vous ne savez pas encore comment vous y prendre ? Mon rôle est de vous accompagner et de répondre à toutes vos questions.";
                var sectionP2 = 'Ne venant pas moi-meme du monde du web, je n’ai pas l’impatience des informaticiens qui ne comprennent pas qu’on ne comprenne pas. Je suis capable de me mettre à votre place et de vous entendre.';
                var sectionP3 = "Pour cela il faut que nous créions dès le départ un dialogue constructif et cordial. De mon côté, je me mets à votre disposition et suis ouvert à toutes vos remarques.  Du votre, vous me dites tout ce que vous pensez, avec franchise et simplicité. Si, à la fin de notre travail, « site web » rime pour vous avec « sérénité », ma mission sera accomplie !";
                break;

                case "qualite" :
                var sectionTitre = "Qualité";
                var sectionP1 = "Par nature je ne me vends pas, je donne ce que je suis. Lorsque je fais un site web, je m’investis complètement dans la production d’un résultat impeccable. Tous mes travaux sont conçus, façonnés, ouvragés avec soin. Ce que j’aime par-dessus tout : voir la satisfaction du client."
                var sectionP2 = "La qualité ne repose pas seulement sur l’engagement mais aussi sur la compétence. Je maitrise les principaux langages et les dernières technologies du web. Du HTML au PHP en passant par Ajax et JQuery, mais aussi l’utilisation de frameworks ou de Wordpress, j’ai les outils pour répondre à tous vos besoins."
                var sectionP3 = "Vous ne connaissez rien au web et ce que je dis ne vous parle pas ? Je vous invite a découvrir mon portfolio. Je suis sur que ça suffira pour vous convaincre."
                break;

                case "dispo" :
                var sectionTitre = "Disponibilité";
                var sectionP1 = "Vous avez besoin de temps pour concevoir votre site web mais l’inspiration vous vient au coup par coup ? Ça tombe bien : je suis disponible pour échanger avec vous 24h/ 24 et 7j/ 7."
                var sectionP2 = "Quand j’étais enseignant, ce qui me frustrait était qu’on nous poussait à faire nos journées, sans plus, en attendant les vacances. Pour ma part, j’étais incapable de compter mes heures car mon travail me passionnait. C’est la même chose dans le développement web. Tout nouveau projet me stimule, me passionne. Qu’il soit petit ou grand, c’est toujours un défi à relever et je ne peux pas m’arrêter avant d’être arrivé au bout."
                var sectionP3 = "Ainsi que vous ayez ou non du temps à consacrer à votre projet, je serai toujours disponible pour en parler avec vous. Et pour cause : chaque fois que vous me faites une remarque vous faites avancer mon travail. Alors n’hésitez plus : contactez-moi dès maintenant et commençons à travailler ensemble !"
                break;

            }

            // section 2

            $('#section-2-titre').text(sectionTitre);

            $('#paragraph-title-2-1').html(paragraph_title);
            $('#paragraph-title-2-2').html(paragraph_title_2);

            $('#section-2-p1').html(section_2_p1);
            $('#section-2-p2').html(section_2_p2);
            $('#section-2-p3').html(section_2_p3);
            $('#section-2-p4').html(section_2_p4);
            $('#section-2-p5').html(section_2_p5);

            $('#section-2-p8').html(section_2_p8);
            $('#section-2-p9').html(section_2_p9);
            $('#section-2-p10').html(section_2_p10);
            $('#section-2-p11').html(section_2_p11);

            // section 3 

            $('#section-3-titre').text(sectionTitre);
            $('#section-3-p1').text(sectionP1);
            $('#section-3-p2').text(sectionP2);
            $('#section-3-p3').text(sectionP3);

        }

        // go down 

        setTimeout(function() {

            button.down();

             var windowWidth = $(window).width();

            var display;

            // slide buttons
            $('#go-left').css({'display':'none'}, 200);
            $('#go-right').css({'display':'none'}, 200);

        }, 300);

        // disable #main 

        setTimeout(function() {

            $('#main').css('display', 'none');
            $('html, body').animate({scrollTop:$('#main-2').offset().top}, 0);

        }, 600);

        return false;

    });


    $('.up').click(function() {

        // enable #main-2

        var windowWidth = $(window).width();

        var display;

        if(windowWidth > 450) {

            display = 'flex';

            $('#go-left').css({'display': 'block', 'left':'0px'});
            $('#go-right').css({'display':'block', 'right':'0px'});

            // if($('body').hasClass('ofWheel')) {

               // $('#background-0').css('top', '0px'); 
            // }
        }
        else {

            display = 'block';

            $('#go-left').css({'display': 'block', 'right':'5px'});
            $('#go-right').css({'display':'block', 'right':'5px'});

        }

        $('#main').css('display', display);
        $('html, body').animate({scrollTop:$('#main-2').offset().top}, 0);

        // #sub-6 active 

        var upId = $(this).attr('id');

        setTimeout(function() {

            if(upId == 'sublink_6') {

                $('.inputs').removeClass('active');
                $('#input-1').addClass('active');
            }

        }, 300);

        $('#info-name').text('');

        // go up

        var button = new Button(this);
        button.up();

        setTimeout(function() {

            // #sub-1 

            $('#span-info').removeClass('who');

            // show buble 

            $('nav').animate({'position':'relative', 'top':'0px'}, 300);
            $('footer').animate({'position':'relative', 'bottom':'0px'}, 300);

            $('.bulle-container').animate({'opacity': '1'}, 200);
            $('.skill-container').animate({'opacity':'1'}, 200);
            $('.scroll-container').animate({'opacity':'1'}, 200);
            $('.allons-y-container').animate({'opacity':'1'}, 200);

            $('.slide-mobile').show(200);

            // close menu responsive 

            var width = $(window).width();

            if(width > 780) {

                $('nav').animate({'height':'90px'}, 0);
            }

            // disable #main 2 

            $('.sub').css('display', 'block');
            $('#main-2').animate({'position':'absolute','z-index':'1', 'left': '0px'}, 0).animate({'position':'relative'}, 0).css('display', 'none');


        }, 300);


        return false;

    });
});