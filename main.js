const imagesNames = [
    "20180602_191440.jpg"
,"20180818_201647.jpg"
,"20180819_111754.jpg"
,"20180819_160312.jpg"
,"20180819_170402.jpg"
,"20180825_135716.jpg"
,"20181217_200540.jpg"
,"20181224_224920.jpg"
,"20190421_230559.jpg"
,"20190506_211213.jpg"
,"20190517_205728.jpg"
,"20190517_222017.jpg"
,"20190518_135636.jpg"
,"20190518_150347.jpg"
,"20190518_171442.jpg"
,"20190518_180845(0).jpg"
,"20190711_194655.jpg"
,"20190716_225856.jpg"
,"20190718_223701.jpg"
,"20190720_151544.jpg"
,"20190727_001838.jpg"
,"20190809_235426.jpg"
,"20190811_215346.jpg"
,"20190824_215926.jpg"
,"20190831_173159.jpg"
,"20191225_003703.jpg"
,"20191226_122312.jpg"
,"20200409_222348.jpg"
,"20200501_002448.jpg"
,"20200511_172911.jpg"
,"20200714_152603.jpg"
,"20200805_231045.jpg"
,"Apitchoumer.png"
,"Batman.png"
,"Cat's fault.png"
,"Chuck Norris.png"
,"Credit.png"
,"Dog.png"
,"Ecole.png"
,"Ed Sheeran.png"
,"Explain.png"
,"Fart.png"
,"L'Oreal.png"
,"Moquette.png"
,"non personne .png"
,"Paris Golo.png"
,"Shakira.png"
,"Squirrel.png"
,"Star wars arm.png"
,"Ton pere.png"
,"Wi fi.png"
];

//show image
let image = document.getElementById("immageHolderId");

let randomPick = Math.round(Math.random() * (imagesNames.length - 1));

image.src = imagesNames[randomPick];