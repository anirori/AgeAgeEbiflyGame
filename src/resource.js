var res = {
    background_png:"res/background.png",
    uprock_png:"res/rock_above.png",
    underrock_png:"res/rock_under.png",
    up_png:"res/ceiling.png",
    under_png:"res/land.png",
    particle_texture:"res/particle.png",//パーティクル
    TitleBG_png:"res/ocean.png",
    Title_png:"res/Title.png",
    start_png:"res/start.png",
    gameoverBG_png:"res/ocean2.png",
    replay_png:"res/replay_button.png",
    Heart_png:"res/heart.png",

    //エビちゃんゾーン
    shrimp01_png:"res/shrimp01.png",
    shrimp02_png:"res/shrimp02.png",
    shrimp03_png:"res/shrimp03.png",
    shrimp04_png:"res/shrimp04.png",
    //ここまでエビちゃんゾーン

    //こっから珊瑚ゾーン
    sangoUp:"res/coral_above.png",
    sangoDown:"res/coral_under.png",
    //ここまで珊瑚ゾーン

    //こっから音楽
    bgm_title:"res/bgm_title.mp3",
    bgm_main:"res/bgm_main.mp3",
    se_swim:"res/se_flee1.mp3",
    se_get:"res/se_bang.mp3",
    se_miss:"res/se_surprise.mp3",
    se_death:"res/se_decide.mp3",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
