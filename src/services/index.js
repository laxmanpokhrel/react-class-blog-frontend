export const fetchBlogs = async () => {
    try {
        const res = await fetch("http://localhost:3000/blog")
        const data = await res.json()
        return data
    } catch (err) {
        console.log("Error fetching blogs.", err)
    }
}

export const retrieveBlog = async (blogSlug) => {
    try {
        const res = await fetch(`http://localhost:3000/blog/${blogSlug}`)
        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            throw new Error(data.message)
        }
    } catch (err) {
        console.log("Error retrieving blog----------.", err)
        throw new Error(err)
    }
}