import Phaser from 'phaser';

export default class Instructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  preload() {
    this.width = this.scale.width;
    this.height = this.scale.height;
  }

  create() {
    this.cameras.main.fadeIn(1000, 255, 255, 255);

    this.bg = this.add.sprite(0, 0, 'instructions_bg').setOrigin(0, 0);
    this.bg.setDisplaySize(this.width, this.height);

    const topIns = this.make.text({
      x: this.width / 2,
      y: 120,
      text: 'Our ninja turtle Michelangelo has been missioned by master Splinter to know what is happening in the NFT space',
      style: {
        fontSize: '45px',
        fill: '#fff',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 205 },
      },
    });
    topIns.setOrigin(0.5, 0.5);



    const nextLine1 = this.make.text({
      x: this.width / 2,
      y: 225,
      text: 'To do it, dodge all the obstacles you may encounter during your journey and run as fast as you can !',
      style: {
        fontSize: '45px',
        fill: '#fff',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 205, useAdvancedWrap: true },
      },
    });
    nextLine1.setOrigin(0.5, 0.5);
    const discordText = this.make.text({
      x: this.width / 2-170,
      y: 305,
      text: 'Make sure to share your best score here : ',
      style: {
        fontSize: '45px',
        fill: '#fff',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 205, useAdvancedWrap: true },
      },
    });
    discordText.setOrigin(0.5, 0.5);
const discord = this.make.text({
      x: this.width - 335,
      y: 305,
      text: 'TMNT',
      style: {
        fontSize: '45px',
        fill: '#ff0000',
        fontFamily: 'Monogram, monospace',
      },
    }).setInteractive({ useHandCursor: true });
    discord.setOrigin(0.5, 0.5);
  discord.on('pointerdown', () => {
    window.open('https://discord.gg/theturtlelair')
  })
    const title = this.make.text({
      x: this.width / 2,
      y: 365,
      text: 'Controls',
      style: {
        fontSize: '60px',
        fill: '#fff',
        fontFamily: 'Monogram, monospace',
      },
    });
    title.setOrigin(0.5, 0.5);

    const nextLine2 = this.make.text({
      x: this.width / 2 - 45,
      y: 420,
      text: "To jump over the obstacles use keys 'W' or 'SPACE', jump again to double jump",
      style: {
        fontSize: '45px',
        fill: '#fff',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 205, useAdvancedWrap: true },
      },
    });
    nextLine2.setOrigin(0.5, 0.5);

    const nextLine3 = this.make.text({
      x: this.width / 2 - 45,
      y: 505,
      text: "To drop a little faster you can use the Insta Drop key 'S' or the 'RIGHT CLICK' from the mouse button",
      style: {
        fontSize: '45px',
        fill: '#fff',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 300 },
      },
    });
    nextLine3.setOrigin(0.5, 0.5);

    // const nextLine4 = this.make.text({
    //   x: this.width / 2 - 10,
    //   y: 545,
    //   text: "",
    //   style: {
    //     fontSize: '45px',
    //     fill: '#fff',
    //     fontFamily: 'Monogram, monospace',
    //     align: 'justify',
    //     wordWrap: { width: this.width - 255, useAdvancedWrap: true },
    //   },
    // });
    // nextLine4.setOrigin(0.5, 0.5);

    const cont = this.make.text({
      x: this.width / 2 - 10,
      y: 640,
      text: "[ Press 'ENTER' to continue... ]",
      style: {
        fontSize: '45px',
        fill: '#505050',
        fontFamily: 'Monogram, monospace',
        align: 'justify',
        wordWrap: { width: this.width - 255, useAdvancedWrap: true },
      },
    });
    cont.setOrigin(0.5, 0.5);

    ['A', 'S', 'SPACE', 'ENTER'].forEach(key => {
      const keyP = this.input.keyboard.addKey(key);
      keyP.on('down', () => {
        this.cameras.main.fadeOut(2000, 255, 255, 255);
        this.scene.start('game-start');
      });
    });
  }
}