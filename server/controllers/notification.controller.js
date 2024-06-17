import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        const notifications = await Notification.find({ to: userId }).populate({
            path: "from",
            select: "username profileImg",
        });

        await Notification.updateMany({to: userId}, {read: true});

        res.status(200).json(notifications);

    } catch (error) {
        console.log("Error in getNotifications function: ", error);
        res.status(500).json({ message: "Internal server Error" });
    }
};
export const deleteNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        await Notification.deleteMany({ to: userId });

        res.status(200).json({ message: "Notifications deleted" });
    } catch (error) {
        console.log("Error in deleteNotifications function: ", error);
        res.status(500).json({ message: "Internal server Error" });
    }
};

