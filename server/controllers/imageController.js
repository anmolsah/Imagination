import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/userModel.js";

// Controller function to generate image from prompt
export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    // Fetching User Details Using userId
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Checking User creditBalance
    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // Creation of new multi/part formdata
    const formdata = new FormData();
    formdata.append("prompt", prompt);

    // Calling Clipdrop API
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    // Convertion of arrayBuffer to base64
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 2,
    });

    res.json({
      success: true,
      message: "Background Removed",
      resultImage,
      creditBalance: user.creditBalance - 2,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
