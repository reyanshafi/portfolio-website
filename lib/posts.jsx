import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypeHighlight from 'rehype-highlight'; // Add this import
import "../app/globals.css";


const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      excerpt: content.slice(0, 200) + '...',
      readingTime: Math.ceil(readingTime(content).minutes),
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight], // Now properly defined
    },
  });
  
  return {
    slug,
    ...data,
    content: mdxSource,
    readingTime: Math.ceil(readingTime(content).minutes),
  };
}