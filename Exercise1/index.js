const prompts = require('prompts');

class Room { 

    setEnemy(enemyName, hitPoint, damagePoint, attackHit, attackMethod){
       this.enemyName = enemyName;
       this.hitPoint = hitPoint;
       this.damagePoint = damagePoint;
       this.attackHit = attackHit
       this.attackMethod = attackMethod;
    }

   getEnemy(){
  console.log("You see a" + this.enemyName + "\n" + this.enemyName+ " attack player with its " + this.attackMethod + "\n" + this.enemyName +"hit player with " + this.hitPoint + "points !" + "\n" + "player is hit and have" + this.playerHitPoint - this.damagePoint + "remaining" )
   }


    player(playerName, playerHitPoint, playerDamagePoint, playerAttackPoint){
      this.playerName =  playerName;
      this.playerHitPoint =  playerHitPoint;
      this.playerDamagePoint =  playerDamagePoint;
      this.playerAttackPoint =  playerAttackPoint;
    }
     
  attack(){
    console.log("You bravely attack "+ this.enemyName + " " + "with your sharp sword" + "\n" + "player hit " + this.enemyName + " " + "with" +" " + this.hitPoint +" " + "points!" + "\n" + this.enemyName +" " +"is hit and is destroyed!")
  }


    doorways(){
      return "There are Doorways leading to : ";
    }
}


class dungeon extends Room {

  roomDetails(){
   console.log( "You are in the dungeon and it is a big and damp room with broken statues all around \n"
   + "\n" + this.doorways() +  "\n" + "Hallway");
  }
}


class Hallway extends Room{

  roomDetails(){
  console.log("You move to Hallway" + "\n" + "-----------------------------")
  console.log("You are in hallway and it is a long and dark hallway with dark pool of water on the floor and some fungus growing on the walls" + "\n")

  console.log( this.doorways()  + "\n" + "The dungeon"+"\n"+"Chamber")
  }

}

class GlowingPortal extends Room{

  roomDetails(){
  console.log("You move to Glowing Portal")
  console.log("Congratulations, you made through the dungeons!")
  }

}

class Chamber extends Room{
  roomDetails(){
  console.log("You move to Chamber" + "\n" + "-----------------------------")
  console.log("You are in chamber and it is small chamber, which is illuminated by a growing portal of some kind" + "\n" )

  console.log( this.doorways()  + "\n" + "Hallway"+"\n"+"Glowing Portal")
  }

}



let hallway = new Hallway();
hallway.setEnemy("small sewer rat", 2, 1, "50%", "sharps teeths");


let glowing = new GlowingPortal();

let chamber = new Chamber();

chamber.setEnemy("Giant Dragon", 4, 8, "90%", "sharp claw and fire breath");

let dg = new dungeon();




 

async function gameLoop() {

  let continueGame = true;

const initialActionChoices = [
  { title: 'Look Around', value: 'Look Around' },
  { title: 'Go to Room', value: 'Go to Room' },
  { title: 'Attack', value: 'Attack'},
  { title: 'Exit game', value: 'exit'}
];

    const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Choose your action',
        choices: initialActionChoices
      });


   

switch(response.value) {

  case 'Look Around':
    dg.roomDetails();
    gameLoop();
    break;

   case 'Go to Room':
    rooms();
    break;
  
   case 'Attack':
   attack();
    break;
  
    case 'exit':
    continueGame = false;
    break;
}
    }

      

        console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
        console.log('================================================')
        console.log('You walk down the stairs to the dungeons')

        gameLoop();
    

        async function rooms(){

            const initialActionChoices = [
                { title: 'Hallway', value: 'Hallway' },
                { title: 'Chamber', value: 'Chamber' },
                { title: 'Dungeon', value: 'Dungeon' },
                { title: 'Glowing Portal', value: 'Glowing Portal' },
              ];

              const response = await prompts({
                type: 'select',
                name: 'value',
                message: 'Which room are you want to go to?',
                choices: initialActionChoices
              });



              switch(response.value) {

                case 'Hallway':
                  hallway.roomDetails();
                  gameLoop();
                  break;
              
                 case 'Chamber':
                  chamber.roomDetails();
                    gameLoop();
                  break;

                  case 'Dungeon':
                    dg.roomDetails();
                    gameLoop();
                  break;

                  case 'Glowing Portal':
                    glowing.roomDetails();
                  break;
              }


        }
     


        async function attack(){
            const initialActionChoices = [
                { title: 'small sewer rat', value: 'small sewer rat' },
                { title: 'Giant Dragon', value: 'Giant Dragon' }
              ];

              const response = await prompts({
                type: 'select',
                name: 'value',
                message: 'Which enemy you want to attack',
                choices: initialActionChoices
              });



              switch(response.value) {

                case 'small sewer rat':
                  hallway.attack();
                  gameLoop();
                  break;
              
                 case 'Giant Dragon':
                  chamber.attack();
                    gameLoop();
                  break;
              }


        }
      
    