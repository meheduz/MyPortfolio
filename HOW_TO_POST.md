# How to Add New Blog Posts

## Simple Steps:

1. **Open `posts.json` file**
2. **Add your new post at the top** (after the opening `[`)
3. **Follow this format:**

```json
{
  "id": 4,
  "title": "Your Post Title Here",
  "date": "January 20, 2025",
  "excerpt": "Brief description of your post...",
  "readTime": "5 min read",
  "category": "Programming"
},
```

## Example - Adding a new post:

```json
[
  {
    "id": 4,
    "title": "Learning Next.js",
    "date": "January 20, 2025",
    "excerpt": "My experience building a portfolio with Next.js and the lessons learned.",
    "readTime": "4 min read",
    "category": "Programming"
  },
  {
    "id": 1,
    "title": "My Journey into Computer Science",
    ...existing posts...
  }
]
```

## Categories:
- Personal
- Programming  
- Robotics
- Tech

## After adding:
1. Save the file
2. Commit to GitHub: `git add . && git commit -m "Add new blog post"`
3. Push: `git push origin main`
4. Netlify will auto-deploy your new post!