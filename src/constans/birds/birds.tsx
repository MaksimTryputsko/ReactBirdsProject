import * as birdsVoices from './voicesBirds';
import { type IBird } from '@constans/interface/birds.interface';

export const warmUp: IBird[] = [
  {
    id: 1,
    name: 'Ворон',
    isRightAnswer: true,
    description:
      'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
    view: 'Corvus corax',
    img: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
    song: birdsVoices.crowVoice,
  },
  {
    id: 2,
    name: 'Журавель',
    isRightAnswer: false,
    description:
      'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
    view: 'Grus grus',
    img: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
    song: birdsVoices.juravelVoice,
  },
  {
    id: 3,
    name: 'Ласточка',
    isRightAnswer: false,
    description:
      'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
    view: 'Delichon urbicum',
    img: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
    song: birdsVoices.lastochkaVoice,
  },
  {
    id: 4,
    name: 'Козодой',
    isRightAnswer: false,
    description:
      'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются.',
    view: 'Caprimulgus europaeus',
    img: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
    song: birdsVoices.kozodoiVoice,
  },

  {
    id: 5,
    name: 'Кукушка',
    isRightAnswer: false,
    description:
      'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
    view: 'Cuculus canorus',
    img: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
    song: birdsVoices.kykyshkaVoice,
  },
  {
    id: 6,
    name: 'Синица',
    isRightAnswer: false,
    description:
      'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
    view: 'Parus major',
    img: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
    song: birdsVoices.sinitsaVoice,
  },
];

export const sparrowBirds: IBird[] = [
  {
    id: 1,
    name: 'Воробей',
    isRightAnswer: true,
    description:
      'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
    view: 'Passer domesticus',
    img: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
    song: birdsVoices.sparrowVoice,
  },
  {
    id: 2,
    name: 'Грач',
    isRightAnswer: false,
    description:
      'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
    view: 'Corvus frugilegus',
    img: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
    song: birdsVoices.grachVoice,
  },
  {
    id: 3,
    name: 'Галка',
    isRightAnswer: false,
    description:
      'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
    view: 'Coloeus monedula',
    img: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
    song: birdsVoices.galkaVoice,
  },
  {
    id: 4,
    name: 'Певчий дрозд',
    isRightAnswer: false,
    description:
      'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
    view: 'Turdus philomelos',
    img: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
    song: birdsVoices.drozdVoice,
  },
  {
    id: 5,
    name: 'Сорока',
    isRightAnswer: false,
    description:
      'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
    view: 'Pica pica',
    img: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
    song: birdsVoices.sorokaVoice,
  },
  {
    id: 6,
    name: 'Сойка',
    isRightAnswer: false,
    description:
      'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
    view: 'Garrulus glandarius',
    img: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
    song: birdsVoices.soykaVoice,
  },
];
export const forestsBirds: IBird[] = [
  {
    id: 1,
    name: 'Зяблик',
    isRightAnswer: false,
    description:
      'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
    view: 'Fringilla coelebs',
    img: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
    song: birdsVoices.zyablickVoice,
  },
  {
    id: 2,
    name: 'Клёст',
    isRightAnswer: false,
    description:
      'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
    view: 'Loxia curvirostra',
    img: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
    song: birdsVoices.klestVoice,
  },
  {
    id: 3,
    name: 'Горлица',
    isRightAnswer: true,
    description:
      'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
    view: 'Streptopelia turtur',
    img: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
    song: birdsVoices.doveVoice,
  },
  {
    id: 4,
    name: 'Дятел',
    isRightAnswer: false,
    description:
      'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
    view: 'Dendrocopos major',
    img: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
    song: birdsVoices.dytelVoice,
  },
  {
    id: 5,
    name: 'Удод',
    isRightAnswer: false,
    description:
      'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
    view: 'Upupa epops',
    img: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
    song: birdsVoices.ydodVoice,
  },
  {
    id: 6,
    name: 'Стриж',
    isRightAnswer: false,
    description:
      'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
    view: 'Apus apus',
    img: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
    song: birdsVoices.strijVoice,
  },
];

export const singersBirds: IBird[] = [
  {
    id: 1,
    name: 'Жаворонок',
    isRightAnswer: false,
    description:
      'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
    view: 'Alauda arvensis',
    img: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
    song: birdsVoices.javaronokVoice,
  },
  {
    id: 2,
    name: 'Соловей',
    isRightAnswer: false,
    description:
      'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
    view: 'Luscinia luscinia',
    img: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
    song: birdsVoices.soloveiVoice,
  },
  {
    id: 3,
    name: 'Скворец',
    isRightAnswer: false,
    description:
      'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
    view: 'Sturnus vulgaris',
    img: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
    song: birdsVoices.skvoresVoice,
  },
  {
    id: 4,
    name: 'Иволга',
    isRightAnswer: false,
    description:
      'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
    view: 'Oriolus oriolus',
    img: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
    song: birdsVoices.ivolgaVoice,
  },
  {
    id: 5,
    name: 'Свирестель',
    isRightAnswer: false,
    description:
      'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
    view: 'Bombycilla garrulus',
    img: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
    song: birdsVoices.svirestelVoice,
  },
  {
    id: 6,
    name: 'Щегол',
    isRightAnswer: true,
    description:
      'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
    view: 'Carduelis carduelis',
    img: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
    song: birdsVoices.chegolVoice,
  },
];

export const predatoryBirds: IBird[] = [
  {
    id: 1,
    name: 'Орёл',
    isRightAnswer: false,
    description:
      'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
    view: 'Aquila nipalensis',
    img: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
    song: birdsVoices.orelVoice,
  },
  {
    id: 2,
    name: 'Коршун',
    isRightAnswer: false,
    description:
      'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
    view: 'Circus cyaneus',
    img: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
    song: birdsVoices.korshynVoice,
  },
  {
    id: 3,
    name: 'Лунь',
    isRightAnswer: true,
    description:
      'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
    view: 'Apus apus',
    img: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
    song: birdsVoices.lunVoice,
  },
  {
    id: 4,
    name: 'Сокол',
    isRightAnswer: false,
    description:
      'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
    view: 'Falco peregrinus',
    img: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
    song: birdsVoices.sokolVoice,
  },
  {
    id: 5,
    name: 'Ястреб',
    isRightAnswer: false,
    description:
      'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
    view: 'Accipiter gentilis',
    img: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
    song: birdsVoices.yastrebVoice,
  },
  {
    id: 6,
    name: 'Филин',
    isRightAnswer: false,
    description:
      'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
    view: 'Bubo bubo',
    img: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
    song: birdsVoices.filinVoice,
  },
];

export const marineBirds: IBird[] = [
  {
    id: 1,
    name: 'Альботрос',
    isRightAnswer: true,
    description:
      'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
    view: 'Diomedea exulans',
    img: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
    song: birdsVoices.albatrosVoice,
  },
  {
    id: 2,
    name: 'Олуша',
    isRightAnswer: false,
    description:
      'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
    view: 'Sula nebouxii',
    img: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
    song: birdsVoices.olyshaVoice,
  },
  {
    id: 3,
    name: 'Буревестник',
    isRightAnswer: false,
    description:
      'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
    view: 'Puffinus griseus',
    img: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
    song: birdsVoices.burevestnikVoice,
  },
  {
    id: 4,
    name: 'Пеликан',
    isRightAnswer: false,
    description:
      'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
    view: 'Pelecanus',
    img: 'https://givotniymir.ru/wp-content/uploads/2016/12/rozovyj-pelikan-obraz-zhizni-i-sreda-obitaniya-rozovogo-pelikana-9.jpg',
    song: birdsVoices.pelikanVoice,
  },
  {
    id: 5,
    name: 'Пингвин',
    isRightAnswer: false,
    description:
      'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
    view: 'Aptenodytes forsteri',
    img: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
    song: birdsVoices.pingvinVoice,
  },
  {
    id: 6,
    name: 'Чайка',
    isRightAnswer: false,
    description:
      'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
    view: 'Larus argentatus',
    img: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
    song: birdsVoices.chaikaVoice,
  },
];
