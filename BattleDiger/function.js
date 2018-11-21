function setBackGroundImage(core,stage,args){
  const backImage = new Sprite(256, 48);
  backImage.image = core.assets[args];
  //backImage.scale(0.5,0.5)
  backImage.x = 0;
  backImage.y = 144;
  stage.addChild(backImage);
}

function setChoiceScene(stage,object){
  //選択肢１
  for (let k in object) {
    const text = new Label(object[k]);
    text.font  = "8px monospace";
    text.color = "rgb(255, 255, 255)";
    text.y = 152 + 10 * k;
    text.x = 10;
    text.width = 246;
    text.height = 8;
    stage.addChild(text);
  }

    //シーン名が渡されます
    /*text.addEventListener('touchstart',function(e){
          executeNext(eval(args[1]));
    });*/

    //選択肢２
  /*
  let text2 = new Label(object[2]);
  text2.font  = "16px monospace";
  text2.color = "rgb(0, 0, 0)";
  text2.y = 172;
  text2.x = 10;
  text2.width = 246;
  text2.height = 16;
  textLayer.addChild(text2);
  */
    //シーン名が渡されます
    /*text2.addEventListener('touchstart',function(e){
        executeNext(eval(args[3]));
    });*/
}
