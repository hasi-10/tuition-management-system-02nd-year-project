const StudentProfile = require("../models/StudentProfile");

// Create or Update Profile
const saveProfile = async (req, res) => {
  try {
    const { fullName, email, phone, grade, profileImage } = req.body;
    console.log(req.body);

    // Check whether the profile already exists
    let profile = await StudentProfile.findOne({ email });

    if (profile) {
      // Update existing profile
      profile.fullName = fullName;
      profile.phone = phone;
      profile.grade = grade;
      profile.profileImage = profileImage;

      await profile.save();

      return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: profile,
      });
    }

    // Create new profile
    profile = new StudentProfile({
      fullName,
      email,
      phone,
      grade,
      profileImage,
    });

    await profile.save();

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: profile,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get Profile by Email
const getProfile = async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({
      email: req.params.email,
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  saveProfile,
  getProfile,
};