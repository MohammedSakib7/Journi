from dotenv import load_dotenv
load_dotenv()

from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

# Load the API key from environment variables
API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')

@app.route('/cities', methods=['GET'])
def get_cities():
    search_term = request.args.get('searchTerm', '') # Print the API key
    print(f"Search Term: {search_term}")  # Print the search term

    if len(search_term) >= 3:
        try:
            url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json'
            params = {
                'key': API_KEY,
                'input': search_term,
                'fields': 'predictions(place_id,structured_formatting,description)',
                'types': 'locality',
            }
            response = requests.get(url, params=params)
            print(f"Response Status Code: {response.status_code}")  # Print the status code
            print(f"Response Text: {response.text}")  # Print the raw response
            predictions = response.json().get('predictions', [])
            cities = [{'name': p['structured_formatting']['main_text'], 'description': p['description'], 'place_id': p['place_id']} for p in predictions[:5]]
            return jsonify({'cities': cities})
        except Exception as e:
            print(f'Error fetching cities: {e}')
            return jsonify({'cities': []}), 500
    else:
        return jsonify({'cities': []})

@app.route('/submit', methods=['POST'])
def submit():
    # Process form data
    data = request.form.to_dict()
    # Process data and return JSON response
    processed_data = {
        'message': 'Data processed successfully',
        # 'originalData': data
    }
    return jsonify(processed_data)

@app.route('/hello', methods=['GET'])
def hello_world():
    return jsonify({'message': "Hello, World!"})

if __name__ == '__main__':
    app.run(port=5328, debug=True)