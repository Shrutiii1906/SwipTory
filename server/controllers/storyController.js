const express = require("express");
const Story = require("../Models/Story");
const User = require("../Models/User");

const getMedicalStories = async (req, res) => {
  try {
    const medicalStories = await Story.find({
      category: "Medical",
    });
    res.status(200).json({
      success: true,
      message: "Medical stories fetched successfully",
      stories: medicalStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getFruitStories = async (req, res) => {
  try {
    const fruitStories = await Story.find({ category: "Fruits" });
    res.status(200).json({
      success: true,
      message: "Fruits stories fetched successfully",
      stories: fruitStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const getWorldStories = async (req, res) => {
  try {
    const worldStories = await Story.find({ category: "World" });
    res.status(200).json({
      success: true,
      message: "World stories fetched successfully",
      stories: worldStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getIndiaStories = async (req, res) => {
  try {
    const indiaStories = await Story.find({ category: "India" });
    res.status(200).json({
      success: true,
      message: "India stories fetched successfully",
      stories: indiaStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getYourStories = async (req, res) => {
  try {
    const { id } = req.params;
    const yourStories = await Story.find({ creatorId: id });
    res.status(200).json({
      success: true,
      message: "Your stories fetched successfully",
      stories: yourStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getStoryById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!(id === null)) {
      const targetStory = await Story.findOne({ _id: id });
      res.status(200).json({
        success: true,
        stories: targetStory,
      });
    } 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSlideById = async (req, res) => {
  try {
    const { currentStory, slideId } = req.query;
    const story = await Story.findOne({ _id: currentStory });
    if (!story) {
      return res.json({ message: "no story found" });
    }
    const targetSlide = story.slides.find(
      (slide) => slide._id.toString() === slideId
    );
    if (!targetSlide) {
      return res.json({ message: "slide not found" });
    }
    res.json({ message: "success", targetSlide });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchBookmarks = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ success: false });
    }
    const user = await User.findById(userId);
    res.json({ success: true, bookmarks: user.bookmarks });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  getMedicalStories,
  getFruitStories,
  getWorldStories,
  getIndiaStories,
  getYourStories,
  getStoryById,
  getSlideById,
  fetchBookmarks,
};
