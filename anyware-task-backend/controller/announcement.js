const Announcement = require('../model/announcement');

exports.getAnnouncement = async (req, res) => {
    const announcement = await Announcement.find({});
    res.json(announcement);
}

exports.createAnnouncement = async (req, res) => {
    const { user, course, summary } = req.body;
    const announcement = new Announcement({
        user,
        course,
        summary
    });
    await announcement.save();
    res.json(announcement);

    
}

exports.updateAnnouncement = async (req, res) => {
    const { user, course, summary } = req.body;
    const announcement = await Announcement.findByIdAndUpdate(req.params.id, {
        user,
        course,
        summary
    }, { new: true });
    res.json(announcement);
}

exports.getAnnouncementById = async (req, res) => {
    const announcement = await Announcement.findById(req.params.id);
    res.json(announcement);
}

exports.deleteAnnouncement = async (req, res) => {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    res.json(announcement);
}