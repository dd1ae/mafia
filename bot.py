import os
from telegram.ext import Application, CommandHandler

TOKEN = os.getenv("7900197610:AAGArfkfZeEJPOGnm5L9qCdmtp8nj0ZzP9M")

async def start(update, context):
    await update.message.reply_text("Привет! Я работаю через Webhook.")

app = Application.builder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

app.run_webhook(
    listen="0.0.0.0",
    port=int(os.environ.get("PORT", 5000)),
    webhook_url=f"https://{os.environ.get('RENDER_EXTERNAL_HOSTNAME')}/"
)