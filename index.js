// Main trading bot entry point

const TradingBot = require('./TradingBot');

// Initialize the trading bot
const bot = new TradingBot();

// Start the trading bot
bot.start();

// Log the date and time on startup
console.log(`Trading bot started at: ${new Date().toISOString()}`);