json.extract! event, :id, :location, :confirmed, :created_at, :updated_at
json.url event_url(event, format: :json)
