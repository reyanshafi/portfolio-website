import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import "../../app/globals.css";

export default function BlogIndex({ posts }) {
  return (
    <>
      <Navbar />
      <main className="bg-[#1f1f1f] text-white min-h-screen">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-serif font-medium mb-4">
                My <span className="text-red-600">Blog</span>
              </h1>
              <p className="text-base text-gray-400 max-w-xl mx-auto">
                Thoughts, tutorials, and insights on full-stack development and design.
              </p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-[#2a2a2a] border border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    
                    {post.coverImage && (
                      <div className="relative h-48 w-full">
                        <Image 
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#1f1f1f] text-xs text-gray-400 border border-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-red-500" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="text-red-500" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
