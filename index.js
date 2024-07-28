require('dotenv').config();

const { Bot,InlineKeyboard } = require("grammy");

const bot = new Bot(process.env.Token); 

bot.api.setMyCommands([
    {
       command :'start',description: 'Send this to start ur game'
    }
]);


bot.command("start", async (ctx) => {
    const keyb = new InlineKeyboard().url('Играть','t.me/SteppiCobot/siskapiskamb').row()
    .url('Наш канал','t.me/mswrks')

    await ctx.react('🍌')
    await ctx.reply('Здравствуйте,а вот и игра!',
        {reply_markup : keyb}
    )
});

bot.callbackQuery('webapp',async (ctx) =>{

})

bot.start();