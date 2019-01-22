import boto3

s3 = boto3.resource('s3') # Startup your S3 instance
AWS_BUCKET = 'images.u.of.t.hacks.2019' # Main Bucket

def aws_lookup(img, download_path):

	# Function to download image given download path
	return s3.meta.client.download_file(AWS_BUCKET, img, download_path)

def lookup_table():
	# Due to technical difficulty with AWS dynamodb, so setup a lookup based on
	# the source link below

	# Source Link for Data: https://www.iwma.com/wp-content/uploads/2016/08/table-corrected.png
	
	data = {}
	data['artichoke'] = '3'
	data['asparagus'] = '3'
	data['avocado'] = '3'
	data['banana'] = '3'
	data['basil'] = '3'
	data['broccoli'] = '3'
	data['cherry'] = '3'
	data['corn'] = '3'
	data['dill'] = '3'
	data['green bean'] = '3'
	data['mushroom'] = '3'
	data['strawberry'] = '3'
	data['watercress'] = '3'
	data['arugula'] = '5'
	data['cucember'] = '5'
	data['eggplant'] = '5'
	data['grape'] = '5'
	data['lettuce'] = '5'
	data['lime'] = '5'
	data['mesclun'] = '5'
	data['pineapple'] = '5'
	data['zucchini'] = '5'
	data['apricot'] = '7'
	data['bell pepper'] = '7'
	data['blueberry'] = '7'
	data['brussel sprouts'] = '7'
	data['cauliflower'] = '7'
	data['grapefruit'] = '7'
	data['leeks'] = '7'
	data['lemons'] = '7'
	data['mint'] = '7'
	data['orange'] = '7'
	data['oregano'] = '7'
	data['parsley'] = '7'
	data['peaches'] = '7'
	data['pears'] = '7'
	data['plums'] = '7'
	data['spinach'] = '7'
	data['tomato'] = '7'
	data['watermelon'] = '7'
	data['apple'] = '>7'
	data['beet'] = '>7'
	data['cabbage'] = '>7'
	data['carrots'] = '>7'
	data['celery'] = '>7'
	data['garlic'] = '>7'
	data['onion'] = '>7'
	data['potatoes'] = '>7'
	data['winter squash'] = '>7'
	return data

def query_to_expired_db(data):
	# Helper function for looking up data from lookup_table

	values = lookup_table()
	return values[data]