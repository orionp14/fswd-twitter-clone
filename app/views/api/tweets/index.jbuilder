json.tweets do
  json.array! @tweets do |tweet|
    json.id tweet.id
    json.username tweet.user.username
    json.message tweet.message
    json.image url_for(tweet.image) if tweet.image.attached?
    json.is_mine tweet.user == @current_user
  end
end
