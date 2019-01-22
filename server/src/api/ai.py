import io
import os

# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision import types

def extract_image_details(filename):
    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # Loads the image into memory
    with io.open(filename, 'rb') as image_file:
        content = image_file.read()

    image = types.Image(content=content)

    # Performs label detection on the image file
    response = client.label_detection(image=image)
    labels = response.label_annotations

    #print('Labels:')
    description = []
    for label in labels:
        #print(label.description)
        description.append(label.description)
    return description[0]