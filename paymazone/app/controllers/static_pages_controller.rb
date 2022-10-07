class StaticPagesController < ActionController::Base
    def frontend_index
      render file: 'public/index.html'
    end
  end
  