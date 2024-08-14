export const addVoucher = async (req, res) => {
    try {
        res.status(200).json({ message: "Add voucher" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}