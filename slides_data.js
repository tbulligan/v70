const SLIDES_DATA = [
  {
    id: "intro",
    type: "hero",
    tag: "Ypatingai slapta byla • 1956–2026",
    title: "VOLDEMARAS VII: Septyni dešimtmečiai legendos",
    subtitle: "Oficiali archyvinė fotodosjė Voldemaro 70-mečio proga. Dokumentuoti faktai apie mokslo šaknis, Friulio žygius, ūkio inžineriją, roką ir šeimos dinastiją.",
    leadNote: "Dėmesio: peržiūros metu garantuojama plati šypsena ir didžiulis pasididžiavimas jubiliatu.",
    ctaText: "Pradėti peržiūrą →"
  },
  {
    id: "pradzia",
    type: "photos",
    tag: "1 skyrius • Legendos šaknys",
    title: "Nuo pirmos klasės iki disertacijos",
    description: "Kiekviena didi odisėja prasideda nuo mokyklinio suolo ir bemiegių naktų prie disertacijos rankraščių.",
    photos: [
      {
        src: "web_photos/mokinukas_su_gelemis.jpg",
        title: "Pirmokas su gėlėmis",
        caption: "Rugsėjo 1-oji mokykloje: gėlės rankose, šventinė uniforma ir pasiryžimas mokslo viršukalnėms. Voldemaras – tas mokinukas su gėlių puokšte!",
        badge: "Mokykla"
      },
      {
        src: "web_photos/doktoranto_disertacija.jpg",
        title: "Doktoranto disertacija",
        caption: "Mokslinė disertacija reikalauja maksimalios koncentracijos ir jokių varžančių marškinių! Karštos mintys, galingas stotas ir būsimasis mokslų daktaras prie darbo.",
        badge: "Doktorantūra"
      }
    ]
  },
  {
    id: "alchemija",
    type: "photos",
    tag: "2 skyrius • Slaptoji laboratorija",
    title: "Ūkio alchemikas ir antikinės technologijos",
    description: "Tikras meistras sodyboje niekada nesiilsi. Kai kiti geria arbatą, Voldemaras verda energijos mikstūras ir atlieka archeologinius kasinėjimus.",
    photos: [
      {
        src: "web_photos/100_0461_2.jpg",
        title: "Operacija „Eliksyras“",
        caption: "Voldemaras gamina slaptą mikstūrą energijai iki mažiausiai 100 metų. Receptas paprastas: gera nuotaika, 100 litrų nežinomos masės ir ąžuolinis kuolas.",
        badge: "Sodybos magija"
      },
      {
        src: "web_photos/100_0604.jpg",
        title: "Antikinės amforos inspekcija",
        caption: "Sodo archeologija: jei senovės graikai mokėjo daryti gerą vyną, tai Voldemaras moka surasti jam tobuliausią indą tiesiai kiemo viduryje.",
        badge: "Archeologija"
      }
    ]
  },
  {
    id: "alpinistas",
    type: "photos",
    tag: "3 skyrius • Friulio kalnai",
    title: "Friulio uolų erelis: gravitacija tėra rekomendacija",
    description: "Kam reikalingi lygūs takai, kai Friulio kalnuose yra uolos, šlaitai ir nepalaužiamas noras užlipti ten, kur kiti bijo pažiūrėti?",
    photos: [
      {
        src: "web_photos/DSCN7981.jpg",
        title: "Parkūro pradininkas",
        caption: "Instruktoriai tai vadina ekstremaliu nusileidimu. Voldemaras tai vadina tiesiausiu keliu link pietų stalo.",
        badge: "0% baimės"
      },
      {
        src: "web_photos/DSCN7984.jpg",
        title: "Kalnų šauksmas",
        caption: "Friulio viršukalnių aidas arba garsus šūkis slėniui: 'Kas paliko sumuštinius automobilyje?!'",
        badge: "Garsas 120 dB"
      },
      {
        src: "web_photos/DSCN7986.jpg",
        title: "Pasiruošimas šuoliui",
        caption: "Sekundė prieš tai, kai uola suprato, kad Voldemaras jos nenaudos poilsiui – ant jos bus padarytas tobulas kontrolinis šuolis.",
        badge: "Viršukalnė"
      },
      {
        src: "web_photos/DSCN7996.jpg",
        title: "Gamtinė maskuotė",
        caption: "Kai uolos bando tave sustabdyti, bet tu tiesiog tampi kalnų masyvo architektūrine dominante.",
        badge: "Kamufliažas"
      }
    ]
  },
  {
    id: "friulis-ezerai",
    type: "photos",
    tag: "4 skyrius • Šiaurės elegancija",
    title: "Friulio ežerai ir snieguotos viršūnės",
    description: "Nuo ramaus Fusine ežero vandens iki snieguotų viršukalnių keterų. Stilius ir ramybė bet kokiame aukštyje.",
    photos: [
      {
        src: "web_photos/DSCN7969.jpg",
        title: "Valtelių flotilės vadas",
        caption: "Laghi di Fusine ežeras toks ramus tik todėl, kad į jį atvyko vyriausioji kokybės kontrolės komisija.",
        badge: "Laghi di Fusine"
      },
      {
        src: "web_photos/IMG_2525.jpg",
        title: "Agentas 0070",
        caption: "Licencija švęsti 70-metį! Kailinė apykaklė, skvarbus žvilgsnis į ateitį ir jokių nuolaidų kalnų vėjui.",
        badge: "Žiemos stilius"
      },
      {
        src: "web_photos/IMG_2533.jpg",
        title: "Viršukalnių duetas",
        caption: "Šilčiausios šypsenos tarp snieguotų viršūnių. Kartu per kalnus, speigus ir visus gyvenimo kelius.",
        badge: "Dalia & Voldemaras"
      }
    ]
  },
  {
    id: "juru-vilkas",
    type: "photos",
    tag: "5 skyrius • Jūrų ekspedicijos",
    title: "Kapitonas Voldemaras ir Furlano piratai",
    description: "Vandens stichija Voldemarui sava: motorinis kateris, Venecijos kanalai ir derybos su vietiniais jūrų vilkais.",
    photos: [
      {
        src: "web_photos/IMG_0537_2.jpg",
        title: "Vyriausiasis šturmanas",
        caption: "Kursas – tiesiai į šventinį stalą, pilnu greičiu! Kai Voldemaras prie šturvalo, jokie rifai nebaisūs.",
        badge: "Prie vairo"
      },
      {
        src: "web_photos/IMG_0568_2.jpg",
        title: "Derybos su Furlanu",
        caption: "Voldemaras su kolega Furlanu derina lobio dalybų sutartį. Ramybės ir povyzos standartai – aukščiausio lygio.",
        badge: "Friulis"
      },
      {
        src: "web_photos/IMG_0642.jpg",
        title: "Venecijos inspektorius",
        caption: "Gondolos plaukia tiksliai pagal grafiką. Skėtis po pažastimi – garantija, kad lietus bus operatyviai atšauktas.",
        badge: "Venecija"
      }
    ]
  },
  {
    id: "pajurys",
    type: "photos",
    tag: "6 skyrius • Baltijos vėjai",
    title: "Pajūrio stilius ir vėjo choreografija",
    description: "Kopų takeliai ir tiltai į jūrą. Kuršių nerija ir Palanga dar ilgai atsimins šiuos paslaptingus, galingus siluetus.",
    photos: [
      {
        src: "web_photos/Picture_082_3.jpg",
        title: "Mados savaitė ant kopų",
        caption: "Fotografo prašymas: 'Būk paslaptingas, elegantiškas ir šiek tiek primink Neringos vėtrungę'. Įvykdyta 110%.",
        badge: "Kopos"
      },
      {
        src: "web_photos/Picture_083_3.jpg",
        title: "Jūros vadas ant tilto",
        caption: "Ramiu žvilgsniu pasitinkant bangas. Admirolas patikrina, ar Baltijos jūra vis dar savo vietoje.",
        badge: "Palangos tiltas"
      }
    ]
  },
  {
    id: "pirtis",
    type: "photos",
    tag: "7 skyrius • Sveikas kūnas",
    title: "Pirties gladiatorius ir SPA imperatorius",
    description: "Tikra lietuviška sveikata kalama karštame garo debesyje ir ąžuoliniame kubile. Amžius čia neturi jokių šansų.",
    photos: [
      {
        src: "web_photos/voldemaro_ir_juliaus_gimtadieniai_001.jpg",
        title: "Romos imperatorius kubile",
        caption: "Garuojantis vanduo, šaltas oras ir karališkas mostas: 'Tęskite banketą, aš asmeniškai prižiūriu garo kokybę!'",
        badge: "Garuojantis kubilas"
      },
      {
        src: "web_photos/voldemaro_ir_juliaus_gimtadieniai_029.jpg",
        title: "Sparta ilsisi",
        caption: "Štai taip atrodo 100% pasirengimas gyvenimo išbandymams. Jokie šiuolaikiniai papildai neprilygsta gerai pirties procedūrai.",
        badge: "Geležinė sveikata"
      }
    ]
  },
  {
    id: "universitetas",
    type: "photos",
    tag: "8 skyrius • Akademinis džiaugsmas",
    title: "VU kiemelis ir šampano strategija",
    description: "Vilniaus universiteto diplomų teikimas – didžiulė šventė, o tėčio pareiga – užtikrinti šampano atidarymo saugumą.",
    photos: [
      {
        src: "web_photos/2006_-_2.jpg",
        title: "Diplomas kišenėje!",
        caption: "Šventinis džiaugsmas VU kiemelyje. Kostiumai išlyginti, gėlės paruoštos, ateitis užtikrinta.",
        badge: "VU 2006"
      },
      {
        src: "web_photos/2006_-_3.jpg",
        title: "Strateginis manevras",
        caption: "Kol visi dar skaito diplomų priedus, Voldemaras jau laiko rankoje patį svarbiausią šventės instrumentą.",
        badge: "Šampanas"
      },
      {
        src: "web_photos/2006_-_4.jpg",
        title: "Diplomatijos pauzė",
        caption: "Gili filosofinė veido išraiška: 'Diplomas yra, šampanas yra... dabar belieka išsiaiškinti, kur visi važiuojame pietų.'",
        badge: "Strategija"
      }
    ]
  },
  {
    id: "stalas",
    type: "photos",
    tag: "9 skyrius • Kulinarijos menas",
    title: "Šventinis stalas ir chirurginis tikslumas",
    description: "Šeimos susibūrimai reikalauja kantrybės, tobulo padažo dozavimo ir geros muzikos ilgesio.",
    photos: [
      {
        src: "web_photos/2006.jpg",
        title: "Velykų strateginis posėdis",
        caption: "2006-ųjų Velykų taryba. Margučiai surikiuoti, o Voldemaro margutis tradiciškai išlieka neįveikiamas jokiais smūgiais.",
        badge: "Velykos 2006"
      },
      {
        src: "web_photos/Picture_031_4.jpg",
        title: "Chirurginis tikslumas",
        caption: "Pasaulio kantrybės čempionatas: padažas pilamas miligramo tikslumu. Nei lašo ant staltiesės!",
        badge: "Kalėdos 2006"
      },
      {
        src: "web_photos/Dalia_gimtadienis.jpg",
        title: "Dalios gimtadienio orkestras",
        caption: "Balionai, dūdelės ir šventinis šurmulys. Dūdelė smagu, bet Voldemaro akyse matyti gilus profesionalo ilgesys: ech, kad dabar čia turėčiau savo tubą...",
        badge: "Tubos ilgesys"
      }
    ]
  },
  {
    id: "gurmanas",
    type: "photos",
    tag: "10 skyrius • Gyvenimo skonis",
    title: "Gyvenimo gurmanas ir degustacijos",
    description: "Alaus puta turi būti aukšta, o diskusijos prie stalo – gilios. Voldemaras – nepakeičiama kompanijos siela.",
    photos: [
      {
        src: "web_photos/2007.jpg",
        title: "Putos etalonas",
        caption: "Puta privalo siekti lygiai 3 centimetrus. Džinsinis švarkas, rami šypsena ir tobula degustacija.",
        badge: "Degustacija"
      },
      {
        src: "web_photos/A0200798.jpg",
        title: "Geopolitiniai debatai",
        caption: "Prie šio stalo buvo išspręstos trys pasaulinės problemos ir suderinti būsimų kelionių maršrutai.",
        badge: "Rimti reikalai"
      },
      {
        src: "web_photos/A0200935.jpg",
        title: "Po įkvepiančio tosto",
        caption: "Aukščiausio lygio pasitenkinimas: tostas buvo toks galingas, kad net restorano lubos pradėjo linksėti.",
        badge: "Opera & Tostas"
      },
      {
        src: "web_photos/IMG_0672_2.jpg",
        title: "Užeigos koliokviumas",
        caption: "Jauki medinė užeiga prieš didžiąsias šventes. Kai aplink gera kompanija, laikas tiesiog nustoja skaičiuoti valandas.",
        badge: "Gera kompanija"
      }
    ]
  },
  {
    id: "tetis-senelis",
    type: "photos",
    tag: "11 skyrius • Šeimos širdis",
    title: "Stilistas, mylintis tėtis ir senelis",
    description: "Nuo preciziško perlų vėrinio užsegimo iki anūkėlio ramybės glėbyje. Švelnioji ir rūpestingoji Voldemaro pusė.",
    photos: [
      {
        src: "web_photos/Picture_003.jpg",
        title: "Juvelyro ranka",
        caption: "Prieš pat šventę: tėtis kantriai ir rūpestingai sega vėrinį. Akimirka, kurios nenupirksi už jokius pinigus.",
        badge: "Rūpestis"
      },
      {
        src: "web_photos/P9208051.jpg",
        title: "Kartu su Jolija",
        caption: "Pasivaikščiojimas su Jolija už rankos. Šilta popietė, ramus žingsnis ir visada tvirtas palaikymas.",
        badge: "Kartu su Jolija"
      },
      {
        src: "web_photos/IMG_4998.jpg",
        title: "Senelio glėbys",
        caption: "Mažasis stebuklas patikimose rankose. Senelis moka laikyti ne tik plaktuką ar šturvalą, bet ir patį trapiausią gyvenimo džiaugsmą.",
        badge: "Senelio meilė"
      },
      {
        src: "web_photos/Picture_066_2.jpg",
        title: "Ramybė bažnyčioje",
        caption: "Mažylis žino: ant senelio rankų yra saugiau nei Šveicarijos banko saugykloje.",
        badge: "Senelis"
      }
    ]
  },
  {
    id: "trys-kartos",
    type: "photos",
    tag: "12 skyrius • Šeimos dinastija",
    title: "Trys kartos ir šeimos taryba",
    description: "Didžiausias Voldemaro pasididžiavimas – darni, linksma ir auganti šeima, kurioje stiprėja jau trečioji karta.",
    photos: [
      {
        src: "web_photos/trys_kartos.jpg",
        title: "Trys kartos prie vartų",
        caption: "Tėtis, sūnūs ir anūkas! Trys kartos viename kadre po galingais ąžuoliniais vartais. Genai patikrinti, tradicijos patikimose rankose.",
        badge: "3 kartos"
      },
      {
        src: "web_photos/seimos_taryba_kudikis.jpg",
        title: "Šeimos tarybos posėdis",
        caption: "Pilnas vaišių stalas ir visa giminė – nuo mažiausio iki vyriausiojo. Voldemaras kontroliuoja situaciją iš garbės vietos.",
        badge: "Šeimos taryba"
      }
    ]
  },
  {
    id: "vestuves",
    type: "photos",
    tag: "13 skyrius • Šeimos šventės",
    title: "Lietuviškų vestuvių šurmulys",
    description: "Vestuvės be Voldemaro šypsenos – kaip piršlys be juostos. Gražiausios tradicijos, palaiminimai ir nuoširdus džiaugsmas.",
    photos: [
      {
        src: "web_photos/P9218808.jpg",
        title: "Šventinė šypsena",
        caption: "Nuoširdus juokas prie sodybos stalo. Kai aplink savi žmonės, kiekviena akimirka tampa auksine.",
        badge: "Džiaugsmas"
      },
      {
        src: "web_photos/P9229297.jpg",
        title: "Tėvų palaiminimas",
        caption: "Tradicinė vestuvių akimirka: piršlys su juosta, jaudulys ir tėčio ramus, palaikantis žvilgsnis.",
        badge: "Tradicijos"
      }
    ]
  },
  {
    id: "asmenukes",
    type: "photos",
    tag: "14 skyrius • Fotografijos avangardas",
    title: "Asmenukių pionierius ir veidrodžių meistras",
    description: "Instagramas atsirado tik 2010 m., bet Voldemaras asmenukių meną ištobulino dar 2007-aisiais, pritaikydamas natūralią elnio ragų kompoziciją.",
    photos: [
      {
        src: "web_photos/Picture_047_4.jpg",
        title: "Raguotasis genijus (2007)",
        caption: "Šedevras! Asmenukė veidrodyje su elnio ragais virš galvos suderinta milimetro tikslumu. Tikras konceptualus menas.",
        badge: "Avangardas"
      },
      {
        src: "web_photos/Picture_039_3.jpg",
        title: "Renesanso poilsis",
        caption: "Kaip Mikelandželas tapė didvyrius, taip Voldemaras ilsisi po dienos darbų. Grynas magnetizmas ir fotogeniškumas.",
        badge: "Renesansas"
      },
      {
        src: "web_photos/IMG_0625.jpg",
        title: "Nevaldomas juokas",
        caption: "Kai Voldemaras lepteli kokį nors genialų pokštą, net Dalia priversta slėpti veidą iš juoko.",
        badge: "Juoko dozė"
      },
      {
        src: "web_photos/Picture_053_4.jpg",
        title: "Salono aristokratai",
        caption: "Kostiumas, elegantiškas kaklaraištis ir šilta šypsena. Holivudas pavydėtų tokios charizmos.",
        badge: "Elegancija"
      }
    ]
  },
  {
    id: "keliones-italija",
    type: "photos",
    tag: "15 skyrius • Pasaulio pilietis",
    title: "Friulio dvarai, pilys ir kelionių startas",
    description: "Italijos dvasia, istoriniai parkai ir pasiruošimas naujiems nuotykiams.",
    photos: [
      {
        src: "web_photos/100_1104.jpg",
        title: "Villa Manin inspektoriai",
        caption: "Pasivaikščiojimas prie didingos varpinės ir rūmų Passariano. Italijos architektūra reikalauja griežtos priežiūros.",
        badge: "Villa Manin"
      },
      {
        src: "web_photos/IMG_0545_2.jpg",
        title: "Miesto panorama kartu su Paolo",
        caption: "Kartu su Paolo apžvelgiant apylinkes: 'Va ten – kalvos, ten – jūra, o ten – geriausia regiono tratorija.'",
        badge: "Su Paolo"
      },
      {
        src: "web_photos/IMG_0558.jpg",
        title: "Pilies kiemo džentelmenas",
        caption: "Šalikas, švarkas, rami šypsena ir senovinės pilies sienos. Kadras, vertas žurnalo viršelio.",
        badge: "Portretas"
      },
      {
        src: "web_photos/Picture_075_5.jpg",
        title: "Išlydint į kelionę",
        caption: "Prieš pat tolimą kelionę: lagaminai paruošti, nuotaika pakili ir šilčiausi šeimos apsikabinimai prieš startą.",
        badge: "Prieš kelionę"
      }
    ]
  },
  {
    id: "kompanija",
    type: "photos",
    tag: "16 skyrius • Kompanijos siela ir rokas",
    title: "Amžinai jaunas: su šeima, draugais ir roko dvasia",
    description: "Voldemaras visada centre: fotobombina kadrus, palaiko Dalios burtus, džiaugiasi Jolijos sugrįžimu ir šėlsta stadiono roke.",
    photos: [
      {
        src: "web_photos/Picture_069_3.jpg",
        title: "Fotobomba Nr. 1",
        caption: "Jokia nuotrauka nebus išbaigta, kol į kadrą su vėjavaikiška šypsena neįlįs pats linksmiausias kompanijos narys.",
        badge: "Fotobomba"
      },
      {
        src: "web_photos/DSCN8026.jpg",
        title: "Hipnozės seansas",
        caption: "Dalia demonstruoja stebuklingus rankų burtus, o Voldemaras už nugaros kantriai palaiko magišką energijos lauką.",
        badge: "Burtininkai"
      },
      {
        src: "web_photos/Jolija_grizo_014.jpg",
        title: "Jolija grįžo!",
        caption: "Didžioji diena: Jolija grįžo, bokalai ant stalo pilni, o Voldemaro akyse – absoliutus džiaugsmas ir ramybė.",
        badge: "Šventinis bokalas"
      },
      {
        src: "web_photos/roko_koncertas_stadione.jpg",
        title: "Roko legendos stadione",
        caption: "Lietus stadione? Užsimeti pončą, keli ranką į viršų ir rokenrolas visu garsu! Voldemarui joks lietus nesutrukdys dainuoti kartu su gitara.",
        badge: "Rokenrolas"
      }
    ]
  },
  {
    id: "archyvas",
    type: "photos",
    tag: "17 skyrius • Išminties lobynas",
    title: "Slaptųjų protokolų analizė ir ateities vizija",
    description: "Kiekviena rimta operacija reikalauja kruopštaus pasirengimo ir gilaus susikaupimo.",
    photos: [
      {
        src: "web_photos/IMG_1081.jpg",
        title: "Plano patvirtinimas",
        caption: "Kruopščiai studijuojamas protokolas: kaip jaustis 25-erių, kai pase parašytas skaičius 70.",
        badge: "Strategija"
      },
      {
        src: "web_photos/DSCN8020.jpg",
        title: "Didžiųjų minčių vakaras",
        caption: "Mąslus žvilgsnis į šventinį stalą: mintyse jau rikiuojasi naujos viršukalnės, kubilai ir kelionės.",
        badge: "Ateities planai"
      }
    ]
  },
  {
    id: "finalas",
    type: "congrats",
    tag: "Jubiliejinis finišas • 70 metų!",
    title: "SU 70-UOJU JUBILIEJUMI, VOLDEMARAI!",
    subtitle: "Septyni dešimtmečiai nepriekaištingos charizmos, meilės šeimai, Friulio žygių ir neišsenkančio humoro jausmo.",
    wishes: [
      "Kad uolos visada turėtų kur patikimai įsikibti!",
      "Kad pirties kubilas visada garuotų, o alaus puta niekada neslūgtų!",
      "Kad jaunystės eliksyro katile niekada nepritrūktų malkų!",
      "Kad kelionių batai nenusitrintų, o nuotykių dvasia tik stiprėtų!",
      "Geležinės sveikatos, laimės ir dar mažiausiai 70 linksmų metų!"
    ],
    closing: "Nuo visos mylinčios šeimos ir draugų!",
    restartText: "Žiūrėti dar kartą ↺"
  }
];
