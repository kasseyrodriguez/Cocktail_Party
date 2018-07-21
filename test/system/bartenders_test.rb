require "application_system_test_case"

class BartendersTest < ApplicationSystemTestCase
  setup do
    @bartender = bartenders(:one)
  end

  test "visiting the index" do
    visit bartenders_url
    assert_selector "h1", text: "Bartenders"
  end

  test "creating a Bartender" do
    visit bartenders_url
    click_on "New Bartender"

    fill_in "Age", with: @bartender.age
    fill_in "Experience", with: @bartender.experience
    fill_in "Name", with: @bartender.name
    fill_in "Rating", with: @bartender.rating
    fill_in "Style", with: @bartender.style
    click_on "Create Bartender"

    assert_text "Bartender was successfully created"
    click_on "Back"
  end

  test "updating a Bartender" do
    visit bartenders_url
    click_on "Edit", match: :first

    fill_in "Age", with: @bartender.age
    fill_in "Experience", with: @bartender.experience
    fill_in "Name", with: @bartender.name
    fill_in "Rating", with: @bartender.rating
    fill_in "Style", with: @bartender.style
    click_on "Update Bartender"

    assert_text "Bartender was successfully updated"
    click_on "Back"
  end

  test "destroying a Bartender" do
    visit bartenders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Bartender was successfully destroyed"
  end
end
