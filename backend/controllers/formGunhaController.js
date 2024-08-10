const pool = require('../db/db.js');

const addGunhaDetails = async (req, res) => {
    const {
        gunhaNondNo,
        kalam,
        firyadi,
        aropicheNav,
        gunhaDakhalDateTime,
        gunhaTapsasMilalelaDate,
        aropiAtakKelaAslyasDate,
        gelaMal,
        milalaMal,
        pathvilelyaPrakaranDaindiniNo,
        akherTajvijDate,
        remark
    } = req.body;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_gunha (
                gunhaNondNo, kalam, firyadi, aropicheNav, gunhaDakhalDateTime,
                gunhaTapsasMilalelaDate, aropiAtakKelaAslyasDate, gelaMal,
                milalaMal, pathvilelyaPrakaranDaindiniNo, akherTajvijDate, remark
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await connection.execute(query, [
            gunhaNondNo,
            kalam,
            firyadi,
            aropicheNav,
            gunhaDakhalDateTime,
            gunhaTapsasMilalelaDate,
            aropiAtakKelaAslyasDate,
            gelaMal,
            milalaMal,
            pathvilelyaPrakaranDaindiniNo,
            akherTajvijDate,
            remark
        ]);

        connection.release();

        res.status(200).json({ msg: "Gunha details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding gunha details:', err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { addGunhaDetails };
