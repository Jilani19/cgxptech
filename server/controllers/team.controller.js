import Team from '../models/Team.js';

const FALLBACK_TEAM = [
  {
    name: 'C Pavan Kumar',
    role: 'Chief Executive Officer',
    bio: 'Over 15 years leading SaaS revolutions and data product architectures in biotechnology workflows. Expert in GxP cloud services and life sciences data structures.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    linkedIn: 'https://linkedin.com/in/c-pavan-kumar-mock'
  },
  {
    name: 'Marcus Vance',
    role: 'VP of Data Engineering',
    bio: 'Architected petabyte-scale distributed data warehouses at Amazon Health and flatiron. Expert in GxP compliant data lakes, Spark pipeline optimization, and FDA data auditing structures.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    linkedIn: 'https://linkedin.com/in/marcus-vance-mock'
  },
  {
    name: 'Dr. Ananya Nair',
    role: 'Chief Data Scientist',
    bio: 'Specialist in deep generative modeling for molecular folding structures. Formerly Lead Scientist at Roche Informatics. Postdoctoral research fellow at MIT Lab for Science and AI.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    linkedIn: 'https://linkedin.com/in/dr-ananya-nair-mock'
  }
];

export const getTeam = async (req, res) => {
  try {
    const team = await Team.find({});
    if (!team || team.length === 0) {
      return res.status(200).json(FALLBACK_TEAM);
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving team profiles', error: error.message });
  }
};
