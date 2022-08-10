import './style.css';
import catbackground from './cat.jpg';
import cat1 from './cat1.jpeg';
import cat2 from './cat2.jpeg';
import cat3 from './cat3.jpeg';
import cat4 from './cat4.jpg';
import cat5 from './cat5.jpeg';
   /*
        <h1>John's Cat Cafe</h1>
        <p>We'll cook 'em up with no delay!</p>
        <ul>
            Drinks:
            <li>Soda</li>
            <li>Coffee</li>
            <li>Water</li>
            <li>Tea</li>
            <li>Boba</li>
        </ul>
          <a href="https://www.vecteezy.com/free-vector/cat-wallpaper">Cat Wallpaper Vectors by Vecteezy</a>
      */
       // head.classList.add('body');
let Display = (function() {

const content = document.querySelector('#content');
const blank = ' '
function background() {
 content.classList.add('body');
 const myIcon = new Image();
    myIcon.src = catbackground;
} 

function headdiv() {
    const headdiv = document.createElement('div');
    headdiv.classList.add('head')

    function buttondiv() {
    
    const buttondiv = document.createElement('div');
    buttondiv.classList.add('tab');
    function homebtn() {
        const home = document.createElement('button');
        home.id = 'homebtn';
        home.classList.add('btn');
        home.classList.add('active');
        home.textContent = 'Home';
        return home;
    }
    
    function contactbtn() {
        const contact = document.createElement('button');
        contact.id = 'contactbtn';
        contact.classList.add('btn');
        contact.textContent = 'Cats!';
        return contact;
    }
    
    function menubtn() {
        const menu = document.createElement('button');
        menu.id = 'menubtn';
        menu.classList.add('btn');
        menu.textContent = 'Menu';
        return menu;
    }

    buttondiv.appendChild(homebtn());
    buttondiv.appendChild(menubtn());
    buttondiv.appendChild(contactbtn());

    return buttondiv;
}

    function title() {
    const buttondiv = document.createElement('div');
    buttondiv.classList.add('title');
    function name() {
        const name = document.createElement('h1');
        name.textContent = "John's Cat Cafe";
        return name;
    }
    function slogan() {
        const name = document.createElement('p');
        name.classList.add('slogan')
        name.textContent = "WE'LL COOK EM UP WITH NO DELAY";
        return name;
    }
    buttondiv.appendChild(name());
    buttondiv.appendChild(slogan());
    return buttondiv;
}
    headdiv.appendChild(title());
    headdiv.appendChild(buttondiv());

    return headdiv;
}
content.appendChild(headdiv());

function textcontent1() {
    const textcontent = document.createElement('div');
    textcontent.classList.add('white');
    textcontent.id = 'introdi';
    // working hours, address, pictures of cats, introduction, phone number
    function intro() {
        const home = document.createElement('div')
        home.textContent = 'Welcome to John\'s Cat Cafe! We hope you have a great time!';
        home.classList.add('greet');
        return home;
        }
    
    function hours() {
        const textcontent = document.createElement('div');
        textcontent.classList.add('info');
    function catpic1() {
        const catpics = document.createElement('img');
        catpics.src = cat1;
        catpics.classList.add('cattop');
        catpics.classList.add('catspc');
        catpics.title = 'Simba, our newest kitten, by https://unsplash.com/@onurbinay';
        return catpics;
    }
    function info() {
        const home = document.createElement('p');
        home.classList.add('businfo')
        home.innerHTML = `1234 ST America City <br>
        Wyoming, 11111, USA <br>
        Opening hours: <br>
        9 AM-8 PM MON - SAT <br>
        SUNDAYS CLOSED <br>
        Telephone: <br>
        123-456-7890 <br>`;

        return home;
        }
    function catpic2() {
        const catpics = document.createElement('img');
        catpics.src = cat2;
        catpics.classList.add('cattop');
        catpics.title = 'Mittens the Scottish Fold, found at https://cats.lovetoknow.com/Scottish_Fold_Cat';
        return catpics;
    }
     textcontent.appendChild(catpic1());
    textcontent.appendChild(info());
    textcontent.appendChild(catpic2());
    return textcontent;
    }
    textcontent.appendChild(intro());
    textcontent.appendChild(hours());
   
    return textcontent;
}
content.appendChild(textcontent1());

function textcontent2() {
    const textcontent = document.createElement('div');
    textcontent.classList.add('white');
    textcontent.id = 'menudi';
    function menudiv() {
        const textcontent = document.createElement('div');
    textcontent.classList.add('grid');
    // drinks, specials, entrees, breakfast, cat food, playtime
    function drinks() {
        const home = document.createElement('div');
            function title() {
                const name = document.createElement('h2');
                name.textContent = "Drinks";
                return name;
            }
            function menuitems() {
                const name = document.createElement('p');
                name.innerHTML = `Boba Tea ... $4 <br>
                Coffee ... $4 <br>
                Tea ... $4 <br>
                Soda ... $2 <br>
                Water ... $2`;
                return name;
            }
            home.appendChild(title());
            home.appendChild(menuitems());
        return home;
        }
    function specials() {
        const home = document.createElement('div');
        function title() {
            const name = document.createElement('h2');
            name.textContent = "Appetizers";
            return name;
        }
        function menuitems() {
            const name = document.createElement('p');
            name.innerHTML = `French Fries ... $5 <br>
            Salad ... $5 <br>
            Chips w/ Guacamole ... $7 <br>
            Mozzerella Sticks ... $5 <br>
            Onion Rings ... $5`;
            return name;
        }
        home.appendChild(title());
        home.appendChild(menuitems());
    return home;
        }
    function entrees() {
        const home = document.createElement('div');
        function title() {
            const name = document.createElement('h2');
            name.textContent = "Entrees";
            return name;
        }
        function menuitems() {
            const name = document.createElement('p');
            name.innerHTML = `Hamburger ... $8 <br>
            Chicken Sandwich ... $8 <br>
            House Special Soup ... $8 <br>
            Rack of Ribs ... $15 <br>
            Ribeye Steak ... $12`;
            return name;
        }
        home.appendChild(title());
        home.appendChild(menuitems());
    return home;
        }
    function breakfast() {
        const home = document.createElement('div');
        function title() {
            const name = document.createElement('h2');
            name.textContent = "Breakfast";
            return name;
        }
        function menuitems() {
            const name = document.createElement('p');
            name.innerHTML = `Pancakes ... $7 <br>
            Omelet ... $7 <br>
            Bacon and Eggs ... $6 <br>
            Breakfast Sandwich ... $8 <br>
            Breakfast Special ... $10`;
            return name;
        }
        home.appendChild(title());
        home.appendChild(menuitems());
    return home;
    }
    function catfood() {
        const home = document.createElement('div');
        function title() {
            const name = document.createElement('h2');
            name.textContent = "Cat Treats";
            return name;
        }
        function menuitems() {
            const name = document.createElement('p');
            name.innerHTML = `Kibble ... $6 <br>
            Catnip ... $5 <br>
            Salmon Snacks ... $5`;
            return name;
        }
        home.appendChild(title());
        home.appendChild(menuitems());
    return home;
        }
    function playtime() {
        const home = document.createElement('div');
        function title() {
            const name = document.createElement('h2');
            name.textContent = "VIP Backdoor Access";
            return name;
        }
        function menuitems() {
            const name = document.createElement('p');
            name.innerHTML = `Gain limited time access to our secret, exclusive backdoor cat haven for a price ... $25`;
            return name;
        }
        home.appendChild(title());
        home.appendChild(menuitems());
    return home;
    }
    textcontent.appendChild(breakfast());
    textcontent.appendChild(specials());
    textcontent.appendChild(entrees());
    textcontent.appendChild(drinks());
    textcontent.appendChild(catfood());
    textcontent.appendChild(playtime());
    return textcontent;
}
    textcontent.appendChild(menudiv());
return textcontent;
}
content.appendChild(textcontent2());

function textcontent3() {
    const textcontent = document.createElement('div');
    textcontent.classList.add('white');
    textcontent.id = 'catsdi';
    // cat photos
    function header() {
        const home = document.createElement('h1')
        home.textContent = `The Premier Cats`;
        return home;
        }
    function cats() {
        const home = document.createElement('div');
        home.classList.add('unsur');
        home.textContent = `Unsurprisingly, our (imaginary) cafe owner owns a few cats himself. Meet (imaginary) John's (imaginary) cats! (Hover to see their names!)`;
        return home;
        }
    function catpics() {
        const catpic = document.createElement('div');
        catpic.classList.add('flexcat');
        function catthree() {
            const catpics = document.createElement('img');
        catpics.src = cat3;
        catpics.classList.add('catbot');
        catpics.title = 'Luna the orange Tabby cat, found at https://www.cuteness.com/article/orange-tabby-cat-behaviors';
        return catpics;
        }
        function catfour() {
            const catpics = document.createElement('img');
        catpics.src = cat4;
        catpics.classList.add('catbot');
        catpics.title = 'Tigger the Tabby cat, found at https://kittentoob.com/mackerel-tabby-cat-five-things-didnt-know/';
        return catpics;
        }
        function catfive() {
            const catpics = document.createElement('img');
        catpics.src = cat5;
        catpics.classList.add('catbot');
        catpics.title = 'Snowball the white cat, by https://unsplash.com/@the3dragons';
        return catpics;
        }
        catpic.appendChild(catthree());
        catpic.appendChild(catfour());
        catpic.appendChild(catfive());
        return catpic;
    }
    textcontent.appendChild(header());
    textcontent.appendChild(cats());
    textcontent.appendChild(catpics());
    return textcontent;
}
content.appendChild(textcontent3());

function footer() {
    const footer = document.createElement('footer');
    footer.textContent = `https://www.vecteezy.com/free-vector/cat-wallpaper Cat Wallpaper Vectors by Vecteezy`;
    return footer;
}
content.appendChild(footer());
background();
})();
let homebtn = document.querySelector('#homebtn');
let contactbtn = document.querySelector('#contactbtn');
let menubtn = document.querySelector('#menubtn');
function displaytabs(evt, name) {
    let i;
    let tabcontent;
    let tablinks;
    tabcontent = document.getElementsByClassName('white');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('btn');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "lightgray"
    }
    document.getElementById(name).style.display = 'block';
    evt.currentTarget.style.backgroundColor = 'white'
}
document.querySelector('#introdi').style.display = 'block';
homebtn.onclick = function () {displaytabs(event,'introdi')};
contactbtn.onclick = function () {displaytabs(event,'catsdi')};
menubtn.onclick = function () {displaytabs(event,'menudi')};