import { posts } from '@/lib/blog'
import { Section, SectionHeading } from '@/components/section'
import { PostCard } from '@/components/post-card'
import { LinkButton } from '@/components/link-button'

export function HomeBlog() {
  return (
    <Section id="resources" tone="muted" labelledBy="resources-title">
      <SectionHeading
        id="resources-title"
        eyebrow="Free resources"
        title={
          <>
            ServiceNow tutorials, <span className="text-gradient">written by trainers.</span>
          </>
        }
        description={<span className="fs-lead">Start learning before you enrol. Guides on ServiceNow fundamentals, scripting, certification and careers — updated for the current release.</span>}
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {posts.slice(0, 3).map((p) => (
          <li key={p.slug}>
            <PostCard post={p} />
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/blog" variant="outline">
          Read all ServiceNow tutorials
        </LinkButton>
        <LinkButton href="/servicenow-interview-questions" variant="outline">
          ServiceNow Interview Questions
        </LinkButton>
      </div>
    </Section>
  )
}
