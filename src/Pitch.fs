module Pitch

open Model

let decouvrezM =
    Cons [
        Txt "Découvrez l'incroyable double vie"
        Alt [
            Txt "de John"
            Txt "de Silvio"
            Txt "de Jean Marcel"
            Txt "de Paolo"
            Txt "de Thomas"
            Txt "de Max"
            Txt "de Maurice"
            Txt "de Boris"
            Txt "de Gérard"
            Txt "de Romain"
            Txt "d'Arthur"
            Txt "de Kevin"
            Txt "de Wilson"
            Txt "de David"
        ]
        Txt ","
        Alt [
            Txt "flic"
            Txt "fleuriste"
            Txt "psychiatre"
            Txt "peintre"
            Txt "colleur d'affiches"
            Txt "employé de bureau"
            Txt "chef d'entreprise"
            Txt "banquier"
            Txt "chauffeur de taxi"
            Txt "conducteur de métro"
            Txt "organisateur de mariages"
            Txt "paisible retraité"
            Cons [ Txt "vendeur de"; Alt [ Txt "téléphones"; Txt "canapés"; Txt "farces et attrape"; Txt "voyages"; Txt "voitures"; Txt "lingerie connectée"; ]]
            Txt "coiffeur"
            Cons [ Alt [Txt "toiletteur"; Txt "psychanalyste"; Txt "ostéopathe"; Txt "styliste" ]; Alt [ Txt "pour chiens"; Txt "pour chats" ]]
            Cons [ Txt "prof"; Alt [ Txt "d'anglais"; Txt "d'histoire"; Txt "de maths"; Txt "de flying yoga"; Txt "de pilates"; Txt "de théâtre"; Txt "de chant"; Txt "de science nat"; Txt "de claquettes" ]]
            Txt "politicien"
        ]
        Txt "le jour... et"
        Alt [
            Txt "serial killer"
            Cons [Txt "dealer"; Alt [ Txt "de crack"; Txt "de viagra"; Txt "de blagues carambar"; Txt "de protoxyde d'azote" ]]
            Cons [ Txt "super héros capable"
                   Alt [
                        Txt "d'arrêter le temps"
                        Txt "de télékinésie"
                        Txt "de téléportation"
                        Txt "de commander au feu"
                        Txt "de lire dans les pensées"
                        Txt "de brouiller les ondes des téléphones portables"
                        Txt "de retarder les montres"
                    ]]
            Txt "cambrioleur"
            Txt "masseur de pieds"
            Txt "vampire"
            Txt "voleur d'organes à la tire"
            Txt "gérant de boîte échangiste"
            Txt "acteur porno"
            Txt "trader"
            Txt "hacker"
            Txt "braqueur de vieilles dames"
            Txt "kidnappeur de chiens"
            Txt "chirurgien plastique amateur"
            Txt "voyant par téléphone"
            Txt "mafioso"
            Txt "yakusa"
            Txt "trafiquant d'organes"
            Txt "tueur à gages"
            Txt "prêtre exorciste"
            Txt "gourou d'une secte"
            Txt "chasseur de primes"
            Txt "gigolo"
            Cons [ Txt "dessinateur de"; Alt [Txt "BD"; Txt "manga"; Txt "pin up" ] ]
            Txt "auteur jeunesse"
            Txt "taxidermiste amateur"
        ]
        Txt "la nuit."
    ]

let decouvrezF =
    Cons [
        Txt "Découvrez l'incroyable double vie"
        Alt [
            Txt "de Julie"
            Txt "de Mélanie"
            Txt "de Marguerite"
            Txt "de Pénélope"
            Txt "de Magali"
            Txt "de Mariella"
            Txt "de Dolores"
            Txt "de Marie"
            Txt "de Sarah"
            Txt "d'Emmanuelle"
            Txt "d'Odile"
            Txt "de Claire"
            Txt "de Marie-Charlotte"
        ]
        Txt ","
        Alt [
            Txt "flic"
            Txt "fleuriste"
            Txt "psychiatre"
            Txt "peintre"
            Txt "colleuse d'affiches"
            Txt "employée de bureau"
            Txt "cheffe d'entreprise"
            Txt "banquière"
            Txt "chauffeuse Uber"
            Txt "conductrice de bus"
            Txt "organisatrice de mariages"
            Txt "architecte d'intérieur"
            Txt "paisible retraitée"
            Cons [ Txt "vendeuse"; Alt [ Txt "de sex toys connectés"; Txt "d'électromenager connecté"; Txt "de fenêtres oscillo-battantes"; Txt "de trottinettes électriques"; Txt "de lingerie" ]]
            Txt "coiffeuse"
            Cons [ Alt [Txt "toiletteuse"; Txt "psychanalyste"; Txt "ostéopathe"; Txt "styliste" ]; Alt [ Txt "pour chiens"; Txt "pour chats" ]]
            Cons [ Txt "coach"; Alt [ Txt "de prise de parole"; Txt "de conversation"; Txt "de vie"; Txt "de drague sur internet"; Txt "sportive"; Txt "vocal" ]]
            Txt "politicienne"
        ]
        Txt "le jour... et"
        Alt [
            Txt "serial killer"
            Cons [Txt "dealeuse"; Alt [ Txt "de crack"; Txt "de viagra"; Txt "de protoxyde d'azote"; Txt "de blagues carambar" ]]
            Cons [ Txt "super héroïne capable"
                   Alt [
                        Txt "d'arrêter le temps"
                        Txt "de télékinésie"
                        Txt "de téléportation"
                        Txt "de commander au feu"
                        Txt "de lire dans les pensées"
                        Txt "de brouiller les ondes des téléphones portables"
                        Txt "de retarder les montres"
                    ]]
            Txt "cambrioleuse"
            Txt "masseuse de pieds"
            Txt "masseuse shiatsu"
            Txt "vampire"
            Txt "voleuse d'organes à la tire"
            Txt "tradeuse"
            Txt "hackeuse"
            Txt "championne de pole dance"
            Txt "braqueuse de vieilles dames"
            Txt "chirurgienne plastique amateure"
            Txt "voyante par téléphone"
            Txt "mafiosa"
            Txt "yakusa"
            Txt "trafiquante d'organes"
            Txt "tueuse à gages"
            Txt "prêtre exorciste"
            Txt "gourou d'une secte"
            Txt "chasseuse de primes"
            Cons [ Txt "dessinatrice de"; Alt [Txt "BD"; Txt "manga"; Txt "pin up" ] ]
            Txt "performeuse burlesque"
            Txt "comique de stand up"
            Cons [ Txt "autrice"; Alt [ Txt "jeunesse"; Txt "de théâtre" ]]
            Txt "chanteuse de RnB"
        ]
        Txt "la nuit."
    ]
let rencontre il le =
    Cons [
        Txt "L'irruption"
        Alt [
            Txt "de sa fille cachée"
            Txt "d'une prof de fitness noctambule"
            Txt "d'une petite fée jalouse et collante"
            Txt "d'une vagabonde sans le sou"
            Txt "d'une princesse deshéritée"
            Alt [ Txt "d'une nouvelle employée un peu trop curieuse"
                  Txt "d'un nouveau collègue un peu fouineur" ]
            Cons [ Alt [ Txt "d'un frère jumeau"; Txt "d'une soeur" ]
                   Txt "dont "
                   Txt il 
                   Txt "ignorait l'existence"]
            Txt "d'un amour de jeunesse oublié"
            Txt "d'une nouvelle voisine cachant un lourd secret"
            Txt "d'un extraterrestre anthropologue"
            Txt "d'un fantôme triste"
            Txt "d'un thermomix connecté"
            Txt "d'une intelligence artificielle compatisante"
            Txt "d'une rôliste elfique"
            Txt "d'un rôliste timide"
            Txt "d'un chien d'aveugle sans maître" ]
        Alt [
            Txt "dans sa vie peu ordinaire"
            Txt "dans son quotidien trop bien réglé"
            Txt "dans son emploi du temps bien rempli" 
        ]
        Alt [
            Txt "va lui faire commettre une erreur fatale"
            Txt (le + " conduira sur le chemin de la vengeance")
            Txt "va mettre en péril sa couverture"
            Txt "risque de lui faire commettre un crime irréparable"
            Txt "sera le grain de sable qui fera tout dérailler"
            Txt ("l'emmènera sur les routes de l'amour qu'"+il+ " n'avait jamais empruntés")
        ]
        Txt "."
    ]
let accident pronom article =
    Cons [
        Txt "Suite à"
        Alt [
            Cons [ Txt "un accident"; Alt [ Txt "de trottinette"; Txt "de char à voile"; Txt "de coiffure"; Txt "de vélo"; Txt "vasculaire cérébral" ]]
            Txt "une maladie dégénérative"
            Txt "un rêve prémonitoire traumatisant"
            Txt "la prédiction fatale d'une cartomancienne"
            Txt "une faillite soudaine"
            Txt "une lamentable méprise"
            Cons [ Txt "une overdose de"; Alt [ Txt "médicaments"; Txt "laxatifs"; Txt "calmants"; Txt "décontractants musculaires"; Txt "probiotiques"; Txt "tisane détox"]]
        ]
        Txt pronom
        Alt [
            Txt "se met à tout confondre"
            Txt "se met à tout mélanger"
            Txt "doit tout avouer à sa famille"
            Txt "commet des erreurs irréparables"
            Txt "remet tout en cause"
            Txt "décide de tout arrêter. Mais le passé ne se laisse pas si facilement oublier.."
            Txt ("décide de repartir à zéro. Mais des ennemis invisibles " + article + " surveillent..")
        ]
        Txt "."
    ]

let doubleVie = 
    Alt [
        Cons [
            decouvrezM
            Alt [
                rencontre "il" "le"
                accident "il" "le"
            ]
        ]
        Cons [
            decouvrezF
            Alt [
                rencontre "elle" "la"
                accident "elle" "la"
            ]
        ]
    ]
let catastrophe =
    Cons[ 
        Alt [
            Cons [
                Alt [ 
                    Txt "Un groupe d'étudiants insouciants"
                    Txt "Un couple de jeunes mariés"
                    Txt "Un couple de jeunes amoureux"
                    Txt "Un groupe de collègues en team building" 
                    Txt "Un groupe de jeunes gender fluid"]
                Txt "part faire" ]
            Cons [
                Alt [
                    Txt "Suite à un match Tinder, deux célibataires"
                    Cons [ Alt [ Txt "Des jeunes"
                                 Txt "Des gamins"
                                 Txt "Des enfants" ]
                           Alt [ Txt "en BMX" 
                                 Txt "en rollers"
                                 Txt "en trottinette"
                                 Txt "en skate" ] 
                    ]
                    Cons [ Txt "Lors d'une rencontre IRL, des joueurs "
                           Alt [
                               Txt "de Fortnite"
                               Txt "de World of Warcraft"
                               Txt "de World of Arbeitskraft"
                               Txt "de Minecraft"
                           ]
                    ]
                ]

                Txt "partent faire" ] ]

        Alt [
            Txt "une balade"
            Txt "une excursion"
            Txt "un pique nique"
            Txt "un parcours d'orientation"
            Txt "de l'escalade"
            Txt "un karaoké"
            Txt "un laser game"
            Txt "un trek"
        ]
        Alt [
            Txt "en forêt"
            Txt "en montagne"
            Txt "dans une friche industrielle"
            Txt "dans un village désert"
            Txt "dans un village troglodyte"
            Cons [ Txt "dans les anciens docks"; Alt [ Txt "du Havre"; Txt "de Marseille"; Txt "de Saint Nazaire" ]]
            Txt "à Pontault-Combault"
            Txt "dans les catacombes"
            Txt "près d'un site militaire"
            Txt "près d'une centrale nucléaire"
        ]
        Txt ". Ils ignorent que leurs pas les mènent tout droit vers"
        Alt [
            Cons [ Txt "le repaire d'un déséquilibré" 
                   Alt [
                    Txt "passionné par la putréfaction"
                    Cons [ Txt "collectionneur de"; Alt [ Txt  "scalps"; Txt "fémurs"; Txt "Panini de la coupe du monde 1998"; Txt "pancréas" ] ]
                    Txt "amateur de chirurgie plastique"
                    Txt "ancien chirurgien spécialiste des greffes en tout genre"
                    Txt "passionné de prothèses robotiques" ]]
            Txt "le repaire d'insectes géants et assoiffés de sang"
            Txt "une base extraterrestre"
            Cons [
                Txt "une faille spatio-temporelle"
                Alt [ Txt "qui les ramène au Moyen Age"
                      Txt "qui les ramène en 2007"
                      Txt "qui les ramène le jour de leur naissance"
                      Txt "qui les propulse dans un futur apocalyptique"
                      Txt "qui les propulse dans un futur verdoyant"
                      Txt "qui leur fait vivre leur propre mort"
                      Txt "qui crée une boucle étrange"
                      Txt "qui les envoie au XIXe siècle" ]
            ]
            Cons [ Txt "un cimetière indien oublié"
                   Alt [ Txt "où rôdent des esprits vengeurs"
                         Txt "où les pierres sont vivantes"
                         Txt "où les ombres peuvent vous engloutir"
                         Txt "où un shaman attend depuis des siècles une âme à posseder"
                         Txt "où un sorcier aspire les âmes des égarés"
                         Txt "peuplé d'esprits frappeurs" ]
            ]
            Cons [ Txt "une secte qui voue un culte"; Alt [ Txt "aux serpents"; Txt "aux extraterrestres"; Txt "à Alain Juppé"; Txt "aux Reptiliens" ]]
            Cons [ Txt "le repaire"
                   Alt [ 
                        Cons [ Txt "de terroristes qui élaborent un nouveau type"
                               Alt [ 
                                    Txt "de bombe olfactive"
                                    Cons [ Txt "de virus"
                                           Alt [ 
                                                Txt "de gasto-entérite"
                                                Txt "H1N1"
                                                Txt "ebola"
                                                 ]]
                                    Txt "de grippe espagnole"
                                    Txt "de peste bubonique"
                                    Txt "de variole"
                                    Txt "d'arme chimique"
                                    Txt "de drogue synthétique qui déclenche des hallucinations"
                                    Cons [ 
                                        Txt "de thé ayurvédique qui"
                                        Alt [ Txt "provoque de graves troubles du comportement"
                                              Txt "rend épileptique"
                                              Txt "rend paranoïaque"
                                              Txt "fait entendre des voix"
                                              Txt "rend fou"
                                              Txt "rend dépressive" ] ] ]]
                        Txt "d'une bête aussi mystérieuse que sanguinaire" ] ]
        ]
        Txt "."  
    ]


let boyMeetsGirl =
    Cons [
        Alt [
            Txt "Un cowboy"
            Txt "Un retraité"
            Txt "Un flic"
            Txt "Un boxeur"
            Txt "Un trader"
            Txt "Un instagrammeur"
            Txt "Un youtubeur"
            Txt "Un ostréiculteur"
            Txt "Un clone"
            Txt "Un clown"
            Txt "Un justicier masqué"
            Txt "Un pompier volontaire"
            Txt "Un mariachi"
            Txt "Un marchand de glaces ambulant"
            Txt "Un pilote de tanker intergalactique"
            Txt "Un père de famille"
            Txt "Un karatéka"
            Txt "Un prince"
            Txt "Un génie de l'informatique"
            Cons [ Txt "Un professeur"; Alt [ Txt "de mathématiques"; Txt "d'histoire"; Txt "d'anglais"; Txt "de physique quantique"]]
            Txt "Un cuisinier"
            Txt "Un jeune peintre"
            Txt "Un boucher-charcutier"
            Txt "Un explorateur"
            Txt "Un SDF" 
            Txt "Un paparazzi"
            Txt "Un gilet jaune"
        ]
        Alt [
            Txt "boulimique"
            Txt "au grand coeur"
            Txt "cocaïnomane"
            Txt "accro au coca light"
            Txt "fatigué par la vie"
            Txt "sans foi ni loi"
            Txt "indécis"
            Txt "agoraphobe"
            Txt "impulsif"
            Txt "en proie à des hallucinations"
            Txt "de petite taille"
            Txt "incontinent"
            Txt "intrépide"
            Txt "divorcé"
            Txt "atteint d'Alzheimer"
            Txt "fauché"
            Txt "sans scrupules"
            Txt "doté de superpouvoirs"
            Txt "amnésique"
            Txt "venu d'un pays lointain"
            Txt "américain"; Txt "japonais"; Txt "russe"
            Txt "philosophe"
            Txt "qui vient de gagner au loto"
            Txt "excentrique"
            Txt "timide"
            Txt "ventriloque"
        ]
        Alt [
            Txt "emboutit la voiture d'"
            Cons [ Txt "rencontre"
                   Alt [ 
                        Txt "sur internet"
                        Txt "au rayon surgelés"
                        Txt "dans un salon de tatouage"
                        Txt "chez son médecin"
                        Txt "par hasard" ]]
            Cons [ Txt "bouscule"
                   Alt [
                       Txt "dans la rue"
                       Txt "dans une file d'attente"
                       Txt "dans un métro bondé" ]]
            Txt "discute en MP avec"
            Txt "rencontre sur Tinder"
            Cons [ Txt "sauve"
                   Alt [
                       Txt "d'une tornade"
                       Txt "d'un grave accident"]]
            Txt "se retrouve dans un train avec"
            Txt "est coincé dans un ascenseur avec"
            Txt "tombe sur le profil d'"
            Txt "trouve le portable d'"
            Txt "échange par erreur sa valise avec"
            Txt "renverse ses courses aux pieds d'"
        ]
        Alt [
            Txt "une bibliothécaire"
            Txt "une catcheuse"
            Txt "une contorsionniste"
            Txt "une strip teaseuse"
            Txt "une vieille dame"
            Txt "une journaliste"
            Txt "une chanteuse"
            Txt "une neurologue"
            Txt "une urologue"
            Txt "une voleuse"
            Txt "une orpheline"
            Txt "une star de cinéma"
            Txt "une diva"
            Txt "une cyborg"
            Txt "une gendarmette"
            Txt "une gymnaste"
            Txt "une héritière"
            Txt "une chômeuse"
            Txt "une gérante de baraque à frites"
            Txt "une voisine"
            Txt "une joggeuse"
        ]
        Alt [
            Txt "sexy"
            Txt "anorexique"
            Txt "ambitieuse"
            Txt "qui prédit l'avenir"
            Txt "qui sait lire dans les pensées"
            Txt "maladroite"
            Txt "accro au banga"
            Cons [ Txt "qui a beaucoup de choses à lui apprendre sur"
                   Alt [ 
                       Txt "son passé"
                       Txt "sa famille"
                       Txt "son père biologique"
                       Txt "sa mère"
                       Txt "son frère jumeau dont il ignorait l'existence" ]]
            Txt "richissime"
            Txt "prête à tout pour réussir"
            Txt "qui n'a peur de rien"
            Txt "portoricaine"
            Txt "scandinave"
            Txt "capable de se téléporter"
            Txt "en quête de spiritualité"
            Txt "qui n'a jamais éprouvé aucun sentiment"
            Txt "sans le sou"
            Txt "végétarienne"
            Cons [ Txt "sur le point de"; Alt [ Txt "se faire seppuku"; Txt "s'immoler par le feu" ]]
        ]
        Txt "."
        Alt [
            Txt "Ensemble ils feront face à tous les obstacles qui se dressent sur la route de l'Amour."
            Txt "Il découvre qu'elle court un grave danger."
            Txt "Ensemble, ils s'inscrivent à un jeu de téléréalité qui pourrait bien bouleverser leur vie."
            Txt "Au milieu des secrets se cache parfois l'amour."
            Txt "Mais il ignore qu'elle cache un lourd secret."
            Cons [ Txt "Et ce n'est pas" 
                   Alt [ Txt "l'arrivée des extra-terrestres "
                         Cons [
                            Alt [Txt "la pire canicule"; Txt "la plus terrible inondation"; Txt "le pire tremblement de terre" ]
                            Alt [ Txt "de tous les temps"; Txt "de l'histoire" ] ]
                   ]
                   Txt "qui va arranger les choses.." ]
            Txt "Comment s'aimer quand on est si différents ?"
            Txt "Une rencontre qui risque de bouleverser leur vie à jamais."
            Txt "Le hasard tresse parfois des liens indéfectibles."
            Txt "Leurs entourages respectifs feront tout pour les empêcher de se voir."
            Txt "Quel accueil leur entourage va-t-il réserver à cette idylle naissante ?"
            Txt "Une passion volcanique qui risque de les mener à leur perte."
            Cons [ Txt "Ils décident de faire un bout de chemin ensemble"
                   Alt [
                       Txt "au risque de s'égarer."
                       Txt "mais les embuches ne tardent pas à faire leur apparition..."]]
            Txt "Ou comment nos pires défauts peuvent devenir des qualités aux yeux de l'être aimé."
            Txt "Il découvre qu'elle travaille en fait pour les services secrets..."
            Txt "Cette rencontre est-elle vraiment le fruit du hasard ?"
            Txt "Ce qu'elle va lui apprendre le changera à jamais."
            Txt "Elle lui demande de la protéger. Dans quoi s'embarque-t-il ?"
        ]
    ]

let thriller =
    let adjM = 
            Alt [
            Txt "accro a l'energy drink"
            Txt "insomniaque"
            Txt "narcoleptique"
            Txt "parano"
            Txt "malchanceux"
            Txt "ruiné par la crise"
            Txt "veuf"
            Txt "transexuel"
            Txt "malheureux en amour"
        ]
    let adjF = 
            Alt [
            Txt "accro a l'energy drink"
            Txt "insomniaque"
            Txt "narcoleptique"
            Txt "malchanceuse"
            Txt "parano"
            Txt "ruinée par la crise"
            Txt "veuve"
            Txt "transexuelle"
            Txt "malheureuse en amour"
        ]

    let classicM = 
        Cons [
            Alt [
                Txt "Un policier"
                Txt "Un flic"
                Txt "Un détective privé"
                Txt "Un avocat"
            ]
            adjM
            Alt [
                Txt "enquête sur"
                Txt "doit démasquer"
                Txt "traque"
                Txt "poursuit"
                Txt "doit résoudre les énigmes d'"
                Txt "est contacté par"
                Txt "est la nouvelle cible d'"
            ]
        ]

    let classicF = 
        Cons [
            Alt [
                Txt "Une policière"
                Txt "Une flic"
                Txt "Une détective privé"
                Txt "Une avocate"
                Txt "Une journaliste"
            ]
            adjF
            Alt [
                Txt "enquête sur"
                Txt "doit démasquer"
                Txt "traque"
                Txt "poursuit"
                Txt "doit résoudre les énigmes d'"
                Txt "est contactée par"
                Txt "est la nouvelle cible d'"
            ]
        ]
    let internetM = 
        Cons [
            Alt [
                Txt "Un instagrammeur"
                Txt "Un youtubeur"
            ]
            adjM
            Alt [
                Txt "filme par hasard"
                Txt "filme par erreur"
                Txt "est contacté par"
                Txt "like par mégarde"
            ]
        ]
    let internetF = 
        Cons [
            Alt [
                Txt "Une instagrammeuse"
                Txt "Une youtubeuse"
                Txt "Une influenceuse"
            ]
            adjF
            Alt [
                Txt "filme par hasard"
                Txt "filme par erreur"
                Txt "est contactée par"
                Txt "like par mégarde"
            ]
        ]
    Cons [
        Alt [ classicM; internetM; classicF; internetF ]

        Alt [
            Txt "un maître chanteur"
            Txt "un parrain de la mafia"
            Txt "un déséquilibré"
            Txt "un pervers"
            Txt "un assassin"
            Txt "un serial killer"
            Txt "un kidnappeur"
            Txt "un criminel"
            Txt "un scientologue"
            Txt "un néonazi"
        ]
        Alt [
            Txt "zombie"
            Txt "myope"
            Txt "(de groupe sanguin AB négatif)"
            Txt "musclé"
            Txt "balafré"
            Txt "borgne"
            Txt "unijambiste"
            Txt "bipolaire"
            Txt "sans scrupules"
            Txt "moustachu"
            Txt " "
        ]
        Alt [
            Cons [
                    Txt "qui capture ses victimes" 
                    Cons [
                            Txt "en se déguisant en"
                            Alt [
                                Txt "vieille dame"
                                Txt "Claude François"
                                Txt "hot dog"
                                Txt "bonhomme cetelem"
                                Txt "distributeur automatique"
                                Txt "infirmière"
                                Txt "agent immobilier"
                                Txt "Pokemon"
                                Txt "Emmanuel Macron"
                                Txt "Laurent Delahousse"
                                Txt "Evelyne Dhéliat"
                                Txt "Philippe Etchebest"
                                Txt "Flunchy"
                                Txt "témoin de Jéhovah"
                                Cons [ Txt "Schtroumpf"
                                       Alt [
                                           Txt "à lunettes"
                                           Txt "faceur"
                                           Txt "costaud"
                                           Txt "gourmand"
                                       ] ]
                            ]
                        ]
                    Txt "."
                 ]
            Cons [
                    Txt "qui torture ses victimes"
                    Alt [
                        Txt "avec des vêtements en lycra."
                        Cons [ Txt "en leur chantant "; Alt [Txt "du Maître Gims."; Txt "une reprise de Starmania."; Txt "des tubes d'Eddy Mitchell."; Txt "du Booba."; Txt "du Céline Dion." ]]
                        Txt "avec des albums de Police."
                        Txt "en leur faisant manger de la raclette."
                        Txt "avec 5 fruits et légumes par jour."
                        Txt "en les empêchant de dormir."
                        Txt "en les obligeant à regarder des comptes instagram inspirants."
                        Txt "en les forçant à faire des dictées."
                        Txt "avec du jazz vocal."
                    ]
                ]
            Cons [
                        Txt "qui sélectionne ses victimes"
                        Alt [
                            Txt "sur Copains d'avant."
                            Txt "sur facebook."
                            Txt "sur instagram."
                            Txt "sur linkedin."
                            Txt "au moyen d'un drone furtif."
                            Txt "selon les numéros du Rapido."
                            Txt "selon les rues du Monopoly."
                            Txt "selon leurs allergies alimentaires."
                            Txt "au moyen de faux entretiens d'embauche."
                            Cons [ Txt "en organisant un faux casting"
                                   Alt [ Txt "d'émission de téléréalité"
                                         Txt "de the Voice"
                                         Cons [ Txt "de sosies de"; Alt [ Txt "Beyoncé"; Txt "Johnny Hallyday"; Txt "Aya Nakamura" ] ]
                                         Txt "de comédie musicale" ]
                                   Txt "."]

                        ]
                    ]
            Cons [
                        Txt "qui oblige ses victimes"
                        Alt [
                            Cons [ Txt "à suivre"
                                   Alt [ 
                                       Txt "Mariah Carey" 
                                       Txt "Nadine Morano"
                                   ] 
                                   Txt "sur twitter." ]
                            Txt "à faire le marathon de Paris."
                            Txt "à boire du coca après avoir mangé un mentos."
                            Txt "à lire l'intégrale de Marc Levy."
                            Txt "à regarder des vidéos d'ASMR jusqu'à ce que mort s'ensuive."
                        ]
                    ]
            Cons [
                        Txt "qui"
                        Alt [
                            Cons [
                                Txt "tue ses victimes"
                                Alt [ 
                                    Txt "selon les caractéristiques de leur signe astrologique chinois."
                                    Txt "en suivant la liste des sept... nains !"
                                    Txt "avec des positions de yoga maléfiques."
                                    Txt "avec des probiotiques."
                                    Txt "en les recouvrant de pétales de fleur."
                                ]
                            ]
                            Txt "lache ses proies dans la forêt pour une grande chasse à courre humaine."
                        ]
                    ]
            Cons [
                    Txt "qui "
                    Alt [
                        let site =
                            Alt [ Txt "leboncoin.fr"
                                  Txt "Vinted"
                                  Txt "eBay"]

                        Cons [ Txt "vend les scalps de ses victimes sur"
                               site
                               Txt "." ]
                        Cons [ Txt "vend ses victimes en pièces détachées sur"
                               site
                               Txt "..." ]

                        Txt "remplace le cerveau de ses victimes par des intelligences artificielles."
                        Txt "hybride ses victimes avec des animaux."
                    ]
            ]
        ]
        Alt [
            Txt "Comment l'arrêter ?"
            Txt "Comment le mettre hors d'état de nuire ?"
            Txt "Comment le piéger ?"
            Txt "Mais les apparences sont parfois trompeuses..."
            Txt "A qui profite vraiment le crime ?"
            Txt "(Les hiboux ne sont pas ce que l'on croit)"
            Txt "Mais personne ne croit à son histoire."
            Txt "Comment éviter le pire ?"
        ]
    ]

let pitch = 
    Alt [
        doubleVie
        catastrophe
        boyMeetsGirl
        thriller
    ]
