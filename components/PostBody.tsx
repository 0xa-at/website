export default function PostBody({ content }: { content: string }) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}