import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        {`heyo i'm kevin o/ this is where i will be digital gardening. check back later, it's a bit early!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
