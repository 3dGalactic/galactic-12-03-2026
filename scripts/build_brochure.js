const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 0,
});

const outputPath = path.join(__dirname, '..', 'public', 'brochure.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Assets
const roomImg = path.join(__dirname, '..', 'public', 'Training', 'room.png');
const facilityImg = path.join(__dirname, '..', 'public', 'Training', 'facility.png');
const expertsImg = path.join(__dirname, '..', 'public', 'Training', 'experts.png');
const competenceImg = path.join(__dirname, '..', 'public', 'Training', 'competence.png');
const productionImg = path.join(__dirname, '..', 'public', 'production.png');
const eosImg = path.join(__dirname, '..', 'public', 'eos.png');

// Colors
const RED = '#E52320';
const DARK_HEADER = '#0D0D0E';
const LIGHT_BG = '#FFFFFF';
const TEXT_DARK = '#1F2937';
const TEXT_MUTED = '#4B5563';

// ================= PAGE 1 (COVER) =================
// Full background image
if (fs.existsSync(roomImg)) {
  doc.image(roomImg, 0, 0, { width: 595.28, height: 620 });
} else {
  doc.rect(0, 0, 595.28, 620).fill('#1a1a1a');
}

// Light overlay gradient for readability
doc.save();
doc.rect(0, 0, 595.28, 120).fillColor('#FFFFFF', 0.85).fill();
doc.restore();

// Top Logo
doc.fillColor(RED).fontSize(28).font('Helvetica-Bold').text('GALACTIC ', 40, 35, { continued: true });
doc.fillColor('#000000').text('3D');

// Bottom Text Block
doc.rect(0, 560, 595.28, 281.89).fill(LIGHT_BG);

doc.fillColor('#000000').fontSize(32).font('Helvetica-Bold').text('TRAINING, SKILL &', 40, 600, { align: 'center' });
doc.fontSize(32).text('ENTREPRENEURSHIP', { align: 'center' });
doc.fontSize(32).text('DEVELOPMENT', { align: 'center' });

doc.moveDown(0.8);
doc.fillColor('#333333').fontSize(14).font('Helvetica-Oblique').text('"From Learning to Leading in Additive Manufacturing"', { align: 'center' });

doc.fillColor('#666666').fontSize(11).font('Helvetica-Bold').text('www.galactic-3d.com', 40, 805, { align: 'center' });


// ================= PAGE 2 =================
doc.addPage({ size: 'A4', margin: 0 });
doc.rect(0, 0, 595.28, 841.89).fill(LIGHT_BG);

// Header Black Bar
doc.rect(0, 0, 595.28, 260).fill(DARK_HEADER);

doc.fillColor(RED).fontSize(26).font('Helvetica-Bold').text('GALACTIC ', 40, 35, { continued: true });
doc.fillColor('#FFFFFF').text('3D');

doc.fillColor('#E5E7EB').fontSize(10).font('Helvetica').text(
  'Galactic 3D is your one-stop destination for advanced manufacturing services. As experts in the field, we bridge the gap to the future with cutting-edge technology and expert support. We offer customized, efficient, and high-precision solutions across industries, delivering unmatched quality and innovation with every project.',
  40, 85, { width: 515, align: 'justify' }
);

doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold').text('Our services span across four key verticals:', 40, 155);

const verticals = [
  '• Design, DFAM & Data Preparation',
  '• Contract Manufacturing & Part Printing',
  '• Training, Skill & Entrepreneurship Development',
  '• Capital Equipment Manufacturing'
];

verticals.forEach((v, idx) => {
  doc.fillColor('#D1D5DB').fontSize(10).font('Helvetica-Bold').text(v, 50, 180 + idx * 18);
});

// Banner
doc.rect(0, 275, 595.28, 45).fill('#F3F4F6');
doc.fillColor('#111827').fontSize(14).font('Helvetica-Bold').text(
  'MENTORSHIP  |  ', 40, 290, { continued: true }
);
doc.fillColor(RED).text('COMPETENCE', { continued: true });
doc.fillColor('#111827').text('  |  EMPOWERMENT');

// Mentorship Photo & Text
if (fs.existsSync(expertsImg)) {
  doc.image(expertsImg, 40, 340, { width: 230, height: 170 });
}

const rightX = 290;
doc.fillColor(TEXT_DARK).fontSize(9.5).font('Helvetica').text(
  "Learn the endless possibilities of AM and its associations with GenAI, ChatGPT & ML. Whether you're a student, professional, or executive, our training programs are designed to prepare you for a world of limitless possibilities in design, production, and innovation.",
  rightX, 340, { width: 265, align: 'justify' }
);

doc.fillColor('#000000').fontSize(14).font('Helvetica-Bold').text('Mission', rightX, 420);
doc.fillColor(TEXT_MUTED).fontSize(9).font('Helvetica').text(
  'To foster the next generation of innovators and leaders in advanced manufacturing through world-class training and education.',
  rightX, 438, { width: 265 }
);

doc.fillColor('#000000').fontSize(14).font('Helvetica-Bold').text('Vision', rightX, 475);
doc.fillColor(TEXT_MUTED).fontSize(9).font('Helvetica').text(
  'To make Additive Manufacturing an integral part of education, empowering learners to drive industrial transformation sustainably.',
  rightX, 493, { width: 265 }
);

// Why Choose Us Section
doc.fillColor('#000000').fontSize(18).font('Helvetica-Bold').text('Why Choose Us ?', 40, 540, { align: 'center' });

const reasons = [
  { title: 'Industry-aligned curriculum.', desc: 'Courses approved by EOS & Board of Studies.' },
  { title: 'Access to state-of-the-art facilities.', desc: 'Hands-on industrial DMLS & FDM printer fleet.' },
  { title: 'Expert trainers & real-world projects.', desc: 'Mentorship by Ph.D. & M.Tech experts.' },
  { title: 'Internships & Placement assistance.', desc: 'Career pathways & industry project sprints.' }
];

reasons.forEach((r, idx) => {
  const colX = 40 + (idx % 2) * 265;
  const rowY = 580 + Math.floor(idx / 2) * 95;
  
  doc.circle(colX + 25, rowY + 30, 20).fill(RED);
  doc.fillColor('#FFFFFF').fontSize(12).font('Helvetica-Bold').text(`${idx + 1}`, colX + 20, rowY + 24);

  doc.fillColor('#000000').fontSize(11).font('Helvetica-Bold').text(r.title, colX + 55, rowY + 12, { width: 190 });
  doc.fillColor(TEXT_MUTED).fontSize(9).font('Helvetica').text(r.desc, colX + 55, rowY + 38, { width: 190 });
});

doc.fillColor(TEXT_MUTED).fontSize(9).font('Helvetica').text('www.galactic-3d.com', 40, 805, { align: 'center' });


// ================= PAGE 3 =================
doc.addPage({ size: 'A4', margin: 0 });
doc.rect(0, 0, 595.28, 841.89).fill(LIGHT_BG);

// School Section Header
doc.rect(0, 0, 595.28, 80).fill(DARK_HEADER);
doc.fillColor(RED).fontSize(22).font('Helvetica-Bold').text("School's Program Scope", 40, 20);
doc.fillColor('#D1D5DB').fontSize(8.5).font('Helvetica').text(
  'Our school training introduces students to age-appropriate 3D printing learning modules through hands-on, STREAM-based learning. It nurtures creativity, problem-solving, and technical skills.',
  40, 48, { width: 515 }
);

if (fs.existsSync(competenceImg)) {
  doc.image(competenceImg, 40, 95, { width: 180, height: 180 });
}

const schoolLevels = [
  { title: 'Level 1 : 3D Printing Designer (Consumer)', desc: 'Introduces students to 3D design fundamentals, enabling them to create basic consumer-friendly models for everyday use.' },
  { title: 'Level 2 : 3D Printing Technology & Operation', desc: 'Students gain hands-on experience with 3D printing data preparation techniques & machine operation.' },
  { title: 'Level 3 : 3D Printing Application Developer', desc: 'Focuses on 3D printing applications for home decor, automotive, drone & lifestyle.' },
  { title: 'Level 4 : 3D Innovator', desc: 'Equips students in designing & developing their own 3D printer for multiple purposes.' }
];

schoolLevels.forEach((s, idx) => {
  const y = 95 + idx * 52;
  doc.fillColor(RED).fontSize(10.5).font('Helvetica-Bold').text(s.title, 240, y);
  doc.fillColor(TEXT_DARK).fontSize(8.5).font('Helvetica').text(s.desc, 240, y + 14, { width: 315 });
});

// Institution Section Header
doc.rect(0, 320, 595.28, 85).fill(DARK_HEADER);
doc.fillColor(RED).fontSize(22).font('Helvetica-Bold').text("Institution's Program Scope", 40, 335);
doc.fillColor('#D1D5DB').fontSize(8.5).font('Helvetica').text(
  'The program introduces 3D printing, fosters skills through hands-on learning with a comprehensive curriculum, and guides students from design basics to advanced Additive manufacturing machine building.',
  40, 365, { width: 515 }
);

if (fs.existsSync(productionImg)) {
  doc.image(productionImg, 40, 425, { width: 180, height: 330 });
}

const instLevels = [
  { title: 'Level 1: AM Designer & Industry 4.0', desc: 'Introduction to Additive Manufacturing & CAD Modelling, Design for Polymer AM & Topology Optimization, Generative Design & Innovation, AI & ML in Manufacturing, GenAI, ChatGPT & ML.' },
  { title: 'Level 2: AM Engineer', desc: 'AM Machine Architecture, Material Science in AM, Slicing Software & Print Parameters, Data Preparation & Simulation (FDM/DLP/SLS), Comparative Study, Capstone Project & Review.' },
  { title: 'Level 3: Design Thinking & DFAM', desc: 'Design Thinking for Innovation, Prototyping & Social Innovation, DFAM for Polymers, Optimization for AM, Capstone Project (Design & Simulation), Part Printing comparative Case study.' },
  { title: 'Level 4: AM Specialist (Metal AM & Industrial Visits)', desc: 'Introduction to Metal AM, Overheating in DMLS, Support-Free Metal AM, Reference Point Calibration, EOSPRINT Software, EOSTATE monitoring, Tooling Design, Post-Processing, Industrial Visit.' }
];

instLevels.forEach((s, idx) => {
  const y = 425 + idx * 85;
  doc.fillColor(RED).fontSize(11).font('Helvetica-Bold').text(s.title, 240, y);
  doc.fillColor(TEXT_DARK).fontSize(8.5).font('Helvetica').text(s.desc, 240, y + 15, { width: 315, align: 'justify' });
});

doc.fillColor(TEXT_MUTED).fontSize(9).font('Helvetica').text('www.galactic-3d.com', 40, 805, { align: 'center' });


// ================= PAGE 4 =================
doc.addPage({ size: 'A4', margin: 0 });
doc.rect(0, 0, 595.28, 841.89).fill(LIGHT_BG);

// Industry Section Header
doc.rect(0, 0, 595.28, 80).fill(DARK_HEADER);
doc.fillColor(RED).fontSize(22).font('Helvetica-Bold').text("Industry Program Scope", 40, 20);
doc.fillColor('#D1D5DB').fontSize(8.5).font('Helvetica').text(
  'Our Industry-Specific training equips professionals with practical expertise and hands-on training in Additive Manufacturing, from design to machine operations and post-processing. Tailored for SME/MSME needs.',
  40, 48, { width: 515 }
);

if (fs.existsSync(facilityImg)) {
  doc.image(facilityImg, 40, 95, { width: 180, height: 230 });
}

const indLevels = [
  { title: 'PG Diploma in Additive Manufacturing', duration: 'Duration : 1 Year & 2 Years', desc: 'A comprehensive program for professionals focusing on AM technologies, material science, and industrial applications.' },
  { title: 'Certifications in Additive Manufacturing', duration: 'Duration : 6 months', desc: 'Specialized courses to enhance skills in DFAM, material for AM, and practical industry problem solving.' },
  { title: 'Executive Certifications', duration: 'Duration : 3/6/9 months', desc: 'High-level insights into strategic AM, business applications, cost analysis, and supply chain integration.' },
  { title: 'Level 4 : 3D Innovator / Custom Training', duration: 'Duration : As per requirement', desc: 'Tailored training for aerospace, automotive, healthcare, defense, and research sectors.' }
];

indLevels.forEach((s, idx) => {
  const y = 95 + idx * 60;
  doc.fillColor(RED).fontSize(11).font('Helvetica-Bold').text(s.title, 240, y);
  doc.fillColor(TEXT_MUTED).fontSize(8.5).font('Helvetica-Bold').text(`(${s.duration})`, 240, y + 14);
  doc.fillColor(TEXT_DARK).fontSize(8.5).font('Helvetica').text(s.desc, 240, y + 26, { width: 315 });
});

// Core Team Section
doc.rect(40, 345, 515, 75).fill('#F3F4F6');
doc.fillColor(RED).fontSize(12).font('Helvetica-Bold').text('OUR CORE TEAM & COURSE CONTENT', 55, 357);
doc.fillColor(TEXT_DARK).fontSize(9).font('Helvetica').text(
  'A highly qualified expert team with 30+ years of experience, including Ph.D. holders, M.Tech graduates, and industry professionals, specializing in advanced manufacturing technologies and fostering innovation in training and curating course content approved by EOS and the Board of Studies.',
  55, 375, { width: 485, align: 'justify' }
);

// Classroom Photo
if (fs.existsSync(roomImg)) {
  doc.image(roomImg, 40, 435, { width: 515, height: 220 });
}

// Contact Footer Block
doc.rect(0, 675, 595.28, 166.89).fill('#F9FAFB');
doc.moveTo(0, 675).lineTo(595.28, 675).strokeColor('#E5E7EB').lineWidth(1).stroke();

doc.fillColor(RED).fontSize(20).font('Helvetica-Bold').text('GALACTIC ', 40, 695, { continued: true });
doc.fillColor('#000000').text('3D');

if (fs.existsSync(eosImg)) {
  doc.image(eosImg, 220, 690, { width: 70 });
}

doc.fillColor('#000000').fontSize(10).font('Helvetica-Bold').text('INDIA HEADQUARTERS', 340, 695);
doc.fillColor(TEXT_MUTED).fontSize(8.5).font('Helvetica').text(
  'Cambridge Institute of Technology,\nJai Bhuvaneshwari Layout Road, SR Layout,\nKrishnarajapuram, Bengaluru, Karnataka 560036',
  340, 712, { width: 220 }
);

doc.moveTo(40, 770).lineTo(555, 770).strokeColor('#D1D5DB').lineWidth(1).stroke();

doc.fillColor('#000000').fontSize(10).font('Helvetica-Bold').text('Email:', 40, 785, { continued: true });
doc.fillColor(TEXT_MUTED).font('Helvetica').text(' aabid@galactic-3d.com', { continued: true });
doc.fillColor('#000000').font('Helvetica-Bold').text('   •   Phone:', { continued: true });
doc.fillColor(TEXT_MUTED).font('Helvetica').text(' +91 97403 31995', { continued: true });
doc.fillColor(RED).font('Helvetica-Bold').text('   •   Web: www.galactic-3d.com');

doc.end();

console.log('Official Visual Brochure PDF generated successfully at:', outputPath);
