from googletrans import Translator

translator = Translator()
text_ja = "不可視芋"
text_en = translator.translate(text_ja, src='ja', dest='en').text

print(text_en) 