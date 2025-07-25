import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import "../../app/globals.css";

export default function BlogPost({ post }) {
  return (
    <>
      <Navbar />
      <main className="bg-[#1f1f1f] text-white min-h-screen pt-20 md:pt-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <header className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-[#2a2a2a] text-xs text-gray-400 border border-gray-600 rounded-full flex items-center gap-1"
                >
                  <FaTag size={10} className="text-red-500" />
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-6">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-red-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-red-500" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </header>

          {post.coverImage && (
            <div className="mb-12 rounded-xl overflow-hidden border border-gray-700">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full max-h-[500px] object-cover"
              />
            </div>
          )}

          <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none">
            <MDXRemote {...post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  
  return {
    paths,
    fallback: false,
  };
}
