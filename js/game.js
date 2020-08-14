let config = {
    type: Phaser.AUTO,
    width: 720,
    height: 480,
    physics: {
        default: 'arcade'
    },
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    },
    audio: {         
        disableWebAudio: true     
    }
};

// Déclaration de nos variables globales
var game = new Phaser.Game(config);



//
function init() {

}

function preload() {
    this.load.image('intro', './assets/images/intro.png');
    this.load.image('background', './assets/images/background.png');
    this.load.image('pantaloni', './assets/images/pantaloniScurti.png');
    this.load.image('sapca2', './assets/images/sapca2.png');
    this.load.image('police', './assets/images/police.png');
    this.load.image('chiloti', './assets/images/chiloti.png');
    this.load.image('ceas', './assets/images/ceas.png');
    this.load.image('maieu', './assets/images/maieu2.png');
    this.load.image('maieu1', './assets/images/maieu.png');
    this.load.image('cercei', './assets/images/cercei.png');
    
}

function create() {
    
    
    let monkey = this.add.sprite(360, 240, 'background');
    monkey.scaleX=1;
    monkey.scaleY=1;
    let pantaloni = this.add.sprite(135, 125, 'pantaloni').setInteractive();
    pantaloni.setScale(0.4);
    pantaloni.on('pointerdown', function (pointer) {
        if(pantaloni.x==135){
            pantaloni.x=544;
            pantaloni.y=330;
            pantaloni.scale = 1;
            
            
        }
        else {
            pantaloni.x=135;
            pantaloni.y=125;
            pantaloni.scale = 0.4;
        }
    });
    
    let maieu = this.add.sprite(224, 125, 'maieu').setInteractive();
    maieu.setScale(0.4);
    maieu.on('pointerdown', function (pointer) {
        if(maieu.x==224){
            maieu.x=542;
            maieu.y=240;
            maieu.scale = 1;
            
        }
        else {
            maieu.x=224;
            maieu.y=125;
            maieu.scale = 0.4;
        }
    });
    
   
    
    let chiloti = this.add.sprite(132, 200, 'chiloti').setInteractive();
    chiloti.setScale(0.5);
    chiloti.on('pointerdown', function (pointer) {
        if(chiloti.x==132){
            chiloti.x=540;
            chiloti.y=328;
            chiloti.scale = 1;
            
        }
        else {
            chiloti.x=132;
            chiloti.y=200;
            chiloti.scale = 0.50;
        }
    });
    
    let sapca2 = this.add.sprite(220, 204, 'sapca2').setInteractive();
    sapca2.setScale(0.4);
    sapca2.on('pointerdown', function (pointer) {
        if(sapca2.x==220){
            sapca2.x=552;
            sapca2.y=60;
            sapca2.scale = 1;
            
        }
        else {
            sapca2.x=220;
            sapca2.y=204;
            sapca2.scale = 0.4;
        }
    });
    
    let police = this.add.sprite(132, 275, 'police').setInteractive();
    police.setScale(0.4);
    police.on('pointerdown', function (pointer) {
        if(police.x==132){
            police.x=555;
            police.y=60;
            police.scale = 1;
            
        }
        else {
            police.x=132;
            police.y=275;
            police.scale = 0.4;
        }
    });
    
    let ceas = this.add.sprite(220, 280, 'ceas').setInteractive();
    ceas.setScale(0.5);
    ceas.on('pointerdown', function (pointer) {
        if(ceas.x==220){
            ceas.x=430;
            ceas.y=195;
            ceas.scale = 1;
            
        }
        else {
            ceas.x=220;
            ceas.y=280;
            ceas.scale = 0.5;
        }
    });
    let maieu1 = this.add.sprite(224, 360, 'maieu1').setInteractive();
    maieu1.setScale(0.4);
    maieu1.on('pointerdown', function (pointer) {
        if(maieu1.x==224){
            maieu1.x=541;
            maieu1.y=253;
            maieu1.scale = 1;
            
        }
        else {
            maieu1.x=224;
            maieu1.y=360;
            maieu1.scale = 0.4;
        }
    });
    let cercei = this.add.sprite(129, 364, 'cercei').setInteractive();
    cercei.setScale(0.35);
    cercei.on('pointerdown', function (pointer) {
        if(cercei.x==129){
            cercei.x=548;
            cercei.y=155;
            cercei.scale = 1;
            
        }
        else {
            cercei.x=129;
            cercei.y=364;
            cercei.scale = 0.35;
        }
    });
    
    intro = this.add.sprite(360, 240, 'intro');
    intro.setInteractive();
    intro.on('pointerdown', function (pointer) {
        intro.visible=false;
        });
}

function update() {
    
}
