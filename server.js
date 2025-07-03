import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import servicesRoutes from './src/routes/services.js';
import productsRoutes from './src/routes/products.js';
import fundsRoutes from './src/routes/funds.js';
import caseStudiesRoutes from './src/routes/case-studies.js';
import blogPostsRoutes from './src/routes/blog-posts.js';
import eventsRoutes from './src/routes/events.js';
import contactMessagesRoutes from './src/routes/contact-messages.js';
import teamRoutes from './src/routes/team-members.js';
import resourcesRoutes from './src/routes/resources.js';
import programApplicationsRoutes from './src/routes/program-applications.js';

import uploadsRoutes from './src/routes/uploads.js';
import adminRoutes from './src/routes/admins.js';
import popupRoutes from './src/routes/popup.js';

import db from './db.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// API prefix for consistency with frontend `VITE_API_URL + /api/...`
app.use('/api/services', servicesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/funds', fundsRoutes);
app.use('/api/case-studies', caseStudiesRoutes);
app.use('/api/blog-posts', blogPostsRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/contact-messages', contactMessagesRoutes);
app.use('/api/team-members', teamRoutes);
app.use('/api/resources', resourcesRoutes);
app.use('/api/program-applications', programApplicationsRoutes);
app.use('/api/popup', popupRoutes);

app.use('/api/uploads', uploadsRoutes); // For handling uploads
app.use('/uploads', express.static('public/uploads')); // Serve uploaded files
app.use('/api/admins', adminRoutes);  // For admin login


app.get('/', (req, res) => {
  res.send('CMS API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
