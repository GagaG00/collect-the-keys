namespace SpriteKind {
    export const Heals = SpriteKind.create()
    export const boss = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . 9 . 9 . 9 . 9 . . . 
        . . 9 . . . . . . . 9 . . 
        . . . . 9 9 . 9 9 . . . . 
        . 9 . 9 9 9 9 9 9 9 . 9 . 
        . 9 . 9 9 9 9 9 9 9 . 9 . 
        . . . . 9 9 9 9 9 . . . . 
        . . 9 . . 9 9 9 . . 9 . . 
        . . . 9 . . 9 . . 9 . . . 
        . . . . . . . . . . . . . 
        . . . . . 9 . 9 . . . . . 
        . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . 9 9 . 9 9 . . . . 
        . . . 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 . . . . . 
        . . . . . . 9 . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        `],
    200,
    true
    )
})
info.onScore(30, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Heals)
    demon_spawn = false
    bones_spawn = false
    music.stopAllSounds()
    pause(2000)
    game.splash("Boss battle!!")
    pause(200)
    hero.setPosition(80, 94)
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Heals)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    sands = sprites.create(img`
        ..................111111111188...............
        .................111111111188................
        .................111111111881................
        .................111ff1118811................
        .................111ff1118811................
        ..................11111f1111.................
        ...................111fff111.................
        ...................111111111.................
        ...................1ff11ff1..................
        ...................11ffff11..................
        ....................111111...................
        .....................1111....................
        ....................6666666..................
        ................6666ff1111f6.................
        ...............66666f11111f6.................
        ..............666666ff1111f66................
        ..............6666666f1111ff66...............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............666666ff111ff6666..............
        ...............66666f1111ff66666.............
        ...............66666f111fff6666..............
        ...............66666f111f6f6666..............
        ...............666fff11ff6ff666..............
        ...............66ff6f11f666ff66..............
        ................6666f1ff666666...............
        ................66666ff666666611.............
        ................1ffffffffffffff11............
        ...............11fffffffffffffff11...........
        ...............1fffffffffffffffff1...........
        ...............1fff1f1ffffff1f1ff11..........
        ...............1fff1f1ffffff1f11ff1..........
        ...............1fff1f11f11ff11f1ff1..........
        ...............1fff1ff1f11fff1ff1f1..........
        ...............1ffff1f1f11fff11fff11.........
        ...............1ffffffff111ffffff111.........
        ...............11fffffff1.11ffff11...........
        ................1ff111111..111111............
        ................11111.........111............
        ..................111.........111............
        ..................111.........111............
        ................11111.........11111..........
        `, SpriteKind.boss)
    sands.setPosition(78, 32)
    info.setLife(10)
    game.splash("SANDS attacks you!", "Avoid his attacks to make him tired!")
    bone_flag = true
    music.play(music.stringPlayable("A F E F D G E F ", 140), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(hex`0078000408090305001c000f0a006400f4010a00000400000000000000000000000000000000020a0200000200011902000400011904000600012908000a0001240e001000012212001400012216001800011e1a001c00011b1c001e00011e1e002000012220002200011922002400011924002600012928002a0001242e003000012232003400012236003800011e3a003c00011b3c003e00011e3e004000012240004200011942004400011944004600012948004a0001244e005000012252005400012256005800011e5a005c00011b5c005e00011e5e006000012260006200011962006400011964006600012968006a0001246e007000012272007400012276007800011e7a007c00011b7c007e00011e7e008000012280008200011982008400011984008600012988008a0001248e009000012292009400012296009800011e9a009c00011b9c009e00011e9e00a0000122a000a2000119a200a4000119a400a6000129a800aa000124ae00b0000122b200b4000122b600b800011eba00bc00011bbc00be00011ebe00c0000122c000c2000119c200c4000119c400c6000129c800ca000124ce00d0000122d200d4000122d600d800011eda00dc00011bdc00de00011ede00e0000122e000e2000119e200e4000119e400e6000129e800ea000124ee00f0000122f200f4000122f600f800011efa00fc00011bfc00fe00011efe000001012200010401012704010801012508010c0101240c011001012210011801012218011c0101251c012001012708001c000e050046006603320000040a002d00000064001400013200020100029e0100000100010a20002200010c40004200010c60006200010c80008100010a82008300010a84008500010a86008700010a88008900010a8a008b00010a8c008d00010a8e008f00010a90009100010a92009300010a94009500010a96009700010a98009900010a9a009b00010a9c009d00010a9e009f00010aa000a100010aa100a2000106a300a4000106a500a6000106a700a8000106a900aa000106ab00ac000106ad00ae000106af00b0000106b100b2000106b300b4000106b500b6000106b700b8000106b900ba000106bb00bc000106bd00be000106bf00c0000106c100c2000105c300c4000105c500c6000105c700c8000105c900ca000105cb00cc000105cd00ce000105cf00d0000105d100d2000105d300d4000105d500d6000105d700d8000105d900da000105db00dc000105dd00de000105df00e0000105e100e2000108e300e4000108e500e6000108e700e8000108e900ea000108eb00ec000108ed00ee000108ef00f0000108f100f200010cf300f400010cf500f600010cf700f800010cf900fa00010cfb00fc00010cfd00fe00010cff000001010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003000880089000108980099000108a800a9000106b800b9000106c800c9000104d800d9000104e800e9000103f800f9000107`), music.PlaybackMode.UntilDone)
    bone_flag = false
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.ashes, 500)
    sands = sprites.create(img`
        ..................9dd111111188...............
        .................191111111188d...............
        .................999111111881d...............
        ................99991f1118111................
        .................991ff111881d................
        .................dd111111111d................
        ..................d1111f1111d................
        ..................dd11fff11d.................
        ...................d1111111d.................
        ...................d1ffff11..................
        ....................111111...................
        .....................1111....................
        ....................6666666..................
        ................6666ff1111f6.................
        ...............66666f11111f6.................
        ..............666666ff1111f66................
        ..............6666666f1111ff66...............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............6666666f111ff6666..............
        ..............666666ff111ff6666..............
        ...............66666f1111ff66666.............
        ...............66666f111fff6666..............
        ...............66666f111f6f6666..............
        ...............666fff11ff6ff666..............
        ...............66ff6f11f666ff66..............
        ................6666f1ff666666...............
        ................66666ff666666611.............
        ................1ffffffffffffff11............
        ...............11fffffffffffffff11...........
        ...............1fffffffffffffffff1...........
        ...............1fff1f1ffffff1f1ff11..........
        ...............1fff1f1ffffff1f11ff1..........
        ...............1fff1f11f11ff11f1ff1..........
        ...............1fff1ff1f11fff1ff1f1..........
        ...............1ffff1f1f11fff11fff11.........
        ...............1ffffffff111ffffff111.........
        ...............11fffffff1.11ffff11...........
        ................1ff111111..111111............
        ................11111.........111............
        ..................111.........111............
        ..................111.........111............
        ................11111.........11111..........
        `, SpriteKind.boss)
    sands.setPosition(78, 32)
    pause(2000)
    game.splash("SANDS: That was all I had.. how are you so good?")
    pause(1000)
    sprites.destroy(sands, effects.disintegrate, 1000)
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666666666666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666666666666666666666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666666666666666666666666666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666666666666666666666666666666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666666666666666666666666666666666666666666666666666666666
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666666666666666666666666666666666666666666666666666666666669999
        8866666668888888888888888888888888888888888888888888888888888888888888888888888888666666666666666666666666666666666666666666666666666666666666666699999999999999
        6666666666666668888888888888888888888888888888888888888888866666666668888886666666666666666666666666666666666666666666666666666666666666666669999999999999999999
        6666666666666666666666668888888888888888888888888888888666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999
        6666666666666666666666666666688888888888888888888888866666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999999
        6666666666666666666666666666666666666888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999
        6666666666666666666666666666666666666666688888888666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999999999999999999999999999999
        9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999999999999999999999999999999999
        9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999999999999999999999
        9999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999
        9999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999966666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999966666666666666666666666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999966666666666666666666666666666666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddd
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbb
        99999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb
        dd99999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb
        dddddd999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbb
        ddddddddddd999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbb
        dddddddddddddddd99999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbb
        ddddddddddddddddddd99999999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb77
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb777777
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb777777777
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbb77777777777
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbb777777777777
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb7777777777777
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbb777777777777777
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777
        bbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777
        bbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777
        bbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777
        bbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777
        bbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777
        bbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777
        77bbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777
        7777bbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777777777
        77777bbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777777777777
        777777bbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777777
        777777777bbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777
        77777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbddddddddddddddddddddddbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    pause(3000)
    game.splash("You Escaped!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    music.beamUp.play()
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heals, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    music.beamUp.play()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    music.smallCrash.play()
    info.changeLifeBy(-1)
})
let clover: Sprite = null
let bone: Sprite = null
let _1st_music_loop: Sprite = null
let bee: Sprite = null
let demon: Sprite = null
let sands: Sprite = null
let bone_flag = false
let demon_spawn = false
let bones_spawn = false
let hero: Sprite = null
scene.setBackgroundImage(assets.image`background`)
hero = sprites.create(assets.image`hero`, SpriteKind.Player)
hero.setStayInScreen(true)
controller.moveSprite(hero)
music.play(music.stringPlayable("E B C5 A B G A F ", 140), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`008c000408040208001c000e050046006603320000040a002d0000006400140001320002010002860000000400012408000c0001290c001000012414001600012018001c00012720002400012428002c0001292c003000012434003600012038003c00012740004400012448004c0001294c005000012454005600012058005c00012760006400012468006c0001296c007000012472007400012474007800012078007a00021d2a7c008000021d2709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800aa0000000100020408080009000106100011000204081400150001061800190001061c001d0002040820002100020408280029000106300031000204083400350001063800390001063c003d0002040840004100020408480049000106500051000204085400550001065800590001065c005d0002040860006100020408680069000106700071000204087600770001067800790001067a007b000204067c007d000204067e007f00020406`), music.PlaybackMode.LoopingInBackground)
let heart4 = false
let minX = 54
let maxX = 103
let maxY = 111
let minY = 76
bones_spawn = false
demon_spawn = false
let heart7 = true
bone_flag = false
game.splash("Are you ready?")
game.onUpdate(function () {
    if (info.score() >= 31) {
        if (hero.x < minX) {
            hero.x = minX
        }
        if (hero.x > maxX) {
            hero.x = maxX
        }
        if (hero.y < minY) {
            hero.y = minY
        }
        if (hero.y > maxY) {
            hero.y = maxY
        }
    }
})
game.onUpdateInterval(5000, function () {
    if (info.score() < 30) {
        demon = sprites.createProjectileFromSide(img`
            .f............f.
            f2ff.........f2f
            f22ffffffffff22f
            .f222222222222f.
            ..ff2f2222f2ff..
            ...f22f22f22f...
            ...f22f22f22f...
            ...f22222222f...
            ...f22f22f22f...
            ....f22ff22ff...
            .....f2222f.....
            .....f2222f.....
            ....f222222f....
            ....f222222f....
            ...f22222222f...
            ...f22222222f...
            ...f22222222f...
            ...f22222222f...
            ...f22222222f...
            ...ff22ff22ff...
            ....f22ff22f....
            ....f22ff22f....
            ...f222ff222f...
            ....fff..fff....
            `, randint(-50, 50), randint(-50, 50))
        demon.setKind(SpriteKind.Enemy)
        demon.startEffect(effects.fire)
    }
})
game.onUpdateInterval(2000, function () {
    if (info.score() < 30) {
        bee = sprites.createProjectileFromSide(img`
            .......11........
            .....111111......
            .....f1111f......
            ....11f11f11.....
            ....11f11f11.....
            ....11111111.....
            .....111111......
            ......1ff1.......
            ......1111.......
            .......11........
            .......11........
            .....111111......
            ....1..11..1.....
            ......1111.......
            ....11.11.11.....
            ......1111.......
            ....11.11.11.....
            .......11........
            .....111111......
            ......1111.......
            ......1..1.......
            ......1..1.......
            ......1..1.......
            .....11..11......
            `, randint(-50, 50), randint(-50, 50))
        bee.setKind(SpriteKind.Enemy)
        bee.startEffect(effects.ashes)
    }
})
game.onUpdateInterval(2000, function () {
    if (bones_spawn == true) {
        demon = sprites.createProjectileFromSide(img`
            .f............f.
            f2ff.........f2f
            f22ffffffffff22f
            .f222222222222f.
            ..ff2f2222f2ff..
            ...f22f22f22f...
            ...f22f22f22f...
            ...f22222222f...
            ...f22f22f22f...
            ....f22ff22ff...
            .....f2222f.....
            .....f2222f.....
            ....f222222f....
            ....f222222f....
            ...f22222222f...
            ...f22222222f...
            ...f22222222f...
            ...f22222222f...
            ...f22222222f...
            ...ff22ff22ff...
            ....f22ff22f....
            ....f22ff22f....
            ...f222ff222f...
            ....fff..fff....
            `, randint(-50, 50), randint(-50, 50))
        demon.setKind(SpriteKind.Enemy)
        demon.startEffect(effects.fire)
    }
})
game.onUpdateInterval(1000, function () {
    if (bones_spawn == true) {
        bee = sprites.createProjectileFromSide(img`
            .......11........
            .....111111......
            .....f1111f......
            ....11f11f11.....
            ....11f11f11.....
            ....11111111.....
            .....111111......
            ......1ff1.......
            ......1111.......
            .......11........
            .......11........
            .....111111......
            ....1..11..1.....
            ......1111.......
            ....11.11.11.....
            ......1111.......
            ....11.11.11.....
            .......11........
            .....111111......
            ......1111.......
            ......1..1.......
            ......1..1.......
            ......1..1.......
            .....11..11......
            `, randint(-50, 50), randint(-50, 50))
        bee.setKind(SpriteKind.Enemy)
        demon.startEffect(effects.ashes)
    }
})
forever(function () {
    if (info.score() >= 4) {
        bones_spawn = true
        demon_spawn = true
    }
})
game.onUpdateInterval(6000, function () {
    if (info.score() < 30) {
        _1st_music_loop = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 . 3 3 3 . . . . . 
            . . . . 3 3 3 3 3 3 3 3 3 . . . . 
            . . . . 3 3 3 3 3 3 3 3 3 . . . . 
            . . . . 3 3 3 3 3 3 3 3 3 . . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . . . 3 3 3 . . . . . . . 
            . . . . . . . . 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, randint(-50, 50), randint(-50, 50))
        _1st_music_loop.setKind(SpriteKind.Heals)
    }
})
game.onUpdateInterval(150, function () {
    if (bone_flag == true) {
        bone = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 . . . 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 . . . 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-50, 50), randint(-50, 50))
        bone.setKind(SpriteKind.Enemy)
    }
})
game.onUpdateInterval(3000, function () {
    if (info.score() < 30) {
        clover = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . d d d . . 
            . . d d d d d . . d . 
            . d d d . . d . . d . 
            . d . d . . . d d . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            . . . . . . . . . . . 
            `, randint(-50, 50), randint(-50, 50))
        clover.startEffect(effects.trail)
    }
})
