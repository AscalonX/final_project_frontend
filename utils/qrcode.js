const QRCode = require('qrcode');

exports.generateQR = async (data) => {
    const baseUrl = process.env.FRONTEND_URL || process.env.BASE_URL || `http://localhost:3000`;
    const url = `${baseUrl}/booking/${data.reservationId}`;
    return await QRCode.toDataURL(url);
};
