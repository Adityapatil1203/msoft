const pool = require('../db/db.js');

const addAksmatDetails = async (req, res) => {
    const {
        mayatDakhalKarnaraAmaldar,
        mayatDakhalZalyachaDateTime,
        mayatDakhalKelyachaDateTime,
        mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar,
        mayatachekhabarinfo,
        mayatIsmacheSampurnNavAniRahnyacheThikan,
        gender,
        MaritalStatus,
        postmortem,
        muthmatisParvangi,
        maytacheKaran,
        mayatKonasTapasasDile,
        akherReportSendKelyacheDateTime,
        report
    } = req.body;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_aksmat_mrityu_nond (
                mayatDakhalKarnaraAmaldar, mayatDakhalZalyachaDateTime, mayatDakhalKelyachaDateTime, 
                mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar, mayatachekhabarinfo, 
                mayatIsmacheSampurnNavAniRahnyacheThikan, gender, MaritalStatus, 
                postmortem, muthmatisParvangi, maytacheKaran, mayatKonasTapasasDile, 
                akherReportSendKelyacheDateTime, report
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await connection.execute(query, [
            mayatDakhalKarnaraAmaldar,
            mayatDakhalZalyachaDateTime,
            mayatDakhalKelyachaDateTime,
            mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar,
            mayatachekhabarinfo,
            mayatIsmacheSampurnNavAniRahnyacheThikan,
            gender,
            MaritalStatus,
            postmortem,
            muthmatisParvangi,
            maytacheKaran,
            mayatKonasTapasasDile,
            akherReportSendKelyacheDateTime,
            report
        ]);

        connection.release();

        res.status(200).json({ msg: "Aksmat details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding aksmat details:', err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { addAksmatDetails };
