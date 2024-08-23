const pool = require('../db/db.js');

// const addGunhaDetails = async (req, res) => {
//     const {
//         gunhaNondNo,
//         kalam,
//         firyadi,
//         aropicheNav,
//         gunhaDakhalDateTime,
//         gunhaTapsasMilalelaDate,
//         aropiAtakKelaAslyasDate,
//         gelaMal,
//         milalaMal,
//         pathvilelyaPrakaranDaindiniNo,
//         akherTajvijDate,
//         remark
//     } = req.body;

//     try {
//         const connection = await pool.getConnection();

//         const query = `
//             INSERT INTO form_gunha (
//                 gunhaNondNo, kalam, firyadi, aropicheNav, gunhaDakhalDateTime,
//                 gunhaTapsasMilalelaDate, aropiAtakKelaAslyasDate, gelaMal,
//                 milalaMal, pathvilelyaPrakaranDaindiniNo, akherTajvijDate, remark
//             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//         `;

//         const [result] = await connection.execute(query, [
//             gunhaNondNo,
//             kalam,
//             firyadi,
//             aropicheNav,
//             gunhaDakhalDateTime,
//             gunhaTapsasMilalelaDate,
//             aropiAtakKelaAslyasDate,
//             gelaMal,
//             milalaMal,
//             pathvilelyaPrakaranDaindiniNo,
//             akherTajvijDate,
//             remark
//         ]);

//         connection.release();

//         res.status(200).json({ msg: "Gunha details added successfully", insertId: result.insertId });
//     } catch (err) {
//         console.error('Error adding gunha details:', err.message);
//         res.status(500).send('Server error');
//     }
// };

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
        remark,
        status  // Adding status
    } = req.body;

    const attachment = req.file ? req.file.path : null; // Assuming you are using multer for file handling

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_gunha (
                gunhaNondNo, kalam, firyadi, aropicheNav, gunhaDakhalDateTime,
                gunhaTapsasMilalelaDate, aropiAtakKelaAslyasDate, gelaMal,
                milalaMal, pathvilelyaPrakaranDaindiniNo, akherTajvijDate, remark,
                status, attachment  
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Gunha details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding gunha details:', err.message);
        res.status(500).send('Server error');
    }
};


const addGunhaBhag6Details = async (req, res) => {
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
        remark,
        status  // Adding status
    } = req.body;

    const attachment = req.file ? req.file.path : null; // Assuming you are using multer for file handling

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO bhag_6 (
                gunhaNondNo, kalam, firyadi, aropicheNav, gunhaDakhalDateTime,
                gunhaTapsasMilalelaDate, aropiAtakKelaAslyasDate, gelaMal,
                milalaMal, pathvilelyaPrakaranDaindiniNo, akherTajvijDate, remark,
                status, attachment  
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Gunha details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding gunha details:', err.message);
        res.status(500).send('Server error');
    }
};


const addGunhaDarubandiDetails = async (req, res) => {
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
        remark,
        status  // Adding status
    } = req.body;

    const attachment = req.file ? req.file.path : null; // Assuming you are using multer for file handling

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO darubandi (
                gunhaNondNo, kalam, firyadi, aropicheNav, gunhaDakhalDateTime,
                gunhaTapsasMilalelaDate, aropiAtakKelaAslyasDate, gelaMal,
                milalaMal, pathvilelyaPrakaranDaindiniNo, akherTajvijDate, remark,
                status, attachment  
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Gunha details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding gunha details:', err.message);
        res.status(500).send('Server error');
    }
};

const addGunhaCourtCaseDetails = async (req, res) => {
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
        remark,
        status  // Adding status
    } = req.body;

    const attachment = req.file ? req.file.path : null; // Assuming you are using multer for file handling

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO courtakadun_aalele_case (
                gunhaNondNo, kalam, firyadi, aropicheNav, gunhaDakhalDateTime,
                gunhaTapsasMilalelaDate, aropiAtakKelaAslyasDate, gelaMal,
                milalaMal, pathvilelyaPrakaranDaindiniNo, akherTajvijDate, remark,
                status, attachment  
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Gunha details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding gunha details:', err.message);
        res.status(500).send('Server error');
    }
};





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
        report,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_aksmat_mrityu_nond (
                mayatDakhalKarnaraAmaldar, mayatDakhalZalyachaDateTime, mayatDakhalKelyachaDateTime, 
                mayatGhadlyacheThikanDishaAniPoliceThanepasunAntar, mayatachekhabarinfo, 
                mayatIsmacheSampurnNavAniRahnyacheThikan, gender, MaritalStatus, 
                postmortem, muthmatisParvangi, maytacheKaran, mayatKonasTapasasDile, 
                akherReportSendKelyacheDateTime, report,status, attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
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
            report,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Aksmat details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding aksmat details:', err.message);
        res.status(500).send('Server error');
    }
};


const addMotorAccidentDetails = async (req, res) => {
    const {
        motorApghatDakhalNo,
        dateTime,
        apghatGhadleliDateTime,
        apghatacheThikanPoliceStationDistance,
        vahnachaPrakarAniNondaniNo,
        khabarDenaryacheSampurnnavAniPatta,
        jakhamiIsmacheNavAniPatta,
        apghatacheKaran,
        tapasikAniDakhalKarnarya,
        apghatachePrakar,
        apghatDakhalpatrKaAdalhalpatr,
        apghatacheVargikaran,
        apghatacheVargikarandate,
        dyspNo,
        dyspDate,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_motor_accident (
                motorApghatDakhalNo, dateTime, apghatGhadleliDateTime, apghatacheThikanPoliceStationDistance,
                vahnachaPrakarAniNondaniNo, khabarDenaryacheSampurnnavAniPatta, jakhamiIsmacheNavAniPatta,
                apghatacheKaran, tapasikAniDakhalKarnarya, apghatachePrakar, apghatDakhalpatrKaAdalhalpatr,
                apghatacheVargikaran, apghatacheVargikarandate, dyspNo, dyspDate, remark,status, attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [result] = await connection.execute(query, [
            motorApghatDakhalNo,
            dateTime,
            apghatGhadleliDateTime,
            apghatacheThikanPoliceStationDistance,
            vahnachaPrakarAniNondaniNo,
            khabarDenaryacheSampurnnavAniPatta,
            jakhamiIsmacheNavAniPatta,
            apghatacheKaran,
            tapasikAniDakhalKarnarya,
            apghatachePrakar,
            apghatDakhalpatrKaAdalhalpatr,
            apghatacheVargikaran,
            apghatacheVargikarandate,
            dyspNo,
            dyspDate,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Motor accident details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding motor accident details:', err.message);
        res.status(500).send('Server error');
    }
};


const addVSNDetails = async (req, res) => {
    const {
        konakadunAale,
        aalelyaArjachaNo,
        date,
        arjdaracheNavAniPatta,
        gairArjdaracheNavAniPatta,
        arjatilThodkyatHakikat,
        pudhilKaryavahisathiNav,
        arjachiNirgati,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_vsn (
                konakadunAale, aalelyaArjachaNo, date, arjdaracheNavAniPatta, gairArjdaracheNavAniPatta,
                arjatilThodkyatHakikat, pudhilKaryavahisathiNav, arjachiNirgati, remark,status, attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [result] = await connection.execute(query, [
            konakadunAale,
            aalelyaArjachaNo,
            date,
            arjdaracheNavAniPatta,
            gairArjdaracheNavAniPatta,
            arjatilThodkyatHakikat,
            pudhilKaryavahisathiNav,
            arjachiNirgati,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "VSN details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding VSN details:', err.message);
        res.status(500).send('Server error');
    }
};

const addVSNSthanicDetails = async (req, res) => {
    const {
        konakadunAale,
        aalelyaArjachaNo,
        date,
        arjdaracheNavAniPatta,
        gairArjdaracheNavAniPatta,
        arjatilThodkyatHakikat,
        pudhilKaryavahisathiNav,
        arjachiNirgati,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO sthanik_arj (
                konakadunAale, aalelyaArjachaNo, date, arjdaracheNavAniPatta, gairArjdaracheNavAniPatta,
                arjatilThodkyatHakikat, pudhilKaryavahisathiNav, arjachiNirgati, remark,status, attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [result] = await connection.execute(query, [
            konakadunAale,
            aalelyaArjachaNo,
            date,
            arjdaracheNavAniPatta,
            gairArjdaracheNavAniPatta,
            arjatilThodkyatHakikat,
            pudhilKaryavahisathiNav,
            arjachiNirgati,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "VSN details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding VSN details:', err.message);
        res.status(500).send('Server error');
    }
};




const addHaddaparDetails = async (req, res) => {
    const {
        haddaparPrastavNo,
        dateTime,
        haddaprPrastavTayarKarnaryacheNav,
        kalam,
        pathavleliDate,
        pathavleliNo,
        haddaparAgainstPersonName,
        dakhalGunhe,
        aadesh,
        status,
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_haddapar (
                haddaparPrastavNo, dateTime, haddaprPrastavTayarKarnaryacheNav, kalam,
                pathavleliDate,pathavleliNo, haddaparAgainstPersonName, dakhalGunhe, aadesh,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?,?)
        `;

        const [result] = await connection.execute(query, [
            haddaparPrastavNo,
            dateTime,
            haddaprPrastavTayarKarnaryacheNav,
            kalam,
            pathavleliDate,
            pathavleliNo,
            haddaparAgainstPersonName,
            dakhalGunhe,
            aadesh,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Haddapar details added successfully", insertId: result.insertId });
    } catch (err) {
        console.error('Error adding Haddapar details:', err.message);
        res.status(500).send('Server error');
    }
};

const addGahalMalachiNondDetails = async (req, res) => {
    const {
        date,
        policeThaneDayariNond,
        time,
        vardiDenaryaIsmacheNaavAniPatta,
        malGahalThikan,
        malacheVarnan,
        kimmat,
        gahalMalOlkhnareNaav,
        pudhilTapasAdhikariNav,
        result,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_gahal_malachi_nond (
                date, policeThaneDayariNond, time, vardiDenaryaIsmacheNaavAniPatta, malGahalThikan,
                malacheVarnan, kimmat, gahalMalOlkhnareNaav, pudhilTapasAdhikariNav, result, remark,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [data] = await connection.execute(query, [
            date,
            policeThaneDayariNond,
            time,
            vardiDenaryaIsmacheNaavAniPatta,
            malGahalThikan,
            malacheVarnan,
            kimmat,
            gahalMalOlkhnareNaav,
            pudhilTapasAdhikariNav,
            result,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Gahal Malachi Nond details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding Gahal Malachi Nond details:', err.message);
        res.status(500).send('Server error');
    }
};

const addBnsDetails = async (req, res) => {
    const {
        prastavNo,
        dateTime,
        firyadicheNavAniHudda,
        samnewalaYancheNavAniPatta,
        kaydyacheKalam,
        khatlaAadesh,
        khatlaDate,
        gunhyachiThodkyatHakikat,
        courtacheNaav,
        date,
        courtResult,
        ResultDate,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_bns (
                prastavNo, dateTime, firyadicheNavAniHudda, samnewalaYancheNavAniPatta, kaydyacheKalam,
                khatlaAadesh, khatlaDate, gunhyachiThodkyatHakikat, courtacheNaav, date,
                courtResult, ResultDate, remark,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [data] = await connection.execute(query, [
            prastavNo,
            dateTime,
            firyadicheNavAniHudda,
            samnewalaYancheNavAniPatta,
            kaydyacheKalam,
            khatlaAadesh,
            khatlaDate,
            gunhyachiThodkyatHakikat,
            courtacheNaav,
            date,
            courtResult,
            ResultDate,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Bns details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding Bns details:', err.message);
        res.status(500).send('Server error');
    }
};


const addBns128Details = async (req, res) => {
    const {
        prastavNo,
        dateTime,
        firyadicheNavAniHudda,
        samnewalaYancheNavAniPatta,
        kaydyacheKalam,
        khatlaAadesh,
        khatlaDate,
        gunhyachiThodkyatHakikat,
        courtacheNaav,
        date,
        courtResult,
        ResultDate,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO bnss_128 (
                prastavNo, dateTime, firyadicheNavAniHudda, samnewalaYancheNavAniPatta, kaydyacheKalam,
                khatlaAadesh, khatlaDate, gunhyachiThodkyatHakikat, courtacheNaav, date,
                courtResult, ResultDate, remark,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [data] = await connection.execute(query, [
            prastavNo,
            dateTime,
            firyadicheNavAniHudda,
            samnewalaYancheNavAniPatta,
            kaydyacheKalam,
            khatlaAadesh,
            khatlaDate,
            gunhyachiThodkyatHakikat,
            courtacheNaav,
            date,
            courtResult,
            ResultDate,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Bns details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding Bns details:', err.message);
        res.status(500).send('Server error');
    }
};


const addBns129Details = async (req, res) => {
    const {
        prastavNo,
        dateTime,
        firyadicheNavAniHudda,
        samnewalaYancheNavAniPatta,
        kaydyacheKalam,
        khatlaAadesh,
        khatlaDate,
        gunhyachiThodkyatHakikat,
        courtacheNaav,
        date,
        courtResult,
        ResultDate,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO bnss_129 (
                prastavNo, dateTime, firyadicheNavAniHudda, samnewalaYancheNavAniPatta, kaydyacheKalam,
                khatlaAadesh, khatlaDate, gunhyachiThodkyatHakikat, courtacheNaav, date,
                courtResult, ResultDate, remark,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [data] = await connection.execute(query, [
            prastavNo,
            dateTime,
            firyadicheNavAniHudda,
            samnewalaYancheNavAniPatta,
            kaydyacheKalam,
            khatlaAadesh,
            khatlaDate,
            gunhyachiThodkyatHakikat,
            courtacheNaav,
            date,
            courtResult,
            ResultDate,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Bns details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding Bns details:', err.message);
        res.status(500).send('Server error');
    }
};

const addBnssDetails = async (req, res) => {
    const {
        prastavNo,
        dateTime,
        firyadicheNavAniHudda,
        samnewalaYancheNavAniPatta,
        kaydyacheKalam,
        khatlaAadesh,
        khatlaDate,
        gunhyachiThodkyatHakikat,
        courtacheNaav,
        date,
        courtResult,
        ResultDate,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO bnss (
                prastavNo, dateTime, firyadicheNavAniHudda, samnewalaYancheNavAniPatta, kaydyacheKalam,
                khatlaAadesh, khatlaDate, gunhyachiThodkyatHakikat, courtacheNaav, date,
                courtResult, ResultDate, remark,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [data] = await connection.execute(query, [
            prastavNo,
            dateTime,
            firyadicheNavAniHudda,
            samnewalaYancheNavAniPatta,
            kaydyacheKalam,
            khatlaAadesh,
            khatlaDate,
            gunhyachiThodkyatHakikat,
            courtacheNaav,
            date,
            courtResult,
            ResultDate,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Bns details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding Bns details:', err.message);
        res.status(500).send('Server error');
    }
};


const addMissingDetails = async (req, res) => {
    const {
        dayariNo,
        date,
        tapasasMilalechiDate,
        takrarKarnaryacheNav,
        bepattaVyakticheNaav,
        bepattaVyakticheVarnan,
        jobBusiness,
        sathidarRelative,
        anyCashGold,
        smokingDrinkingHabit,
        tryForOther,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_missing (
                dayariNo, date, tapasasMilalechiDate, takrarKarnaryacheNav, bepattaVyakticheNaav,
                bepattaVyakticheVarnan, jobBusiness, sathidarRelative, anyCashGold, smokingDrinkingHabit,
                tryForOther, remark,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [data] = await connection.execute(query, [
            dayariNo,
            date,
            tapasasMilalechiDate,
            takrarKarnaryacheNav,
            bepattaVyakticheNaav,
            bepattaVyakticheVarnan,
            jobBusiness,
            sathidarRelative,
            anyCashGold,
            smokingDrinkingHabit,
            tryForOther,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Missing details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding Missing details:', err.message);
        res.status(500).send('Server error');
    }
};

const addAgniUpdravNondDetails = async (req, res) => {
    const {
        jalitDdakhalKarnaryacheNav,
        jalitZalyachaDateTime,
        jalitDakhalKelyachaDateTime,
        jalitGhadlyachaeThikanDishaPoliceStation,
        khabarDenaryacheSampurnNavAniPatta,
        hakikat,
        jalitatZaleleNuksan,
        jalitamadheHaniZaliAaslyas,
        gunhyachaPrakar,
        tapasKonakade,
        mamledarReport,
        date,
        reportPathvilela,
        remark,
        status
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO form_agni_updrav_nond (
                jalitDdakhalKarnaryacheNav, jalitZalyachaDateTime, jalitDakhalKelyachaDateTime, 
                jalitGhadlyachaeThikanDishaPoliceStation, khabarDenaryacheSampurnNavAniPatta, hakikat, 
                jalitatZaleleNuksan, jalitamadheHaniZaliAaslyas, gunhyachaPrakar, tapasKonakade, 
                mamledarReport, date, reportPathvilela, remark,status,attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `;

        const [data] = await connection.execute(query, [
            jalitDdakhalKarnaryacheNav,
            jalitZalyachaDateTime,
            jalitDakhalKelyachaDateTime,
            jalitGhadlyachaeThikanDishaPoliceStation,
            khabarDenaryacheSampurnNavAniPatta,
            hakikat,
            jalitatZaleleNuksan,
            jalitamadheHaniZaliAaslyas,
            gunhyachaPrakar,
            tapasKonakade,
            mamledarReport,
            date,
            reportPathvilela,
            remark,
            status,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Agni Updrav Nond details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding Agni Updrav Nond details:', err.message);
        res.status(500).send('Server error');
    }
};

const addAchievementDetails = async (req, res) => {
    const {
        gunhaNo,
        certificateDenareOfficer,
        certificate,
        socialMedia,
        remark,
        dateFrom,
        dateTo,
          
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO achievement (
                gunhaNo, certificateDenareOfficer, certificate, 
                socialMedia, remark, dateFrom, dateTo, attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?,?)
        `;

        const [data] = await connection.execute(query, [
            gunhaNo,
            certificateDenareOfficer,
            certificate,
            socialMedia,
            remark,
            dateFrom,
            dateTo,
            attachment || null
        ]);

        connection.release();

        res.status(200).json({ msg: "Achievement details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding achievement details:', err.message);
        res.status(500).send('Server error');
    }
};

// const addCourtHearingDetails = async (req, res) => {
//     const {
//         crNoACT,
//         usACT,
//         courtHearingDate,
//         attendingBefore,
//         daysOnHandsToAttend,
//         dateFrom,
//         dateTo,
//         status
//     } = req.body;

//     const attachment = req.file ? req.file.path : null;

//     try {
//         const connection = await pool.getConnection();

//         const query = `
//             INSERT INTO court_hearing (
//                 crNoACT, usACT, courtHearingDate, 
//                 attendingBefore, daysOnHandsToAttend, dateFrom, dateTo,status,attachment
//             ) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)
//         `;

//         const [data] = await connection.execute(query, [
//             crNoACT,
//             usACT,
//             courtHearingDate,
//             attendingBefore,
//             daysOnHandsToAttend,
//             dateFrom,
//             dateTo,
//             status,
//             attachment || null
//         ]);

//         connection.release();

//         res.status(200).json({ msg: "Court hearing details added successfully", insertId: data.insertId });
//     } catch (err) {
//         console.error('Error adding court hearing details:', err.message);
//         res.status(500).send('Server error');
//     }
// };

const addCourtHearingDetails = async (req, res) => {
    const {
        crNoACT = '',
        usACT = '',
        courtHearingDate = '',
        attendingBefore = '',
        daysOnHandsToAttend = '',
        dateFrom = '',
        dateTo = '',
        status = ''
    } = req.body;

    const attachment = req.file ? req.file.path : null;

    try {
        const connection = await pool.getConnection();

        const query = `
            INSERT INTO court_hearing (
                crNoACT, usACT, courtHearingDate, 
                attendingBefore, daysOnHandsToAttend, dateFrom, dateTo, status, attachment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [data] = await connection.execute(query, [
            crNoACT,
            usACT,
            courtHearingDate,
            attendingBefore,
            daysOnHandsToAttend,
            dateFrom,
            dateTo,
            status,
            attachment || ''
        ]);

        connection.release();

        res.status(200).json({ msg: "Court hearing details added successfully", insertId: data.insertId });
    } catch (err) {
        console.error('Error adding court hearing details:', err.message);
        res.status(500).send('Server error');
    }
};







module.exports = {
     addAksmatDetails , 
     addGunhaDetails,
     addGunhaBhag6Details,
     addGunhaCourtCaseDetails,
     addGunhaDarubandiDetails,
     addMissingDetails ,
     addMotorAccidentDetails,
      addVSNDetails , addVSNSthanicDetails,
     addHaddaparDetails , addAgniUpdravNondDetails ,
     addAchievementDetails, addGahalMalachiNondDetails,
     addBnsDetails,addBns128Details,addBns129Details,addBnssDetails,
     addCourtHearingDetails,

     }

     
