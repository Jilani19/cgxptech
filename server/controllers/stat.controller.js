import Stat from '../models/Stat.js';

export const getStats = async (req, res) => {
  try {
    const stats = await Stat.find({});
    
    // In-memory fallback if the DB seeder hasn't run yet or failed
    if (!stats || stats.length === 0) {
      return res.status(200).json([
        { label: 'Industries Covered', value: '6+' },
        { label: 'R&D Databases Loaded', value: '450+' },
        { label: 'Clinical Trial Profiles', value: '25,000+' },
        { label: 'Active Jobs Scraped', value: '1,200+' }
      ]);
    }
    
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving statistics', error: error.message });
  }
};
