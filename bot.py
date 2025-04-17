import os
from telegram.ext import Application, CommandHandler

# Получаем токен из переменной окружения
TOKEN = os.getenv("7900197610:AAGArfkfZeEJPOGnm5L9qCdmtp8nj0ZzP9M
")

# Обработчик команды /start
async def start(update, context):
    await update.message.reply_text("Привет! Я мафиозный бот. Пиши /help, чтобы узнать, что я умею.")

# Обработчик команды /help
async def help_command(update, context):
    await update.message.reply_text(
        "/start — запустить бота\n"
        "/help — список команд\n"
        "Пиши, если нужны инструкции по мафии!"
    )

# Настройка приложения Telegram Bot
app = Application.builder().token(TOKEN).build()

# Добавляем обработчики
app.add_handler(CommandHandler("start", start))
app.add_handler(CommandHandler("help", help_command))

# Запуск как webhook-сервер
app.run_webhook(
    listen="0.0.0.0",
    port=int(os.environ.get("PORT", 5000)),
    webhook_url=f"https://{os.environ.get('RENDER_EXTERNAL_HOSTNAME')}/"
)