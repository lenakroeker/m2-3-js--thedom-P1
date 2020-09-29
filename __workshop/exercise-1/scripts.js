// Add your code here!
    const main = document.querySelector("main");
    const head = document.querySelector("HEAD");

    const styles = document.createElement('link');
    styles.rel = "stylesheet";
    styles.type = "text/css";
    styles.href = "styles.css";
    head.appendChild(styles);



    const headEl = document.createElement("H1");
    const headCont = document.createTextNode("The best How I Met Your Mother episode (according to fans)");
    headEl.appendChild(headCont);
    main.appendChild(headEl);

    const pEl = document.createElement("p");
    const pCont = document.createTextNode("As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…");
    pEl.appendChild(pCont);
    main.appendChild(pEl);

    const h2El = document.createElement("H2");
    const h2Cont = document.createTextNode("The Slap Bet (Season 2, Episode 9)");
    h2El.appendChild(h2Cont);
    main.appendChild(h2El);

    const p2El = document.createElement("p");
    const p2Cont = document.createTextNode("IMDB Rating: 9.5");
    p2El.appendChild(p2Cont);
    main.appendChild(p2El);

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/robin-sparkles.jpg")
    imgEl.setAttribute("alt", "Robin Sparkles")
    main.appendChild(imgEl);

    const p3El = document.createElement("p");
    const p3Cont = document.createTextNode("In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.");
    p3El.appendChild(p3Cont);
    main.appendChild(p3El);

    const p4El = document.createElement("p");
    const p4Cont = document.createTextNode('In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).');
    p4El.appendChild(p4Cont);
    main.appendChild(p4El);

    const link = document.createElement("a");
    const linkCont = document.createTextNode("Source");
    link.appendChild(linkCont);
    link.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
    main.appendChild(link);