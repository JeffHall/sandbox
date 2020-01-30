import json

json_data = {'people': []}
json_data['people'].append({
    'name': 'Scott',
    'website': 'stackabuse.com',
    'from': 'Nebraska'
})
json_data['people'].append({
    'name': 'Larry',
    'website': 'google.com',
    'from': 'Michigan'
})
json_data['people'].append({
    'name': 'Tim',
    'website': 'apple.com',
    'from': 'Alabama'
})

with open('data.json', 'w') as outfile:
    json.dump(json_data, outfile)
