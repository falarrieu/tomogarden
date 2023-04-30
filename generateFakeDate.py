import json
import random
from datetime import datetime, timedelta

# List of vegetables or plants to choose from
vegetables = ['Tomato', 'Carrot', 'Lettuce', 'Cucumber', 'Spinach', 'Broccoli', 'Cabbage']

# Number of records to generate
num_records = 50

# List of existing id values
existing_ids = []

# Generate fake data
data = []
for i in range(num_records):
    # Generate random id
    while True:
        id = random.randint(1000, 9999)
        if id not in existing_ids:
            existing_ids.append(id)
            break

    # Generate random vegetable or plant name
    name = random.choice(vegetables)

    # Generate random date it was posted
    date_posted = datetime.now() - timedelta(days=random.randint(0, 365))

    # Format date to day, month, and year
    date_posted = date_posted.strftime('%d-%m-%Y')

    # Generate random price of product
    price = round(random.uniform(1.00, 10.00), 2)

    # Generate random availability
    available = random.choice([True, False])

    # Create dictionary with data
    record = {'id': id, 'name': name, 'date_posted': date_posted, 'price': price, 'available': available}

    # Add record to data list
    data.append(record)

# Write data to pretty formatted JSON file
with open('./src/fake_data.json', 'w') as f:
    json.dump(data, f, indent=4)
