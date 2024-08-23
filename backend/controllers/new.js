// controllers/caseController.js
const pool = require('../db/db.js'); // Assuming you have a db.js file that exports your MySQL pool

//Mapping
const gunhaToTableMapping = {
    'भाग ५ गुन्हांची नोंद': 'form_gunha',
    'भाग ६ गुन्हांची नोंद': 'bhag_6',
    'दारूबंदी गुन्हांची नोंद': 'darubandi',
    'कोर्टाकडून आलेल्या केसेसची नोंद': 'courtakadun_aalele_case',
    'अकस्मात मृत्यू नोंद': 'form_aksmat_mrityu_nond',
    'मोटार अपघात नोंद': 'form_motor_accident',
    'वरिष्ट अर्ज नोंद': 'form_vsn',
    'स्थानिक अर्ज नोंद': 'sthanik_arj',
    'प्रति.कार्य.बी.एन.एस.एस १२६': 'form_bns',
    'प्रति.कार्य.बी.एन.एस.एस १२८': 'bnss_128',
    'प्रति.कार्य.बी.एन.एस.एस १२९': 'bnss_129',
    'प्रति कार्य बी.एन.एस.एस': 'bnss',
    'हदपार नोंद': 'form_haddapar',
    'अग्नि उपद्रव नोंद': 'form_agni_updrav_nond',
    'मिसिंग नोंद': 'form_missing',
    'गहाळ मालाची नोंद': 'form_gahal_malachi_nond',
    'इतर': 'form_vsn'
};



// Utility function to get status counts and total entry count for a specific table
const getStatusCountsAndTotal = async (tableName) => {
    try {
        const connection = await pool.getConnection();

        const [results] = await connection.query(`
            SELECT 
                COUNT(CASE WHEN status = 'under investigation' THEN 1 END) as under_investigation,
                COUNT(CASE WHEN status = 'enquiry completed' THEN 1 END) as enquiry_completed,
                COUNT(CASE WHEN status = 'under trial' THEN 1 END) as under_trial,
                COUNT(*) as total_entries
            FROM ${tableName}
        `);

        connection.release();

        return results[0];
    } catch (err) {
        console.error(`Error fetching status counts and total for ${tableName}:`, err.message);
        throw new Error('Database query failed');
    }
};

// Controller function to handle the API request
const getCaseStatusAndTotalCounts = async (req, res) => {
    try {
        // const tables = {
        //     form_gunha: 'Gunha Nond',
        //     form_aksmat_mrityu_nond: 'Aksmat Mrityu Nond',
        //     form_motor_accident: 'Motor Accident Nond',
        //     form_vsn: 'Varishth Arj Nond',
        //     form_bns: 'BN Nond',
        //     form_haddapar: 'Haddapar Nond',
        //     form_agni_updrav_nond: 'Agni Updrav Nond',
        //     form_missing: 'Missing Nond',
        //     form_gahal_malachi_nond: 'Gahal Malachi Nond'
        // };
        const tables = {
            form_gunha: 'भाग ५ गुन्हांची नोंद',
            bhag_6: 'भाग ६ गुन्हांची नोंद',
            darubandi: 'दारूबंदी गुन्हांची नोंद',
            courtakadun_aalele_case: 'कोर्टाकडून आलेल्या केसेसची नोंद',
            form_aksmat_mrityu_nond: 'अकस्मात मृत्यू नोंद',
            form_motor_accident: 'मोटार अपघात नोंद',
            form_vsn: 'वरिष्ट अर्ज नोंद',
            sthanik_arj: 'स्थानिक अर्ज नोंद',
            form_bns: 'प्रति.कार्य.बी.एन.एस.एस १२६',
            bnss_128: 'प्रति.कार्य.बी.एन.एस.एस १२८',
            bnss_129: 'प्रति.कार्य.बी.एन.एस.एस १२९',
            bnss: 'प्रति कार्य बी.एन.एस.एस',
            form_haddapar: 'हदपार नोंद',
            form_agni_updrav_nond: 'अग्नि उपद्रव नोंद',
            form_missing: 'मिसिंग नोंद',
            form_gahal_malachi_nond: 'गहाळ मालाची नोंद',
            form_vsn: 'इतर'
        };

        const counts = {};

        for (const tableName of Object.keys(tables)) {
            counts[tableName] = await getStatusCountsAndTotal(tableName);
        }

        res.status(200).json(counts);
    } catch (err) {
        console.error('Error getting case status counts and total entries:', err.message);
        res.status(500).json({ msg: 'Server error' });
    }
};


// const getAchievementDetails = async (req, res) => {
//     const { searchTerm, dateFrom, dateTo } = req.query;

//     try {
//         const connection = await pool.getConnection();

//         let query = `
//             SELECT gunhaNo, certificateDenareOfficer, certificate, 
//                    socialMedia, remark
//             FROM achievement
//             WHERE 1=1
//         `;

//         const queryParams = [];

//         if (dateFrom) {
//             query += ` AND dateFrom >= ?`;
//             queryParams.push(dateFrom);
//         }

//         if (dateTo) {
//             query += ` AND dateTo <= ?`;
//             queryParams.push(dateTo);
//         }

//         if (searchTerm) {
//             query += ` AND (gunhaNo LIKE ? OR certificateDenareOfficer LIKE ? OR certificate LIKE ? OR socialMedia LIKE ? OR remark LIKE ?)`;
//             const likeSearchTerm = `%${searchTerm}%`;
//             queryParams.push(likeSearchTerm, likeSearchTerm, likeSearchTerm, likeSearchTerm, likeSearchTerm);
//         }

//         const [rows] = await connection.execute(query, queryParams);

//         connection.release();

//         res.status(200).json(rows);
//     } catch (err) {
//         console.error('Error fetching achievement details:', err.message);
//         res.status(500).send('Server error');
//     }
// };

const getAchievementDetails = async (req, res) => {
    const { searchTerm, dateFrom, dateTo } = req.query;

    try {
        const connection = await pool.getConnection();

        let query = `
            SELECT gunhaNo, certificateDenareOfficer, certificate, 
                   socialMedia, remark
            FROM achievement
            WHERE 1=1
        `;

        const queryParams = [];

        if (dateFrom) {
            query += ` AND cdate >= ?`;
            queryParams.push(dateFrom);
        }

        if (dateTo) {
            query += ` AND cdate <= ?`;
            queryParams.push(dateTo);
        }

        if (searchTerm) {
            query += ` AND (gunhaNo LIKE ? OR certificateDenareOfficer LIKE ? OR certificate LIKE ? OR socialMedia LIKE ? OR remark LIKE ?)`;
            const likeSearchTerm = `%${searchTerm}%`;
            queryParams.push(likeSearchTerm, likeSearchTerm, likeSearchTerm, likeSearchTerm, likeSearchTerm);
        }

        const [rows] = await connection.execute(query, queryParams);

        connection.release();

        res.status(200).json(rows);
    } catch (err) {
        console.error('Error fetching achievement details:', err.message);
        res.status(500).send('Server error');
    }
};




const getGunhaData = async (req, res) => {
    const { gunhaType } = req.query;

    try {
        const tableName = gunhaToTableMapping[gunhaType];
        if (!tableName) {
            return res.status(400).json({ error: 'Invalid gunha type' });
        }

        const connection = await pool.getConnection();

        const query = `SELECT * FROM ${tableName}`;
        const [rows] = await connection.execute(query);

        connection.release();

        res.status(200).json(rows);
    } catch (err) {
        console.error('Error fetching gunha data:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const searchGunha = async (req, res) => {
    const { selectedIndexes, status } = req.query;

    try {
        const connection = await pool.getConnection();
        const results = {};

        for (const gunhaType of selectedIndexes) {
            const tableName = gunhaToTableMapping[gunhaType];
            let query = `SELECT * FROM ${tableName} WHERE 1=1`;
            const params = [];

            if (status) {
                query += ` AND status = ?`;
                params.push(status);
            }

            const [rows] = await connection.execute(query, params);
            results[gunhaType] = rows;
        }

        connection.release();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching gunha data:', err.message);
        res.status(500).send('Server error');
    }
};


const searchInGunha = async (req, res) => {
    const { gunhaType, searchTerm } = req.query;
    const tableName = gunhaToTableMapping[gunhaType];

    if (!tableName) {
        return res.status(400).json({ error: 'Invalid gunha type' });
    }

    try {
        const connection = await pool.getConnection();
        
        // First, get the list of columns in the table
        const [columns] = await connection.query(`SHOW COLUMNS FROM ${tableName}`);
        const searchableColumns = columns
            .filter(col => col.Field !== 'attachment')
            .map(col => col.Field);

        let query = `SELECT * FROM ${tableName} WHERE 1=1`;
        const queryParams = [];

        // Build the query dynamically if there's a search term
        if (searchTerm) {
            query += ` AND (`;
            query += searchableColumns
                .map(col => `${col} LIKE ?`)
                .join(' OR ');
            query += `)`;

            // Add the search term for each searchable column
            for (let i = 0; i < searchableColumns.length; i++) {
                queryParams.push(`%${searchTerm}%`);
            }
        }

        const [rows] = await connection.execute(query, queryParams);
        connection.release();

        const filteredData = rows.map(row => {
            const { attachment, ...rest } = row;
            return rest;
        });

        res.status(200).json(filteredData);
    } catch (err) {
        console.error('Error fetching gunha data:', err.message);
        res.status(500).send('Server error');
    }
}



const getCourtHearingDetails = async (req, res) => {
    try {
        const connection = await pool.getConnection();

        const query = `
            SELECT 
                crNoACT, 
                usACT, 
                courtHearingDate, 
                attendingBefore, 
                daysOnHandsToAttend, 
                dateFrom, 
                dateTo, 
                status 
            FROM court_hearing
        `;

        const [rows] = await connection.execute(query);
        connection.release();

        res.status(200).json(rows);
    } catch (err) {
        console.error('Error fetching court hearing details:', err.message);
        res.status(500).send('Server error');
    }
};

const getGunhaById = async (req, res) => {
    const { id } = req.params;
    const { gunhaType } = req.query; // Gunha type passed as a query parameter

    const tableName = gunhaToTableMapping[gunhaType];

    if (!tableName) {
      return res.status(400).json({ error: 'Invalid gunha type provided.' });
    }

    try {
        const connection = await pool.getConnection(); // Establish a connection to the database

        const query = `SELECT * FROM ${tableName} WHERE id = ?`;
        const [rows] = await connection.execute(query, [id]); // Execute the query with the given ID

        connection.release(); // Release the connection back to the pool

        if (rows.length === 0) {
            return res.status(404).json({ error: 'No data found for the given ID.' });
        }

        res.status(200).json(rows[0]); // Send the first row (assuming ID is unique)
    } catch (error) {
        console.error('Error fetching gunha data:', error.message);
        res.status(500).send('Server error');
    }
};


const updateGunha = async (req, res) => {
    const { id } = req.params;  // Extracting the ID from the route parameters
    const { gunhaType } = req.query;  // Extracting gunhaType from the query parameters
    const formData = req.body;  // Extracting the form data from the request body

    const tableName = gunhaToTableMapping[gunhaType];  // Map gunhaType to the correct table

    if (!tableName) {
        return res.status(400).json({ error: 'Invalid gunha type provided.' });
    }

    try {
        const connection = await pool.getConnection();

        if (req.file) {
            formData.attachment = req.file.filename; // Save the file name or path in the formData
        }

        // Generate the SET part of the query dynamically based on formData
        const fields = Object.keys(formData)
            .filter(key => formData[key] !== undefined && formData[key] !== null)
            .map(key => `${key} = ?`)
            .join(', ');

        const values = Object.values(formData).filter(value => value !== undefined && value !== null);

        // If there are no fields to update, return an error
        if (!fields.length) {
            return res.status(400).json({ error: 'No valid fields provided for update.' });
        }

        const query = `UPDATE ${tableName} SET ${fields} WHERE id = ?`;
        await connection.execute(query, [...values, id]);

        connection.release();

        res.status(200).json({ message: 'Gunha updated successfully.' });
    } catch (error) {
        console.error('Error updating gunha:', error.message);
        res.status(500).send('Server error');
    }
};











module.exports = { getCaseStatusAndTotalCounts ,updateGunha, getAchievementDetails , searchGunha , getCourtHearingDetails, getGunhaData , getGunhaById , searchInGunha };
