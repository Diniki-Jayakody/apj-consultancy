import type { BlogPost } from '../../types'

export interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="card h-100 border-0 shadow-sm apj-card-hover">
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center small text-secondary mb-2">
          <span className="badge text-bg-light border">{post.category}</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
        <h3 className="h5 fw-bold text-apj-primary">{post.title}</h3>
        <p className="text-secondary flex-grow-1">{post.excerpt}</p>
        <p className="small text-secondary mb-0">{post.readMinutes} min read</p>
      </div>
    </article>
  )
}
