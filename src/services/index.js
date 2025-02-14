export const fetchBlogs = async () => {
    try {
        const res = await fetch("http://localhost:3000/blog")
        const data = await res.json()
        return data
    } catch (err) {
        console.log("Error fetching blogs", err)
    }
}