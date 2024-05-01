const express = require("express");
const router = express.Router();
const {
  getMedicalStories,
  getFruitStories,
  getWorldStories,
  getIndiaStories,
  getYourStories,
  getStoryById,
  getSlideById,
  fetchBookmarks,
} = require("../controllers/storyController");

router.route("/medical-stories").get(getMedicalStories);
router.route("/fruit-stories").get(getFruitStories);
router.route("/world-stories").get(getWorldStories);
router.route("/india-stories").get(getIndiaStories);
router.route("/my-stories/:id").get(getYourStories);
router.route("/story/:id").get(getStoryById);
router.route("/slide").get(getSlideById);
router.route('/bookmarks').get(fetchBookmarks);

module.exports = router;
