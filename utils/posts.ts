import fs from 'fs'

export function getAllPosts(fields: string[] = []) {
    const posts = fs.readdirSync("_posts")
    
    // TODO: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths
}

export function getPostData(slug: string) {
    // TODO: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops
}