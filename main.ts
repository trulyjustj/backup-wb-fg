namespace SpriteKind {
    export const girl = SpriteKind.create()
    export const boy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.girl, sprites.dungeon.floorDark2, function (sprite, location) {
    plate(true, sprite)
    boyready = 0
})
scene.onOverlapTile(SpriteKind.girl, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(30, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(31, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(32, 30), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(30, 30), false)
    tiles.setWallAt(tiles.getTileLocation(31, 30), false)
    tiles.setWallAt(tiles.getTileLocation(32, 30), false)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -150
    }
    pause(1000)
})
scene.onOverlapTile(SpriteKind.girl, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(30, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(31, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(32, 30), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(30, 30), false)
    tiles.setWallAt(tiles.getTileLocation(31, 30), false)
    tiles.setWallAt(tiles.getTileLocation(32, 30), false)
})
function plate (bool: boolean, sprite: Sprite) {
    if (boyready == girlready) {
        tiles.setTileAt(tiles.getTileLocation(3, 34), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(3, 35), assets.tile`transparency16`)
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -150
    }
    pause(1000)
})
scene.onHitWall(SpriteKind.girl, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vy = 0
    }
})
scene.onOverlapTile(SpriteKind.boy, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(30, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(31, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(32, 30), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(30, 30), false)
    tiles.setWallAt(tiles.getTileLocation(31, 30), false)
    tiles.setWallAt(tiles.getTileLocation(32, 30), false)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
	
})
scene.onHitWall(SpriteKind.boy, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vy = 0
    }
})
scene.onOverlapTile(SpriteKind.boy, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(30, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(31, 30), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(32, 30), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(30, 30), false)
    tiles.setWallAt(tiles.getTileLocation(31, 30), false)
    tiles.setWallAt(tiles.getTileLocation(32, 30), false)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
	
})
let girlready = 0
let boyready = 0
let jump = 0
jump = 0
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`ExampleLVL`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Fire Girl`, SpriteKind.girl))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`WaterBoy`, SpriteKind.boy))
controller.player1.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 150, 0)
controller.player2.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 150, 0)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 300
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 300
boyready = 0
girlready = 1
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 676
    export const ARCADE_SCREEN_HEIGHT = 676
}
forever(function () {
	
})
