import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { posts, profile } from "@/data/site";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function ProfileLink({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={cn(
        "text-link underline visited:text-link-visited focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-label focus-visible:outline-solid",
        className,
      )}
    />
  );
}

function ProfileSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="mt-[1.8em] mb-[0.7em] inline-block rounded-[3px] border border-black bg-transparent px-[0.6em] py-[0.15em] text-[1em] font-bold tracking-[0.04em]"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function PostItem({ post }: { post: (typeof posts)[number] }) {
  return (
    <li className="mb-[0.6em] flex flex-wrap items-baseline gap-x-[0.5em] gap-y-0 wide:mb-[0.2em] wide:flex-nowrap wide:gap-y-[0.5em]">
      <ProfileLink href={post.href} className="basis-full wide:basis-auto">
        {post.title}
      </ProfileLink>
      <span
        className="hidden flex-1 -translate-y-[0.25em] border-b border-dotted border-leader wide:block"
        aria-hidden="true"
      />
      <time className="text-[0.9em] whitespace-nowrap text-date" dateTime={post.date}>
        {dateFormatter.format(new Date(post.date))}
      </time>
    </li>
  );
}

export function ProfilePage() {
  return (
    <main className="mx-auto my-[4.5em] box-content max-w-reading px-[25px] font-serif text-body text-ink">
      <h1 className="mt-[0.83em] mb-[0.15em] text-title font-bold">{profile.name}</h1>
      <p className="mb-copy flex items-center gap-[0.25em] text-caption">
        <span>{profile.tagline}</span>
        <img
          className="h-8 w-auto flex-none object-contain"
          src="/tagline-cat.webp"
          alt="Cat in a bee costume wearing sunglasses"
          width={175}
          height={192}
        />
      </p>
      <p className="mb-copy">{profile.introduction}</p>
      <p className="mb-copy">{profile.research}</p>
      <ProfileSection id="projects" title="Projects">
        <p>wip</p>
      </ProfileSection>
      <ProfileSection id="posts" title="Posts">
        <ul className="list-none p-0" aria-labelledby="posts">
          {posts.map((post) => (
            <PostItem key={post.href} post={post} />
          ))}
        </ul>
        <p>wip</p>
      </ProfileSection>
      <footer className="mt-section">
        <p className="mb-copy">{profile.contact}</p>
        <ul className="mt-[0.2em] mb-[1em] list-disc pl-[1.4em]">
          {profile.socials.map((social) => (
            <li key={social.href}>
              <ProfileLink href={social.href}>{social.name}</ProfileLink>
            </li>
          ))}
          <li>Email: {profile.email}</li>
        </ul>
      </footer>
    </main>
  );
}
