import { AlertCircle, Calendar, Loader2 } from "lucide-react";
import { blogFallbacks } from "@/lib/site";

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: { "wp:featuredmedia"?: Array<{ source_url?: string }> };
};

async function getPosts(): Promise<{ posts: WpPost[]; error?: string }> {
  const endpoint = process.env.WORDPRESS_API_URL;
  if (!endpoint) return { posts: [] };
  try {
    const response = await fetch(endpoint, { next: { revalidate: 1800 } });
    if (!response.ok) return { posts: [], error: "WordPress returned an unavailable response." };
    const posts = await response.json();
    return { posts: Array.isArray(posts) ? posts.slice(0, 9) : [] };
  } catch {
    return { posts: [], error: "WordPress posts could not be loaded." };
  }
}

function clean(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/&hellip;/g, "...").replace(/&amp;/g, "&");
}

export default async function BlogPage() {
  const { posts, error } = await getPosts();

  return (
    <>
      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-wider text-lime">Articles</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">Pest management and cleaning guides for Dubai properties.</h1>
        </div>
      </section>
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 flex gap-3 rounded-md bg-white p-4 text-sm font-semibold text-amber-700 shadow-soft">
              <AlertCircle className="shrink-0" />{error}
            </div>
          )}
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="rounded-md bg-white p-6 shadow-soft">
                  <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-aqua"><Calendar size={15} />{new Date(post.date).toLocaleDateString()}</p>
                  <h2 className="mt-4 text-xl font-black text-navy">{clean(post.title.rendered)}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{clean(post.excerpt.rendered).slice(0, 170)}</p>
                  <a className="mt-5 inline-flex text-sm font-black text-aqua" href={post.link} target="_blank" rel="noreferrer">Read article</a>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-md bg-white p-8 text-center shadow-soft">
              <Loader2 className="mx-auto text-aqua" />
              <h2 className="mt-4 text-2xl font-black text-navy">Articles & Pest Management Guides Coming Soon</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">This page is WordPress REST-ready. Add `WORDPRESS_API_URL` to fetch `/wp-json/wp/v2/posts?_embed`; until then, editorial placeholders keep the page complete.</p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {blogFallbacks.map((title) => <div key={title} className="rounded-md border border-slate-200 p-4 text-sm font-bold text-ink">{title}</div>)}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
