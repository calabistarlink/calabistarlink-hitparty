/* Catálogo base: título | artista | año de lanzamiento | idioma | género.
   Es una lista curada; el usuario puede sumar sus propias canciones desde la app. */
const SONGS_RAW = `
La Vie en rose|Édith Piaf|1947|fr|pop
Rock Around the Clock|Bill Haley & His Comets|1954|en|rock
Hound Dog|Elvis Presley|1956|en|rock
Volare|Domenico Modugno|1958|it|pop
Johnny B. Goode|Chuck Berry|1958|en|rock
La Bamba|Ritchie Valens|1958|es|rock
Ne me quitte pas|Jacques Brel|1959|fr|balada
Je ne regrette rien|Édith Piaf|1960|fr|balada
Twist and Shout|The Beatles|1963|en|rock
Ring of Fire|Johnny Cash|1963|en|country
(I Can't Get No) Satisfaction|The Rolling Stones|1965|en|rock
Mas que nada|Sérgio Mendes|1966|pt|latin
Gracias a la vida|Violeta Parra|1966|es|balada
Respect|Aretha Franklin|1967|en|rnb
Hey Jude|The Beatles|1968|en|rock
Aux Champs-Élysées|Joe Dassin|1969|fr|pop
Let It Be|The Beatles|1970|en|rock
Oye Cómo Va|Santana|1970|es|rock
Imagine|John Lennon|1971|en|pop
Stairway to Heaven|Led Zeppelin|1971|en|rock
Take Me Home, Country Roads|John Denver|1971|en|country
Mediterráneo|Joan Manuel Serrat|1971|es|balada
Superstition|Stevie Wonder|1972|en|rnb
Libre|Nino Bravo|1972|es|balada
Jolene|Dolly Parton|1973|en|country
Eres tú|Mocedades|1973|es|balada
Porque te vas|Jeanette|1974|es|pop
Bohemian Rhapsody|Queen|1975|en|rock
Hotel California|Eagles|1976|en|rock
Dancing Queen|ABBA|1976|en|disco
Stayin' Alive|Bee Gees|1977|en|disco
Ti amo|Umberto Tozzi|1977|it|pop
Le Freak|Chic|1978|en|disco
I Will Survive|Gloria Gaynor|1978|en|disco
September|Earth, Wind & Fire|1978|en|disco
Don't Stop Me Now|Queen|1978|en|rock
Another Brick in the Wall|Pink Floyd|1979|en|rock
Highway to Hell|AC/DC|1979|en|rock
Gimme! Gimme! Gimme!|ABBA|1979|en|disco
Gloria|Umberto Tozzi|1979|it|pop
La chica de ayer|Nacha Pop|1980|es|rock
Don't Stop Believin'|Journey|1981|en|rock
Thriller|Michael Jackson|1982|en|pop
Beat It|Michael Jackson|1982|en|pop
Eye of the Tiger|Survivor|1982|en|rock
Africa|Toto|1982|en|rock
Felicità|Al Bano & Romina Power|1982|it|pop
Billie Jean|Michael Jackson|1983|en|pop
Sweet Dreams (Are Made of This)|Eurythmics|1983|en|pop
Every Breath You Take|The Police|1983|en|rock
Girls Just Want to Have Fun|Cyndi Lauper|1983|en|pop
Total Eclipse of the Heart|Bonnie Tyler|1983|en|pop
99 Luftballons|Nena|1983|de|pop
L'italiano|Toto Cutugno|1983|it|pop
Like a Virgin|Madonna|1984|en|pop
Purple Rain|Prince|1984|en|rock
Careless Whisper|George Michael|1984|en|pop
Last Christmas|Wham!|1984|en|pop
Take On Me|a-ha|1985|en|pop
Rock Me Amadeus|Falco|1985|de|pop
Livin' on a Prayer|Bon Jovi|1986|en|rock
Persiana Americana|Soda Stereo|1986|es|rock
Hijo de la Luna|Mecano|1986|es|pop
El baile de los que sobran|Los Prisioneros|1986|es|rock
With or Without You|U2|1987|en|rock
Never Gonna Give You Up|Rick Astley|1987|en|pop
Sweet Child O' Mine|Guns N' Roses|1987|en|rock
Bamboleo|Gipsy Kings|1987|es|latin
Ella, elle l'a|France Gall|1987|fr|pop
La incondicional|Luis Miguel|1988|es|balada
Lambada|Kaoma|1989|pt|dance
Nothing Compares 2 U|Sinéad O'Connor|1990|en|pop
Vogue|Madonna|1990|en|pop
Rayando el Sol|Maná|1990|es|rock
De música ligera|Soda Stereo|1990|es|rock
Entre dos tierras|Héroes del Silencio|1990|es|rock
Evidências|Chitãozinho & Xororó|1990|pt|country
Smells Like Teen Spirit|Nirvana|1991|en|rock
Under the Bridge|Red Hot Chili Peppers|1991|en|rock
Enter Sandman|Metallica|1991|en|rock
Me cuesta tanto olvidarte|Mecano|1991|es|pop
I Will Always Love You|Whitney Houston|1992|en|pop
Como la flor|Selena|1992|es|latin
Vivir sin aire|Maná|1992|es|rock
Macarena|Los del Río|1993|es|dance
Lamento boliviano|Enanitos Verdes|1994|es|rock
Bidi Bidi Bom Bom|Selena|1994|es|latin
Wonderwall|Oasis|1995|en|rock
Gangsta's Paradise|Coolio|1995|en|hiphop
Waterfalls|TLC|1995|en|rnb
Con te partirò|Andrea Bocelli|1995|it|balada
Pour que tu m'aimes encore|Céline Dion|1995|fr|pop
María|Ricky Martin|1995|es|latin
Wannabe|Spice Girls|1996|en|pop
La flaca|Jarabe de Palo|1996|es|rock
My Heart Will Go On|Céline Dion|1997|en|pop
Corazón partío|Alejandro Sanz|1997|es|pop
Clavado en un bar|Maná|1997|es|rock
Du hast|Rammstein|1997|de|rock
...Baby One More Time|Britney Spears|1998|en|pop
Believe|Cher|1998|en|dance
Ojos así|Shakira|1998|es|pop
La vida es un carnaval|Celia Cruz|1998|es|latin
Suavemente|Elvis Crespo|1998|es|latin
Smooth|Santana|1999|en|rock
No Scrubs|TLC|1999|en|rnb
Livin' la Vida Loca|Ricky Martin|1999|en|latin
Bailamos|Enrique Iglesias|1999|es|latin
Eres|Café Tacvba|1999|es|rock
Color esperanza|Diego Torres|2001|es|pop
Lose Yourself|Eminem|2002|en|hiphop
Aserejé|Las Ketchup|2002|es|dance
A Dios le pido|Juanes|2002|es|rock
Obsesión|Aventura|2002|es|latin
Hey Ya!|OutKast|2003|en|hiphop
In Da Club|50 Cent|2003|en|hiphop
Crazy in Love|Beyoncé|2003|en|rnb
Mr. Brightside|The Killers|2003|en|rock
Seven Nation Army|The White Stripes|2003|en|rock
Toxic|Britney Spears|2003|en|pop
Gasolina|Daddy Yankee|2004|es|reggaeton
La camisa negra|Juanes|2004|es|pop
La tortura|Shakira|2005|es|pop
Rehab|Amy Winehouse|2006|en|rnb
Te lo agradezco, pero no|Alejandro Sanz|2006|es|pop
Umbrella|Rihanna|2007|en|pop
Stronger|Kanye West|2007|en|hiphop
Viva la Vida|Coldplay|2008|en|rock
Single Ladies (Put a Ring on It)|Beyoncé|2008|en|rnb
Poker Face|Lady Gaga|2008|en|pop
I Gotta Feeling|Black Eyed Peas|2009|en|dance
Bad Romance|Lady Gaga|2009|en|pop
Empire State of Mind|JAY-Z|2009|en|hiphop
Gee|Girls' Generation|2009|ko|pop
Alors on danse|Stromae|2009|fr|dance
Rolling in the Deep|Adele|2010|en|rnb
Firework|Katy Perry|2010|en|pop
Danza Kuduro|Don Omar|2010|es|reggaeton
Party Rock Anthem|LMFAO|2011|en|dance
Somebody That I Used to Know|Gotye|2011|en|pop
Someone Like You|Adele|2011|en|rnb
Titanium|David Guetta|2011|en|dance
Ai Se Eu Te Pego|Michel Teló|2011|pt|latin
Gangnam Style|PSY|2012|ko|dance
Get Lucky|Daft Punk|2013|en|dance
Happy|Pharrell Williams|2013|en|pop
Wake Me Up|Avicii|2013|en|dance
Papaoutai|Stromae|2013|fr|dance
Vivir mi vida|Marc Anthony|2013|es|latin
Propuesta indecente|Romeo Santos|2013|es|latin
Uptown Funk|Mark Ronson|2014|en|pop
Shake It Off|Taylor Swift|2014|en|pop
Bailando|Enrique Iglesias|2014|es|latin
Ay Vamos|J Balvin|2014|es|reggaeton
Dernière danse|Indila|2014|fr|pop
Hotline Bling|Drake|2015|en|hiphop
Hasta la raíz|Natalia Lafourcade|2015|es|pop
Closer|The Chainsmokers|2016|en|dance
Cheap Thrills|Sia|2016|en|pop
Chantaje|Shakira|2016|es|latin
Shape of You|Ed Sheeran|2017|en|pop
Believer|Imagine Dragons|2017|en|rock
Despacito|Luis Fonsi|2017|es|reggaeton
Mi Gente|J Balvin|2017|es|reggaeton
Mayores|Becky G|2017|es|reggaeton
Felices los 4|Maluma|2017|es|reggaeton
Havana|Camila Cabello|2017|en|pop
God's Plan|Drake|2018|en|hiphop
SICKO MODE|Travis Scott|2018|en|hiphop
Fake Love|BTS|2018|ko|pop
Calma|Pedro Capó|2018|es|latin
Te Boté|Casper Mágico|2018|es|reggaeton
Blinding Lights|The Weeknd|2019|en|pop
Bad Guy|Billie Eilish|2019|en|pop
Old Town Road|Lil Nas X|2019|en|hiphop
Dance Monkey|Tones and I|2019|en|pop
Watermelon Sugar|Harry Styles|2019|en|pop
Con Calma|Daddy Yankee|2019|es|reggaeton
Levitating|Dua Lipa|2020|en|pop
Dynamite|BTS|2020|en|pop
How You Like That|BLACKPINK|2020|ko|pop
Dákiti|Bad Bunny|2020|es|reggaeton
Hawái|Maluma|2020|es|reggaeton
drivers license|Olivia Rodrigo|2021|en|pop
Zitti e buoni|Måneskin|2021|it|rock
Pepas|Farruko|2021|es|dance
As It Was|Harry Styles|2022|en|pop
Tití Me Preguntó|Bad Bunny|2022|es|reggaeton
Provenza|Karol G|2022|es|reggaeton
Flowers|Miley Cyrus|2023|en|pop
TQG|Karol G|2023|es|reggaeton
Ella baila sola|Peso Pluma|2023|es|latin
Asa Branca|Luiz Gonzaga|1947|pt|country
La Mer|Charles Trenet|1946|fr|pop
Hymne à l'amour|Édith Piaf|1950|fr|balada
Padam, padam|Édith Piaf|1951|fr|pop
Tutti Frutti|Little Richard|1955|en|rock
Folsom Prison Blues|Johnny Cash|1955|en|country
Heartbreak Hotel|Elvis Presley|1956|en|rock
Blue Suede Shoes|Carl Perkins|1956|en|rock
That'll Be the Day|Buddy Holly|1957|en|rock
Great Balls of Fire|Jerry Lee Lewis|1957|en|rock
The Twist|Chubby Checker|1960|en|rock
Stand by Me|Ben E. King|1961|en|rnb
Can't Help Falling in Love|Elvis Presley|1961|en|pop
Sukiyaki|Kyu Sakamoto|1961|ja|pop
Garota de Ipanema|Tom Jobim|1962|pt|latin
Be My Baby|The Ronettes|1963|en|pop
La Javanaise|Serge Gainsbourg|1963|fr|pop
My Girl|The Temptations|1964|en|rnb
You've Lost That Lovin' Feelin'|The Righteous Brothers|1964|en|pop
Oh, Pretty Woman|Roy Orbison|1964|en|rock
Yesterday|The Beatles|1965|en|rock
Like a Rolling Stone|Bob Dylan|1965|en|rock
California Dreamin'|The Mamas & the Papas|1965|en|pop
La Bohème|Charles Aznavour|1965|fr|balada
Good Vibrations|The Beach Boys|1966|en|rock
Light My Fire|The Doors|1967|en|rock
Purple Haze|Jimi Hendrix|1967|en|rock
A Whiter Shade of Pale|Procol Harum|1967|en|rock
What a Wonderful World|Louis Armstrong|1967|en|balada
Emmenez-moi|Charles Aznavour|1967|fr|pop
Sympathy for the Devil|The Rolling Stones|1968|en|rock
Born to Be Wild|Steppenwolf|1968|en|rock
Azzurro|Adriano Celentano|1968|it|pop
Pra não dizer que não falei das flores|Geraldo Vandré|1968|pt|pop
Come Together|The Beatles|1969|en|rock
Proud Mary|Creedence Clearwater Revival|1969|en|rock
Space Oddity|David Bowie|1969|en|rock
Aquele abraço|Gilberto Gil|1969|pt|pop
Je t'aime... moi non plus|Serge Gainsbourg|1969|fr|pop
Bridge over Troubled Water|Simon & Garfunkel|1970|en|pop
Lola|The Kinks|1970|en|rock
El triste|José José|1970|es|balada
La nave del olvido|José José|1970|es|balada
What's Going On|Marvin Gaye|1971|en|rnb
Ain't No Sunshine|Bill Withers|1971|en|rnb
Detalhes|Roberto Carlos|1971|pt|balada
Smoke on the Water|Deep Purple|1972|en|rock
Rocket Man|Elton John|1972|en|pop
Walk on the Wild Side|Lou Reed|1972|en|rock
Lean on Me|Bill Withers|1972|en|rnb
El Rey|Vicente Fernández|1972|es|latin
Volver, volver|Vicente Fernández|1972|es|latin
Let's Get It On|Marvin Gaye|1973|en|rnb
Killing Me Softly with His Song|Roberta Flack|1973|en|rnb
Live and Let Die|Wings|1973|en|rock
Waterloo|ABBA|1974|en|pop
Sweet Home Alabama|Lynyrd Skynyrd|1974|en|rock
Quimbara|Celia Cruz|1974|es|latin
Wish You Were Here|Pink Floyd|1975|en|rock
Mamma Mia|ABBA|1975|en|pop
Born to Run|Bruce Springsteen|1975|en|rock
Le Sud|Nino Ferrer|1975|fr|pop
Er gehört zu mir|Marianne Rosenberg|1975|de|pop
Ma il cielo è sempre più blu|Rino Gaetano|1975|it|pop
Knowing Me, Knowing You|ABBA|1976|en|pop
Don't Go Breaking My Heart|Elton John|1976|en|pop
Go Your Own Way|Fleetwood Mac|1977|en|rock
Dreams|Fleetwood Mac|1977|en|rock
I Feel Love|Donna Summer|1977|en|disco
We Will Rock You|Queen|1977|en|rock
Heroes|David Bowie|1977|en|rock
Roxanne|The Police|1978|en|rock
Sultans of Swing|Dire Straits|1978|en|rock
Y.M.C.A.|Village People|1978|en|disco
Born to Be Alive|Patrick Hernandez|1978|en|disco
Pedro Navaja|Rubén Blades|1978|es|latin
El cantante|Héctor Lavoe|1978|es|latin
Generale|Francesco De Gregori|1978|it|pop
Hot Stuff|Donna Summer|1979|en|disco
We Are Family|Sister Sledge|1979|en|disco
London Calling|The Clash|1979|en|rock
Rapper's Delight|The Sugarhill Gang|1979|en|hiphop
Albachiara|Vasco Rossi|1979|it|rock
Another One Bites the Dust|Queen|1980|en|rock
Back in Black|AC/DC|1980|en|rock
9 to 5|Dolly Parton|1980|en|country
Under Pressure|Queen|1981|en|rock
Don't You Want Me|The Human League|1981|en|pop
Sarà perché ti amo|Ricchi e Poveri|1981|it|pop
Skandal im Sperrbezirk|Spider Murphy Gang|1981|de|rock
Les Lacs du Connemara|Michel Sardou|1981|fr|pop
Mil horas|Los Abuelos de la Nada|1982|es|rock
Major Tom (Völlig losgelöst)|Peter Schilling|1982|de|pop
Ein bisschen Frieden|Nicole|1982|de|pop
Karma Chameleon|Culture Club|1983|en|pop
Time After Time|Cyndi Lauper|1983|en|pop
Let's Dance|David Bowie|1983|en|pop
Dancing in the Dark|Bruce Springsteen|1984|en|rock
When Doves Cry|Prince|1984|en|rock
Wake Me Up Before You Go-Go|Wham!|1984|en|pop
Material Girl|Madonna|1984|en|pop
Footloose|Kenny Loggins|1984|en|rock
Plastic Love|Mariya Takeuchi|1984|ja|pop
Trátame suavemente|Soda Stereo|1984|es|rock
La voz de los '80|Los Prisioneros|1984|es|rock
Querida|Juan Gabriel|1984|es|balada
Meu erro|Os Paralamas do Sucesso|1984|pt|rock
Männer|Herbert Grönemeyer|1984|de|pop
Fürstenfeld|STS|1984|de|pop
Everybody Wants to Rule the World|Tears for Fears|1985|en|pop
Money for Nothing|Dire Straits|1985|en|rock
Cuando pase el temblor|Soda Stereo|1985|es|rock
Nada personal|Soda Stereo|1985|es|rock
Je te donne|Jean-Jacques Goldman|1985|fr|pop
Mistral gagnant|Renaud|1985|fr|pop
Walk Like an Egyptian|The Bangles|1986|en|pop
Caruso|Lucio Dalla|1986|it|balada
Hasta que te conocí|Juan Gabriel|1986|es|balada
Voyage, voyage|Desireless|1986|fr|pop
Alagados|Os Paralamas do Sucesso|1986|pt|rock
Pour Some Sugar on Me|Def Leppard|1987|en|rock
Welcome to the Jungle|Guns N' Roses|1987|en|rock
Faith|George Michael|1987|en|pop
(I've Had) The Time of My Life|Bill Medley|1987|en|pop
La Isla Bonita|Madonna|1987|en|pop
Tren al sur|Los Prisioneros|1987|es|rock
Joe le taxi|Vanessa Paradis|1987|fr|pop
Don't Worry, Be Happy|Bobby McFerrin|1988|en|pop
Straight Up|Paula Abdul|1988|en|pop
Ne partez pas sans moi|Céline Dion|1988|fr|pop
Ven devórame otra vez|Lalo Rodríguez|1988|es|latin
Like a Prayer|Madonna|1989|en|pop
Ojalá que llueva café|Juan Luis Guerra|1989|es|latin
Cha-La Head-Cha-La|Hironobu Kageyama|1989|ja|rock
Ice Ice Baby|Vanilla Ice|1990|en|hiphop
U Can't Touch This|MC Hammer|1990|en|hiphop
Enjoy the Silence|Depeche Mode|1990|en|pop
Friends in Low Places|Garth Brooks|1990|en|country
Amor eterno|Juan Gabriel|1990|es|balada
Burbujas de amor|Juan Luis Guerra|1990|es|latin
La bilirrubina|Juan Luis Guerra|1990|es|latin
Se bastasse una canzone|Eros Ramazzotti|1990|it|pop
Un'estate italiana|Gianna Nannini|1990|it|pop
Verdammt, ich lieb' dich|Matthias Reim|1990|de|pop
Losing My Religion|R.E.M.|1991|en|rock
Black or White|Michael Jackson|1991|en|pop
Summertime|DJ Jazzy Jeff & The Fresh Prince|1991|en|hiphop
Viviendo deprisa|Alejandro Sanz|1991|es|pop
Creep|Radiohead|1992|en|rock
Rhythm Is a Dancer|Snap!|1992|en|dance
Achy Breaky Heart|Billy Ray Cyrus|1992|en|country
Sin documentos|Los Rodríguez|1992|es|rock
What Is Love|Haddaway|1993|en|dance
La gota fría|Carlos Vives|1993|es|latin
Matador|Los Fabulosos Cadillacs|1993|es|rock
Foule sentimentale|Alain Souchon|1993|fr|pop
Cose della vita|Eros Ramazzotti|1993|it|pop
La solitudine|Laura Pausini|1993|it|pop
Zombie|The Cranberries|1994|en|rock
Basket Case|Green Day|1994|en|rock
All I Want for Christmas Is You|Mariah Carey|1994|en|pop
Juicy|The Notorious B.I.G.|1994|en|hiphop
Amor prohibido|Selena|1994|es|latin
Si una vez|Selena|1994|es|latin
Vasos vacíos|Los Fabulosos Cadillacs|1994|es|rock
Strani amori|Laura Pausini|1994|it|pop
California Love|2Pac|1995|en|hiphop
Estoy aquí|Shakira|1995|es|pop
Vivo per lei|Andrea Bocelli|1995|it|balada
Don't Look Back in Anger|Oasis|1996|en|rock
Più bella cosa|Eros Ramazzotti|1996|it|pop
Sally|Vasco Rossi|1996|it|rock
Song 2|Blur|1997|en|rock
Bitter Sweet Symphony|The Verve|1997|en|rock
Tubthumping|Chumbawamba|1997|en|rock
Man! I Feel Like a Woman!|Shania Twain|1997|en|country
Around the World|Daft Punk|1997|en|dance
Chan Chan|Buena Vista Social Club|1997|es|latin
Clandestino|Manu Chao|1998|es|rock
La playa|La Oreja de Van Gogh|1998|es|pop
I Want It That Way|Backstreet Boys|1999|en|pop
Genie in a Bottle|Christina Aguilera|1999|en|pop
Say My Name|Destiny's Child|1999|en|rnb
Sandstorm|Darude|1999|en|dance
Corazón espinado|Santana|1999|es|rock
Anna Júlia|Los Hermanos|1999|pt|rock
Yellow|Coldplay|2000|en|rock
Beautiful Day|U2|2000|en|rock
In the End|Linkin Park|2000|en|rock
One More Time|Daft Punk|2000|en|dance
Me gustas tú|Manu Chao|2001|es|rock
Mein Herz brennt|Rammstein|2001|de|rock
Sonne|Rammstein|2001|de|rock
Complicated|Avril Lavigne|2002|en|rock
Clocks|Coldplay|2002|en|rock
Hurt|Johnny Cash|2002|en|country
Mariposa traicionera|Maná|2002|es|rock
Bring Me to Life|Evanescence|2003|en|rock
Numb|Linkin Park|2003|en|rock
No es lo mismo|Alejandro Sanz|2003|es|pop
Rosas|La Oreja de Van Gogh|2003|es|pop
Since U Been Gone|Kelly Clarkson|2004|en|pop
Boulevard of Broken Dreams|Green Day|2004|en|rock
Lo que pasó, pasó|Daddy Yankee|2004|es|reggaeton
Gold Digger|Kanye West|2005|en|hiphop
Hung Up|Madonna|2005|en|dance
Rakata|Wisin & Yandel|2005|es|reggaeton
Hips Don't Lie|Shakira|2006|en|pop
SexyBack|Justin Timberlake|2006|en|pop
Crazy|Gnarls Barkley|2006|en|rnb
Valerie|Mark Ronson|2007|en|pop
Bleeding Love|Leona Lewis|2007|en|pop
Use Somebody|Kings of Leon|2008|en|rock
Sex on Fire|Kings of Leon|2008|en|rock
Love Story|Taylor Swift|2008|en|country
Halo|Beyoncé|2008|en|rnb
No me doy por vencido|Luis Fonsi|2008|es|pop
Nobody|Wonder Girls|2008|ko|pop
Tell Me|Wonder Girls|2007|ko|pop
Sorry, Sorry|Super Junior|2009|ko|pop
Ring Ding Dong|SHINee|2009|ko|pop
Teenage Dream|Katy Perry|2010|en|pop
Just the Way You Are|Bruno Mars|2010|en|pop
Grenade|Bruno Mars|2010|en|pop
Je veux|Zaz|2010|fr|pop
Levels|Avicii|2011|en|dance
We Found Love|Rihanna|2011|en|dance
Call Me Maybe|Carly Rae Jepsen|2011|en|pop
Skyfall|Adele|2012|en|pop
Don't You Worry Child|Swedish House Mafia|2012|en|dance
Fantastic Baby|BIGBANG|2012|ko|pop
All of Me|John Legend|2013|en|rnb
Roar|Katy Perry|2013|en|pop
Counting Stars|OneRepublic|2013|en|pop
Animals|Martin Garrix|2013|en|dance
Wagon Wheel|Darius Rucker|2013|en|country
Atemlos durch die Nacht|Helene Fischer|2013|de|pop
Thinking Out Loud|Ed Sheeran|2014|en|pop
Stay with Me|Sam Smith|2014|en|rnb
Blank Space|Taylor Swift|2014|en|pop
Auf uns|Andreas Bourani|2014|de|pop
Hello|Adele|2015|en|rnb
Lean On|Major Lazer|2015|en|dance
Tennessee Whiskey|Chris Stapleton|2015|en|country
Ginza|J Balvin|2015|es|reggaeton
Bella|Maître Gims|2015|fr|pop
Can't Stop the Feeling!|Justin Timberlake|2016|en|pop
La bicicleta|Carlos Vives|2016|es|latin
Perfect|Ed Sheeran|2017|en|pop
New Rules|Dua Lipa|2017|en|pop
DNA|BTS|2017|ko|pop
Bum Bum Tam Tam|MC Fioti|2017|pt|dance
Sua cara|Major Lazer|2017|pt|dance
Ddu-Du Ddu-Du|BLACKPINK|2018|ko|pop
Lemon|Kenshi Yonezu|2018|ja|pop
Malamente|Rosalía|2018|es|pop
Taki Taki|DJ Snake|2018|es|reggaeton
Sin pijama|Becky G|2018|es|reggaeton
Djadja|Aya Nakamura|2018|fr|pop
Señorita|Shawn Mendes|2019|en|pop
Circles|Post Malone|2019|en|pop
Cruel Summer|Taylor Swift|2019|en|pop
Boy With Luv|BTS|2019|ko|pop
Kill This Love|BLACKPINK|2019|ko|pop
Pretender|Official HIGE DANdism|2019|ja|pop
Gurenge|LiSA|2019|ja|pop
Soldi|Mahmood|2019|it|pop
Tusa|Karol G|2019|es|reggaeton
Callaíta|Bad Bunny|2019|es|reggaeton
Con altura|Rosalía|2019|es|reggaeton
Yo perreo sola|Bad Bunny|2020|es|reggaeton
good 4 u|Olivia Rodrigo|2021|en|rock
Stay|The Kid LAROI|2021|en|pop
Next Level|aespa|2021|ko|pop
Butter|BTS|2021|en|pop
Dos oruguitas|Sebastián Yatra|2021|es|pop
Anti-Hero|Taylor Swift|2022|en|pop
Love Dive|IVE|2022|ko|pop
Hype Boy|NewJeans|2022|ko|pop
Me porto bonito|Bad Bunny|2022|es|reggaeton
Despechá|Rosalía|2022|es|pop
Super Shy|NewJeans|2023|ko|pop
Espresso|Sabrina Carpenter|2024|en|pop
Not Like Us|Kendrick Lamar|2024|en|hiphop
`;

const GENRES = {
  pop: 'Pop', rock: 'Rock', latin: 'Latino / tropical', reggaeton: 'Reggaetón', hiphop: 'Hip-hop',
  dance: 'Electrónica / dance', rnb: 'R&B / soul', disco: 'Disco / funk', balada: 'Baladas', country: 'Country / folk'
};
const LANGS = {
  es: 'Español', en: 'Inglés', pt: 'Portugués', fr: 'Francés', it: 'Italiano', de: 'Alemán', ko: 'Coreano', ja: 'Japonés'
};
const SONGS = [...new Map(SONGS_RAW.trim().split('\n').map(l => {
  const [title, artist, year, lang, genre] = l.split('|');
  return [title + '|' + artist, { id: title + '|' + artist, title, artist, year: +year, lang, genre }];
})).values()];
