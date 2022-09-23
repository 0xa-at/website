// Source: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.ts

import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { AuthorType, TalkType } from './types';

const CONTENT_DIR = path.join(process.cwd(), '_content');
const POSTS_DIR = CONTENT_DIR + '/posts'
const AUTHORS_DIR = CONTENT_DIR + '/authors'
const TALKS_DIR = CONTENT_DIR + '/talks'

// Posts
// 

export function getPostSlugs() {
    return fs.readdirSync(POSTS_DIR)
}

export function getPostsByAuthor(author: string, fields: string[] = []) {
    return getAllPosts(['slug', 'author', ...fields]).filter(item => item.author === author);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(POSTS_DIR, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}

// Talks
//

export function getTalkById(id: string): TalkType | undefined {
    return getAllTalks().find(t => t.id === id);
}

export function getAllTalks(): TalkType[] {
    return fs.readdirSync(TALKS_DIR).map(id => getContentById<TalkType>(TALKS_DIR, id)[0]);
}

// Authors
// 

export function getAllAuthors(): AuthorType[] {
    return fs.readdirSync(AUTHORS_DIR).map(id => getContentById<AuthorType>(AUTHORS_DIR, id)[0]);
}

// Misc
// 

export function getContentById<T>(folder: string, id: string): [T, string] {
    const fileName = id.replace(/\.md$/, '');
    const fullPath = path.join(folder, `${fileName}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    data['id'] = fileName;

    return [data as T, content];
}

export default async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}