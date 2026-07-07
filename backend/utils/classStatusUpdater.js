const cron = require("node-cron");
const Class = require("../models/Class/class");

// Runs every minute
cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();

    const classes = await Class.find();

    for (let cls of classes) {
      const start = new Date(`${cls.date} ${cls.startTime}`);
      const end = new Date(`${cls.date} ${cls.endTime}`);

      let newStatus = cls.status;

      if (now >= start && now <= end) {
        newStatus = "live";
      } else if (now > end) {
        newStatus = "ended";
      } else {
        newStatus = "upcoming";
      }

      if (cls.status !== newStatus) {
        cls.status = newStatus;
        await cls.save();

        console.log(`Updated class ${cls.className} → ${newStatus}`);
      }
    }
  } catch (error) {
    console.log("Status update error:", error.message);
  }
});