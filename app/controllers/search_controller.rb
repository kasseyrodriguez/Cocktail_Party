class SearchController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        results = User.bartender
        @results = results.map do |result|
          result.attributes.merge(location: user_path(result))
        end
        render json: @results
      end
    end
  end
end
