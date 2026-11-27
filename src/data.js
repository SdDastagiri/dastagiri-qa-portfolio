
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
  {
    value: '4+',
    label: 'Years in QA',
    detail: 'Quality engineering experience',
  },
  {
    value: '31+',
    label: 'TCB Offer Types',
    detail: 'Supported and validated through POS-SDK',
  },
  {
    value: '500+',
    label: 'POS-SDK Test Cases',
    detail: 'Created and executed for POS validation',
  }
]


export const skillGroups = [
  {
    icon: 'Code2',
    title: 'Programming',
    skills: ['Java', 'JavaScript', 'Node.js'],
  },
  {
    icon: 'Workflow',
    title: 'Web Automation',
    skills: [
      'Selenium WebDriver',
      'TestNG',
      'Maven',
      'Page Object Model',
    ],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Automation',
    skills: ['Appium', 'Android', 'iOS'],
  },
  {
    icon: 'Braces',
    title: 'API Testing',
    skills: [
      'REST Assured',
      'Postman',
      'API validation',
      'Request / response validation',
    ],
  },
  {
    icon: 'ShieldCheck',
    title: 'Testing',
    skills: [
      'Functional',
      'Sanity',
      'Smoke',
      'Regression',
      'Integration',
      'System',
      'End-to-End',
      'Cross-browser',
    ],
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Application Testing',
    skills: [
      'Web Applications',
      'PWA',
      'POS Applications'
    ]
  },
  {
    icon: 'Cloud',
    title: 'Cloud & Database',
    skills: [
      'AWS CloudWatch',
      'DynamoDB',
      'OpenSearch',
    ],
  },
  {
    icon: 'Wrench',
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'TestRail',
      'Monday.com',
      'JIRA',
      'Allure',
    ],
  },
  {
    icon: 'Layers3',
    title: 'Practices',
    skills: [
      'Agile',
      'SDLC',
      'STLC',
      'BDD / Cucumber',
    ],
  },
]


export const projects = [
  {
    number: '01',
    name: 'The Coupon Bureau',
    type: 'Digital coupon platform',
    summary:
      'Quality assurance and automation for a centralized digital coupon platform based on GS1 AI 8112 Universal Coupons.',

    contributions: [
      'Developed and maintained API automation suites using Java and REST Assured, covering positive, negative, boundary, and complex scenarios.',

      'Executed scheduled automated test runs using cron jobs and shell scripts for daily platform validation.',

      'Performed daily sanity testing covering 75+ critical use cases and monitored execution results.',

      'Executed comprehensive regression testing covering 1,100+ use cases before production releases.',

      'Monitored TCB platform dashboards, including coupon deposits and redemptions, to identify data inconsistencies and unexpected behaviour.',

      'Investigated application issues using AWS CloudWatch logs, DynamoDB, and OpenSearch for backend validation and troubleshooting.',

      'Managed test cases in TestRail, tracked defects, and collaborated with development teams on issue resolution and release validation.',
    ],

    stack: [
      'Java',
      'REST Assured',
      'TestNG',
      'Shell Scripting',
      'Cron Jobs',
      'AWS CloudWatch',
      'DynamoDB',
      'OpenSearch',
      'TestRail',
    ],

    links: [
      {
        label: 'Explore TCB Platform',
        url: 'https://try.thecouponbureau.org/developer/api_docs',
      },
    ],
  },

  {
    number: '02',
    name: 'POS-SDK',
    type: 'Retail point-of-sale integration',

    summary:
      'Quality engineering for Java and JavaScript POS validation libraries that help retailers validate basket items and serialized coupons against offer requirements.',

    contributions: [
      'Worked across 31+ TCB offer types and contributed to a comprehensive suite of 500+ test cases.',

      'Validated coupon eligibility, basket requirements, serialized coupon validation, redemption, and rollback scenarios.',

      'Designed and executed positive, negative, boundary, and complex corner-case scenarios.',

      'Prepared client-specific basket and coupon test data and validated expected versus actual results.',

      'Developed and executed JavaScript and Java-based test scenarios for POS validation workflows.',

      'Performed Excel-based input/output validation and analyzed HTML automation reports.',

      'Identified business-rule defects, verified fixes, and supported regression testing.',
    ],

    stack: [
      'Java',
      'JavaScript',
      'REST Assured',
      'TestNG',
      'POS Validation',
      'Excel Validation',
    ],

    links: [
      {
        label: 'JavaScript SDK (npm)',
        url: 'https://www.npmjs.com/package/pos-validation-sdk',
      },
      {
        label: 'Java SDK (GitHub)',
        url: 'https://github.com/TheCouponBureau-org/basket-validation-function',
      },
    ],
  },

  {
    number: '03',
    name: 'GITSY',
    type: 'Coupon distribution & consumer wallet',

    summary:
      'Quality assurance for a coupon distribution and consumer wallet application spanning Web, PWA, Android, and iOS platforms.',

    contributions: [
      'Automated web UI workflows using Java, Selenium WebDriver, and Page Object Model.',

      'Performed mobile testing and automation using Appium for Android and iOS applications.',

      'Validated coupon distribution, consumer wallet, and QR/barcode-based POS workflows.',

      'Executed functional, regression, and compatibility testing across supported platforms.',

      'Identified, reported, tracked, and verified defects through resolution.',
    ],

    stack: [
      'Java',
      'Selenium WebDriver',
      'Appium',
      'POM',
      'Web',
      'PWA',
      'Android',
      'iOS',
    ],
  },
]

export const experience = [
  {
    company: 'The Coupon Bureau (TCB)',
    role: 'Quality Assurance Engineer',
    period: 'March 2024 – September 2026',

    projects: [
      {
        name: 'The Coupon Bureau (TCB) Platform',
        period: 'March 2024 – September 2026',
        points: [
          'Developed and maintained API automation suites using Java and REST Assured.',
          'Executed scheduled daily sanity testing covering 75+ critical use cases using Cron jobs and Shell scripts.',
          'Performed comprehensive regression testing covering 1,100+ use cases before production releases.',
          'Monitored TCB dashboards, including coupon deposits and redemptions, to identify data inconsistencies.',
          'Performed backend data validation using DynamoDB and OpenSearch and investigated application issues through AWS CloudWatch.',
          'Managed test cases in TestRail, tracked defects using Monday.com, and supported release validation.',
          'Investigated customer-reported issues and collaborated with development teams on resolution.',
        ],
      },
      {
        name: 'POS-SDK',
        period: 'December 2024 – September 2026',
        points: [
          'Designed and executed test scenarios covering 31+ supported TCB offer types.',
          'Created and maintained test data for different basket combinations and coupon configurations.',
          'Validated basket items and serialized coupons against expected validation results.',
          'Developed and executed JavaScript and Java-based test scenarios for POS validation workflows.',
          'Performed Excel-based input/output validation and analyzed HTML automation reports.',
          'Tested coupon eligibility, redemption, and rollback scenarios.',
          'Identified business-rule defects, verified fixes, and supported regression testing.',
        ],
      },
    ],
  },
  {
    company: 'Apeksh InfoTech Pvt. Ltd.',
    role: 'Software Engineer (QE)',
    period: 'August 2022 – February 2024',

    projects: [
      {
        name: 'The Coupon Bureau (TCB)',
        period: 'August 2022 – December 2022',
        points: [
          'Performed functional testing of offer creation, coupon clipping, bundling, and redemption workflows.',
          'Identified, reported, and tracked defects; collaborated with developers to verify fixes.',
        ],
      },
      {
        name: 'GITSY',
        period: 'January 2023 – February 2024',
        points: [
          'Performed functional testing across Web, PWA, Android, and iOS applications.',
          'Developed web UI automation using Java, Selenium WebDriver, and Page Object Model.',
          'Developed mobile automation using Appium for Android and iOS applications.',
          'Validated QR/barcode-based coupon distribution, consumer wallet, and POS workflows.',
          'Executed regression and cross-platform compatibility testing.',
        ],
      },
    ],
  },
  {
    company: 'BHEL, Hyderabad',
    role: 'Graduate Apprentice Trainee',
    period: 'March 2019 – March 2020',
    points: [
      'Completed graduate apprentice training.',
    ],
  },
]

export const education = {
  degree: 'B.Tech — Mechanical Engineering',
  college: 'St. Ann’s College of Engineering and Technology',
  university: 'JNTU Kakinada University',
  year: '2018',
}
