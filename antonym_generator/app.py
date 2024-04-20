#!/usr/bin/python3

from flask import Flask, render_template, request
import gensim
import MeCab
from gensim.models import KeyedVectors
import numpy as np
from googletrans import Translator
import random

import nltk
nltk.download("wordnet")

from nltk.corpus import wordnet

translator = Translator()

def antonym(text):
    while True:
        try:
            translated = translator.translate(text, src="ja", dest="en").text
            break
        except Exception as e:
            translated = ""
    sentence = ""
    words = translated.split(' ')
    for s in words:
        antonyms = []
        for syn in wordnet.synsets(s):
            for l in syn.lemmas():
                if l.antonyms():
                    antonyms.append(l.antonyms()[0].name())
        if len(antonyms) > 0:
            siz = len(antonyms)
            idx = random.randrange(siz)
            sentence += antonyms[idx]
        else:
            sentence += s
        sentence += " "
    print(sentence)
    while True:
        try:
            final_sentence = translator.translate(sentence, src="en", dest="ja").text
            break
        except Exception as e:
            finale_sentence = ""
    return final_sentence
    
app = Flask(__name__)

@app.route('/')
def hello():
    name = ""
    #return name
    return render_template('index.html', title='flask test', name=name) 

@app.route('/', methods=['POST'])
def sentence():
    if request.method == 'POST':
        sentence = request.form['input']
        s = antonym(str(sentence))
    else:
        s = "Error"
    return render_template('index.html', title='antonym', name=s) 

if __name__ == "__main__":
    app.run(debug=True)
