class GuildController < ApplicationController
  def menu
  end

  def front
  end

  def exam
    @pc = Pc.new(name: "bob")
  end

  def score
    redirect_to "/guild/confirm"
  end

  def confirm
  end

  def enter
  end
end
