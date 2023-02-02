class Api::V1::MessagesController < ApplicationController
  def index
    messages = Message.all.shuffle
    render json: messages
  end
end
