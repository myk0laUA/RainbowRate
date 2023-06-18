from flask import Flask, request, jsonify
from application import app
from application.helpers import split_into_sentences, evaluate_each_sentence, transform_response, get_non_friendly, calculate_score, get_suggestions, correct_text

@app.route('/evaluate', methods=["GET","POST"])
def evaluate():
    #recieving data from front end
    data = request.get_json()
    text = data.get("text")
    #splitting the text
    sentences = split_into_sentences(text)
    #model response 
    model_output = evaluate_each_sentence(sentences)
    #formatting output
    formatted_output = transform_response(model_output)
    #tolerance score
    score = calculate_score(formatted_output)
    #suggestions to correct
    #suggestions = get_suggestions(get_non_friendly(formatted_output))
    #providing new version of the text
    #corrected_text =  correct_text(formatted_output,suggestions)
    #needs_correction
    needs_correction = get_non_friendly(formatted_output)
    
    return [score, formatted_output, needs_correction]