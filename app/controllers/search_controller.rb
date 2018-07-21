class SearchController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        @results = User.all
        @results.map do |result|
          result.attributes.merge(
            location: send("#{result.class.name.downcase}_path", result)
          )
        end
        render json: @results
      end
    end
  end
end
