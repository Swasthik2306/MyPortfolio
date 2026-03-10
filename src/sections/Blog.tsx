import Section from '@components/Section'
import Card from '@components/Card'
import { Calendar, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Blog() {
  const articles = [
    {
      title: 'Mastering Appium: Complete Mobile Automation Guide',
      excerpt: 'Learn how to build robust mobile automation frameworks using Appium for both iOS and Android platforms.',
      date: 'Mar 10, 2024',
      category: 'Mobile Testing',
      readTime: '8 min read',
    },
    {
      title: 'Playwright vs Selenium: Automation Framework Comparison',
      excerpt: 'Deep dive into comparing modern automation frameworks and understanding when to use Playwright over Selenium.',
      date: 'Mar 05, 2024',
      category: 'Automation',
      readTime: '10 min read',
    },
    {
      title: 'API Testing Best Practices with Postman',
      excerpt: 'Essential tips and tricks for effective API testing using Postman, including automation and collaboration features.',
      date: 'Feb 28, 2024',
      category: 'API Testing',
      readTime: '7 min read',
    },
    {
      title: 'Performance Testing with k6: Load Testing Essentials',
      excerpt: 'Understand how to implement effective load testing strategies and monitor performance using k6 and Grafana.',
      date: 'Feb 20, 2024',
      category: 'Performance',
      readTime: '9 min read',
    },
    {
      title: 'Cucumber & BDD: Behavior-Driven Development in Testing',
      excerpt: 'Explore how BDD approach with Cucumber improves collaboration between QA, Dev, and Business stakeholders.',
      date: 'Feb 15, 2024',
      category: 'BDD',
      readTime: '6 min read',
    },
    {
      title: 'CI/CD Pipeline Integration for Test Automation',
      excerpt: 'Complete guide to integrating your test automation suite with Azure DevOps and continuous deployment.',
      date: 'Feb 10, 2024',
      category: 'DevOps',
      readTime: '11 min read',
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Mobile Testing': 'from-blue-500',
      'Automation': 'from-blue-600',
      'API Testing': 'from-purple-500',
      'Performance': 'from-pink-500',
      'BDD': 'from-green-500',
      'DevOps': 'from-purple-500',
    }
    return colors[category] || 'from-blue-600'
  }

  return (
    <Section
      id="blog"
      title="Blog & Articles"
      subtitle="Insights and Guides on QA Automation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <Card key={index} delay={index * 0.1} className="flex flex-col h-full group cursor-pointer">
            {/* Category Badge */}
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(article.category)} bg-clip-text text-transparent border border-white/20`}
              >
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-400 mb-4 flex-grow line-clamp-2">{article.excerpt}</p>

            {/* Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <span>{article.readTime}</span>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-blue-600"
              >
                <ArrowRight size={20} />
              </motion.div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-gray-300 mb-4">Want to read more articles?</p>
        <a href="#" className="btn-primary">
          Visit Blog
        </a>
      </motion.div>
    </Section>
  )
}

