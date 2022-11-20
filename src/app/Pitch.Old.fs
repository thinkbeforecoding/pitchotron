module PitchOrigin

open Model

let decouvrez =
    Cons [
        Txt "Découvrez l'incroyable double vie de"
        Alt [
            Txt "John"
            Txt "Silvio"
            Txt "Jean Marcel"
            Txt "Paolo"
            Txt "Thomas"
            Txt "Max"
            Txt "Maurice"
            Txt "Boris"
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
            Cons [ Txt "vendeur de"; Alt [ Txt "téléphones"; Txt "canapés"; Txt "farces et attrape"; Txt "voyages"; Txt "voitures"; Txt "lingerie" ]]
            Txt "coiffeur"
            Txt "toiletteur pour chiens"
            Cons [ Txt "prof"; Alt [ Txt "d'anglais"; Txt "d'histoire"; Txt "de math"; Txt "de yoga"; Txt "de pilates"; Txt "de théâtre"; Txt "de chant" ]]
            Txt "politicien"
        ]
        Txt "le jour... et"
        Alt [
            Txt "serial killer"
            Cons [Txt "dealer"; Alt [ Txt "de crack"; Txt "de viagra"; Txt "de tamiflu"; Txt "de blagues carambar" ]]
            Cons [ Txt "super héros doté du pouvoir"
                   Alt [
                        Txt "d'arrêter le temps"
                        Txt "de télékinésie"
                        Txt "de téléportation"
                        Txt "de commander au feu"
                        Txt "de lire dans les pensées"
                        Txt "de brouiller les ondes des téléphones portables"
                        Txt "de retarder les montres"
                    ]]
            Txt  "cambrioleur"
            Txt "masseur de pieds"
            Txt "vampire"
            Txt "voleur d'organes à la tire"
            Txt "gérant de boîte échangiste"
            Txt "acteur porno"
            Txt "auteur des tweets de Nadine Morano"
            Txt "trader"
            Txt "hacker"
            Txt "danseuse de cabaret"
            Txt "braqueur de viellies dames"
            Txt "kidnappeur de chiens"
            Txt "chirurgien plastique amateur"
            Txt "voyant par téléphone"
            Txt "mafioso"
            Txt "yakusa"
            Txt "tranfiquant d'organes"
            Txt "tueur à gages"
            Txt "prêtre exorciste"
            Txt "gourou d'une secte"
            Txt "chasseur de primes"
            Txt "gigolo"
        ]
        Txt "la nuit."
    ]
let rencontre =
    Cons [
        Txt "L'irruption"
        Alt [
            Txt "de sa fille cachée"
            Txt "d'une prof de fitness noctambule"
            Txt "d'une petite fée jalouse et collante"
            Txt "d'une vagabonde sans le sou"
            Txt "d'une princesse deshéritée"
            Txt "d'une nouvelle employée un peu trop curieuse"
            Txt "d'un frère jumeau dont il ignorait l'existence"
            Txt "d'un amour de jeunesse oublié"
            Txt "d'une nouvelle voisine cachant un lourd secret"
            Txt "d'un extraterrestre anthropologue"
            Txt "d'un chien d'aveugle sans maître" ]
        Alt [
            Txt "dans sa vie peu ordinaire"
            Txt "dans son quotidien trop bien organisé"
            Txt "dans son emploi du temps déjà bien compliqué" 
        ]
        Alt [
            Txt "va lui faire commettre une erreur fatale"
            Txt "le conduira sur le chemin de la vengeance"
            Txt "va mettre en péril sa couverture"
            Txt "risque de lui faire commettre un crime irréparable"
            Txt "sera le grain de sable qui fera tout dérailler"
            Txt "l'emmenera sur les chemins de l'amour qu'il n'avait jamais empruntés"
        ]
        Txt "."
    ]
let accident =
    Cons [
        Txt "Suite à"
        Alt [
            Cons [ Txt "un accident"; Alt [ Txt "de trottinette"; Txt "de char à voile"; Txt "de coiffure"; Txt "de vélo"; Txt "vasculaire cérébral" ]]
            Txt "une maladie dégénérative"
            Txt "un rêve prémonitoire traumatisant"
            Txt "la prédiction fatale d'une cartomancienne"
            Txt "une faillite soudaine"
            Txt "une lamentable méprise"
            Cons [ Txt "une overdose de"; Alt [ Txt "médicaments"; Txt "laxatifs"; Txt "calmants"; Txt "décontractants musculaires"]]
        ]
        Alt [
            Txt "il se met à tout confondre"
            Txt "il se met à tout mélanger"
            Txt "il doit tout avouer à sa famille"
            Txt "il commet des erreurs irréparables"
            Txt "il remet tout en cause"
            Txt "il décide de tout arrêter. Mais le passé ne se laisse pas si facilement oublier."
            Txt "il décide de repartir à zéro. Mais des ennemis invisibles le surveillent..."
        ]
        Txt "."
    ]
let doubleVie = 
    Cons [
        decouvrez
        Alt [
            rencontre
            accident
        ]
    ]
let catastrophe =
    Cons[ 
        Alt [ Txt "Un groupe d'étudiants insouciants"; Txt "Un couple de jeunes mariés" ]
        Txt "part faire"
        Alt [
            Txt "une balade"
            Txt "une excursion"
            Txt "un pique nique"
            Txt "un parcours d'orientation"
            Txt "de l'escalade"
        ]
        Alt [
            Txt "en forêt"
            Txt "en montagne"
            Txt "dans une friche industrielle"
            Txt "dans un village désert"
        ]
        Txt ". Ils ignorent que leurs pas les mènent tout droit vers"
        Alt [
            Txt "le repaire d'une bête aussi mystérieuse que sanguinaire"
            Cons [ Txt "le repaire d'un déséquilibré" 
                   Alt [
                    Txt "passionné par la putréfaction"
                    Txt "collectionneur de scalps"
                    Txt "amateur de chirurgie plastique"
                    Txt "ancien chirurgien spécialiste des greffes en tout genre"
                    Txt "passionné de prothèses robotiques" ]]
            Txt "le repaire d'insectes géants et assoiffés de sang"
            Txt "une base extraterrestre"
            Cons [ Txt "une secte qui voue un culte"; Alt [ Txt "aux serpents"; Txt "aux extraterrestres"; Txt "à Nadine Morano" ]]
            Cons [ Txt "le repaire de terroristes qui ont mis au point un nouveau type de"; Alt [ Txt "bombe"; Txt "virus" ]]
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
            Txt "Un blogueur"
            Txt "Un ostréiculteur"
            Txt "Un clone"
            Txt "Un justicier masqué"
            Txt "Un pompier volontaire"
            Txt "Un mariachi"
            Txt "Un marchan de glaces ambulant"
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
            Txt "pauvre"
            Txt "doté de superpouvoirs"
            Txt "amnésique"
            Txt "venu d'un pays lointain"
            Txt "américain"; Txt "japonais"; Txt "russe"
            Txt "philosophe"
            Txt "qui vient de gagner au loto"
            Txt "excentrique"
            Txt "timide"
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
            Txt "tchatte avec"
            Cons [ Txt "sauve"
                   Alt [
                       Txt "d'une tornade"
                       Txt "d'un grave accident"]]
            Txt "se retrouve dans un train avec"
            Txt "est coincé dans un ascenseur avec"
            Txt "tombe sur le site d'"
            Txt "trouve le portable d'"
            Txt "échange par erreur sa valise avec"
            Txt "fait tomber ses courses devant"
        ]
        Alt [
            Txt "une bibliothécaire"
            Txt "une catcheuse"
            Txt "une stripteaseuse"
            Txt "une vielle dame"
            Txt "une journaliste"
            Txt "une extraterrestre"
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
            Txt "hérotomane"
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
            Txt "riche"
            Txt "prête à tout pour réussir"
            Txt "qui n'a peur de rien"
            Txt "portoricaine"
            Txt "scandinave"
            Txt "capable de se téléporter"
            Txt "en quête de spiritualité"
            Txt "qui n'a jamais éprouvé aucun sentiment"
            Txt "sans le sous"
        ]
        Txt "."
        Alt [
            Txt "Ensemble ils feront face à tous les obstacles qui se dressent sur la route de l'Amour."
            Txt "Il découvre qu'elle court un grave danger."
            Txt "Ensemble, ils s'inscrivent à un jeu de téléréalité qui pourrait bien bouleverser leur vie."
            Txt "Au milieu des secrets se cache parfois l'amour."
            Txt "Mais il ignore qu'elle cache un lourd secret."
            Txt "Et ce n'est pas l'arrivée des extra-terrestres qui va arranger les choses..."
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
    Cons [
        Alt [
            Txt "Un policier"
            Txt "Un flic"
            Txt "Un détective privé"
            Txt "Un avocat"
            Txt "Un bloggeur"
        ]
        Alt [
            Txt "accro a l'energy drink"
            Txt "insomniaque"
            Txt "narcoleptique"
            Txt "malchanceux"
            Txt "ruiné par la crise"
            Txt "veuf"
            Txt "transexuel"
            Txt "malheureux en amour"
        ]
        Alt [
            Txt "enquête sur"
            Txt "doit démasquer"
            Txt "se lance sur la piste d'"
            Txt "doit résoudre les énigmes d'"
            Txt "est contacté par"
            Txt "est la nouvelle cible d'"
        ]
        Alt [
            Txt "un politicien"
            Txt "un boucher"
            Txt "un parrain de la mafia"
            Txt "un déséquilibré"
            Txt "un pervers polymorphe"
            Txt "un assassin"
            Txt "un serial killer"
            Txt "un kidnapeur"
            Txt "un criminel"
            Txt "un zoophile"
            Txt "un néonazi"
        ]
        Alt [
            Txt "zombie"
            Txt "amnésique"
            Txt "psychopathe"
            Txt "daltonien"
            Txt "myope"
            Txt "de groupe sanguin AB négatif"
            Txt "chauve"
            Txt "borgne"
            Txt "unijambiste"
            Txt "de petite taille"
            Txt " "
        ]
        Alt [
            Cons [
                    Txt "qui capture ses victimes" 
                    Alt [
                        Cons [
                                Txt "en se déguisant en"
                                Alt [
                                    Txt "vieille dame"
                                    Txt "Claude François"
                                    Txt "hot dog"
                                    Txt "bonhomme cetelem"
                                    Txt "distributeur automatique"
                                    Txt "infirmière"
                                    Txt "agent immobilié"
                                    Txt "Pocahontas"
                                ]
                            ]
                    ]
                    Txt "."
                 ]
            Cons [
                    Txt "qui torture ses victimes"
                    Alt [
                        Txt "avec des vêtements en lycra."
                        Txt "en leur chantant des chansons de Carla Bruni."
                        Txt "avec des albums de Police."
                        Txt "en leur faisant manger de la raclette."
                        Txt "avec 5 fruits et légumes par jour."
                        Txt "en les empêchant de dormir."
                    ]
                ]
            Cons [
                        Txt "qui choisit ses victimes"
                        Alt [
                            Txt "dans l'annuaire."
                            Txt "sur facebook."
                            Txt "en regardant Tellement Vrai."
                            Txt "selon les numéros du Rapido."
                            Txt "selon les rues du Monopoly."
                            Txt "dans des faux entretiens d'embauche."
                            Txt "en organisant un casting."
                        ]
                    ]
            Cons [
                        Txt "qui oblige ses victimes"
                        Alt [
                            Txt "à suivre Nadine Morano sur tweeter."
                            Txt "à faire le marathon de Paris."
                            Txt "à boire du coca après avoir mangé un mentos."
                            Txt "à jouer à kinectimal."
                            Txt "à lire l'intégrale de Marc Levy."
                        ]
                    ]
            Cons [
                        Txt "qui"
                        Alt [
                            Txt "tue ses victimes selon les caractéristiques de leur signe astrologique."
                            Txt "tue ses victimes en suivant la liste des sept... nains !"
                            Txt "lâche ses proies dans la forêt pour une grande chasse à courre humaine."
                        ]
                    ]
            Cons [
                        Txt "qui "
                        Alt [
                            Txt "vend les scalps de ses victimes sur eBay."
                            Txt "vend ses victimes en pièces détachées sur leboncoin.fr..."
                        ]
                    ]
        ]
    ]

let pitch = 
    Alt [
        doubleVie
        catastrophe
        boyMeetsGirl
        thriller
    ]
