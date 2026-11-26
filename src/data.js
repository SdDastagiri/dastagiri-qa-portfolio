export const profile = {
  name: 'Sayyad Dastagiri',
  title: 'QA Automation Engineer',
  email: 'sayyaddastagirisd@gmail.com',
  phone: '+919398512478',
  phoneDisplay: '+91 9398512478',
  linkedin: 'https://www.linkedin.com/in/sayyad-dastagiri/',
  github: 'https://github.com/SdDastagiri',
  resume: 'https://drive.google.com/file/d/1ocw2KyjzMh9NTCzZOw7IKTRkZbN0gWZS/view?usp=sharing',
}

export const achievements = [
  { value: '4+', label: 'Years in QA', detail: 'Quality engineering experience' },
  { value: '31+', label: 'POS-SDK offer types', detail: 'Business-rule coverage' },
  { value: '500+', label: 'Test cases', detail: 'Created and contributed to' },
  { value: '300+', label: 'Defects reported', detail: 'Across testing activities' },
]

export const skillGroups = [
  { icon: 'Code2', title: 'Programming', skills: ['Java', 'JavaScript', 'Node.js'] },
  { icon: 'Workflow', title: 'Automation', skills: ['Selenium WebDriver', 'Appium', 'TestNG', 'Maven', 'Page Object Model'] },
  { icon: 'Braces', title: 'API Testing', skills: ['REST Assured', 'Postman', 'API validation', 'Request / response validation'] },
  { icon: 'ShieldCheck', title: 'Testing', skills: ['Functional', 'Sanity', 'Smoke', 'Regression', 'Integration', 'System', 'End-to-End', 'Cross-browser', 'Mobile'] },
  { icon: 'MonitorSmartphone', title: 'Platforms', skills: ['Web', 'PWA', 'Android', 'iOS', 'POS SDK'] },
  { icon: 'Cloud', title: 'Cloud & Database', skills: ['AWS CloudWatch', 'DynamoDB'] },
  { icon: 'Wrench', title: 'Tools', skills: ['Git', 'GitHub', 'TestRail', 'Monday.com', 'JIRA', 'Allure'] },
  { icon: 'Layers3', title: 'Practices', skills: ['TestNG', 'Maven', 'POM', 'Agile', 'SDLC', 'STLC'] },
]

export const projects = [
  {
    number: '01',
    name: 'The Coupon Bureau',
    type: 'Digital coupon platform',
    summary: 'Quality assurance for a centralized digital coupon platform based on GS1 AI 8112 Universal Coupons.',
    contributions: [
      'Built and maintained API automation coverage using Java and REST Assured.',
      'Validated end-to-end API workflows, including positive, negative, boundary, and complex scenarios.',
      'Performed backend data validation with DynamoDB and investigated application behaviour through AWS CloudWatch.',
      'Supported regression, release validation, and defect investigation.',
    ],
    stack: ['Java', 'REST Assured', 'TestNG', 'AWS CloudWatch', 'DynamoDB', 'TestRail'],
  },
  {
    number: '02',
    name: 'POS-SDK',
    type: 'Retail point-of-sale integration',
    summary: 'A product integrated with retailer POS systems to validate basket items and serialized coupons against locally available offer and validation data.',
    contributions: [
      'Worked across 31+ TCB offer types and contributed to a suite of 500+ test cases.',
      'Validated coupon validation, redemption, rollback, and business rules.',
      'Designed positive, negative, boundary, and complex corner-case scenarios.',
      'Prepared client-specific basket and coupon test data; checked expected versus actual results.',
      'Worked with Excel-based input/output validation and HTML reports.',
    ],
    stack: ['Java', 'REST Assured', 'API Testing', 'TestNG', 'Excel validation'],
  },
  {
    number: '03',
    name: 'GITSY',
    type: 'Coupon distribution & consumer wallet',
    summary: 'A coupon distribution and consumer wallet application spanning web, PWA, Android, and iOS platforms.',
    contributions: [
      'Automated web UI flows using Java, Selenium WebDriver, and Page Object Model.',
      'Performed mobile testing and automation using Appium.',
      'Validated coupon distribution, consumer wallet, and QR/barcode-based POS workflows.',
      'Executed functional, regression, and compatibility testing across supported platforms.',
    ],
    stack: ['Java', 'Selenium WebDriver', 'Appium', 'POM', 'Web', 'PWA', 'Android', 'iOS'],
  },
]

export const experience = [
  {
    company: 'The Coupon Bureau (TCB)',
    role: 'Quality Assurance Engineer',
    period: 'Professional experience',
    points: [
      'API automation using Java and REST Assured.',
      'Functional, sanity, regression, and end-to-end testing.',
      'POS-SDK testing and coupon business workflow validation.',
      'AWS CloudWatch log analysis and DynamoDB backend data validation.',
      'TestRail test management, defect tracking using Monday.com, and release reporting.',
      'Customer issue investigation, troubleshooting, and release validation.',
    ],
  },
  {
    company: 'Apeksh InfoTech Pvt. Ltd.',
    role: 'Software Engineer (QE)',
    period: 'Project: GITSY',
    points: [
      'Web application and PWA testing, plus Android and iOS application testing.',
      'Web UI automation using Java and Selenium WebDriver; mobile automation using Appium.',
      'Implemented Page Object Model practices for web automation.',
      'Tested QR code and barcode-based coupon workflows with functional, regression, and compatibility coverage.',
    ],
  },
  {
    company: 'BHEL, Hyderabad',
    role: 'Graduate Apprentice Trainee',
    period: 'March 2019 – March 2020',
    points: ['Completed graduate apprentice training.'],
  },
]

export const education = {
  degree: 'B.Tech — Mechanical Engineering',
  college: 'St. Ann’s College of Engineering and Technology',
  university: 'JNTU Kakinada University',
  year: '2018',
}