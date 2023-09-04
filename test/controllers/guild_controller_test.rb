require "test_helper"

class GuildControllerTest < ActionDispatch::IntegrationTest
  test "should get menu" do
    get guild_menu_url
    assert_response :success
  end

  test "should get front" do
    get guild_front_url
    assert_response :success
  end

  test "should get exam" do
    get guild_exam_url
    assert_response :success
  end

  test "should get confirm" do
    get guild_confirm_url
    assert_response :success
  end

  test "should get enter" do
    get guild_enter_url
    assert_response :success
  end

  test "should get score" do
    get guild_score_url
    assert_response :success
  end
end
