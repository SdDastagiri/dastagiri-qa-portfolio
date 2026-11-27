import * as Icons from 'lucide-react'

// Official brand marks from Simple Icons. Generic testing concepts use
// a compact text marker because they do not have an official product logo.
const skillLogos = {
  Java: '/icons/java.svg',
  JavaScript: ['javascript', 'F7DF1E'],
  'Node.js': ['nodedotjs', '5FA04E'],
  'Selenium WebDriver': ['selenium', '43B02A'],
  Maven: ['apachemaven', 'C71A36'],
  Appium: ['appium', 'EE376D'],
  Android: ['android', '3DDC84'],
  iOS: ['apple', 'FFFFFF'],
  'REST Assured': ['restassured', '6BA539'],
  Postman: ['postman', 'FF6C37'],
  'AWS CloudWatch': '/icons/cloudwatch.svg',
  DynamoDB: '/icons/dynamodb.svg',
  OpenSearch: ['opensearch', '005EB8'],
  Git: ['git', 'F05032'],
  GitHub: ['github', 'FFFFFF'],
  TestRail: ['testrail', '65C179'],
  'Monday.com': '/icons/monday.svg',
  TestNG: '/icons/testng.svg',
  JIRA: ['jira', '0052CC'],
  Allure: ['allure', 'FF4E4E'],
  'BDD / Cucumber': ['cucumber', '23D96C'],
}

function SkillLogo({ name }) {
  const logo = skillLogos[name]

  if (!logo) {
    return <span className="tag-fallback" aria-hidden="true">{name.slice(0, 1)}</span>
  }

  const iconSrc = typeof logo === 'string'
    ? logo
    : `https://cdn.simpleicons.org/${logo[0]}/${logo[1]}`

  return (
    <img
      className="tag-logo"
      src={iconSrc}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = 'none'
      }}
    />
  )
}

export default function SkillCard({ group, index }) {
  const Icon = Icons[group.icon] || Icons.Code2

  return (
    <article className="skill-card reveal" style={{ '--delay': `${index * 55}ms` }}>
      <div className="skill-icon"><Icon size={20} strokeWidth={1.8} /></div>
      <h3>{group.title}</h3>
      <div className="tag-list">
        {group.skills.map(skill => (
          <span className="tag" key={skill}>
            <SkillLogo name={skill} />
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </article>
  )
}
