# Import and parse json file into csv file

import json
import csv

json_filename = 'MediaDowloaderList-MQL4Tutorial.json'
with open('data\\'+json_filename, 'r') as file:
    data = json.load(file)

# print(type(data))  # data is a list

# Get the keys (column names) from the dictionary
fieldnames = data[0].keys()
print(fieldnames)

# Open a CSV file for writing
with open(json_filename+'.csv', 'a', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    # Write the header (column names)
    writer.writeheader()

    for el in data:
        # print(type(el))  # el is a dictionnary
        # print(len(el))
        # Write the data rows
        row = {key: el[key] for key in fieldnames}
        writer.writerow(row)

