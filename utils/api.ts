// Source: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.ts

import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import PostType, { AuthorType, EventType } from './types';

const CONTENT_DIR = path.join(process.cwd(), '_content');
const POSTS_DIR = CONTENT_DIR + '/posts'
const AUTHORS_DIR = CONTENT_DIR + '/authors'
const EVENTS_DIR = CONTENT_DIR + '/events'

// Posts
// 

export function getPostsByAuthor(author: string) {
    return getAllPosts().filter(item => (item.author as AuthorType).id === author);
}

export function getPostById(id: string): PostType | undefined {
    return getAllPosts().find(p => p.id === id);
}

export function getAllPosts(): PostType[] {
    return fs.readdirSync(POSTS_DIR).map(id => {
        const [data, content] = getContentById<PostType>(POSTS_DIR, id);
        return { ...data, content} 
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

// Authors
// 

export function getAuthorById(id: string): AuthorType | undefined {
    return getAllAuthors().find(a => a.id === id);
}

export function getAllAuthors(): AuthorType[] {
    return fs.readdirSync(AUTHORS_DIR).map(id => getContentById<AuthorType>(AUTHORS_DIR, id)[0]);
}

// Events
//

export function getUpcomingEvents(): EventType[] {
    return getAllEvents().filter(event => new Date(event.date) > new Date() && !event.hidden);
}

export function getPastEvents(): EventType[] {
    return getAllEvents().filter(event => new Date(event.date) < new Date() && !event.hidden);
}

export function getEventById(id: string): EventType | undefined {
    return getAllEvents().find(e => e.id === id);
}

export function getAllEvents(): EventType[] {
    return fs.readdirSync(EVENTS_DIR)
        .map(id => getContentById<EventType>(EVENTS_DIR, id)[0])
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

// Misc
// 

export function getContentById<T>(folder: string, id: string): [T, string] {
    const fileName = id.replace(/\.md$/, '');
    const fullPath = path.join(folder, `${fileName}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    data['id'] = fileName;

    // Replace authorId/speakerId with author object. 
    // Note: The object seems to be cached somewhere. Once we set the author field, we can't do it again. 
    //       We can check if we already resolved the author by checking for the id vairable.
    //
    const authorId = data['author'];
    const speakerId = data['speaker'];

    if (authorId && !authorId?.id) {
        data['author'] = getAuthorById(authorId);
    }
    if (speakerId && !speakerId?.id) {
        data['speaker'] = getAuthorById(speakerId);
    }

    return [data as T, content];
}

export default async function markdownToHtml(markdown: string) {
    const result = await remark().use(html, { sanitize: false }).process(markdown)
    return result.toString()
}