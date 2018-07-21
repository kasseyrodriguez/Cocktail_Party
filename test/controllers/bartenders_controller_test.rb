require 'test_helper'

class BartendersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bartender = bartenders(:one)
  end

  test "should get index" do
    get bartenders_url
    assert_response :success
  end

  test "should get new" do
    get new_bartender_url
    assert_response :success
  end

  test "should create bartender" do
    assert_difference('Bartender.count') do
      post bartenders_url, params: { bartender: { age: @bartender.age, experience: @bartender.experience, name: @bartender.name, rating: @bartender.rating, style: @bartender.style } }
    end

    assert_redirected_to bartender_url(Bartender.last)
  end

  test "should show bartender" do
    get bartender_url(@bartender)
    assert_response :success
  end

  test "should get edit" do
    get edit_bartender_url(@bartender)
    assert_response :success
  end

  test "should update bartender" do
    patch bartender_url(@bartender), params: { bartender: { age: @bartender.age, experience: @bartender.experience, name: @bartender.name, rating: @bartender.rating, style: @bartender.style } }
    assert_redirected_to bartender_url(@bartender)
  end

  test "should destroy bartender" do
    assert_difference('Bartender.count', -1) do
      delete bartender_url(@bartender)
    end

    assert_redirected_to bartenders_url
  end
end
