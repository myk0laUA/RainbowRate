from application import app, co
import datetime
import nltk


def split_into_sentences(text):
    nltk.download('punkt')  # This downloads the Punkt tokenizer.
    tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
    return tokenizer.tokenize(text)

def evaluate_each_sentence(inputs):
    response = co.classify(
        model='66c0a6ab-a4b6-445e-8acb-b90cc718f3cf-ft',
        inputs = inputs)
    return response

def transform_response(response):
    # Loop over the initial data and format it
    formatted_data = [{"input": clsf["input"], "prediction": clsf["prediction"]} for clsf in response["classifications"]]
    return formatted_data

def get_non_friendly(formatted_data):
    non_friendly = []
    for data in formatted_data:
        if data["prediction"] == "NON-PRIDE-FRIENDLY":
            non_friendly += data["input"]
    return non_friendly

def calculate_score(formatted_data):
    numb_friendly = 0
    numb_sentences = 0
    for data in formatted_data:
        if data["prediction"] == "NON-PRIDE-FRIENDLY":
            numb_sentences +=1
        elif data["prediction"] == "PRIDE-FRIENDLY":
            numb_friendly += 1
            numb_sentences +=1
        else:
            pass 
    return (numb_friendly / numb_sentences) * 100

def get_suggestions(non_friendly):
    suggestions = []
    for sentence in non_friendly:

        response = co.generate(
            model='command-light-nightly',
            prompt='Suggest how to make the following sentence, friendly towards LGBTQ+ community: \"${sentence}\"',
            max_tokens=308,
            temperature=1,
            k=0,
            stop_sequences=[],
            return_likelihoods='NONE')
        suggestions += {"input": "${sentence}", "suggestion": "{response.generations[0].text}"}
    return suggestions

def correct_text(formatted_data,suggestions):
    corrected = ""
    for data in formatted_data:
        if data["prediction"] == "PRIDE-FRIENDLY" or data["prediction"] == "NEUTRAL":
            corrected += f' ${data["input"]}'
        else:
            for suggestion in suggestions:
                if data["input"] == suggestion["input"]:
                    corrected += f' ${suggestion["suggestion"]}'
    return corrected