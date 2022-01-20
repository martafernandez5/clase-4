controller.right.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    controller.moveSprite(mySprite, 20, 100)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 1 1 1 1 1 3 3 1 1 1 1 1 3 3 
    3 3 1 1 1 1 1 3 3 1 1 1 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 b b b 3 3 3 3 3 3 3 3 3 
    3 3 3 3 b b b 3 3 3 3 3 3 3 3 3 
    3 3 3 3 b b b 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
forever(function () {
    info.setScore(controller.dy())
})
