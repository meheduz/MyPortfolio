# How to Make Posts Visible to Everyone

## Problem:
Posts are saved to localStorage (only you can see them). Visitors can't read your posts.

## Solution:
After posting, you need to update the `posts.json` file so everyone can see your posts.

## Steps:

1. **Post normally** in admin panel
2. **Check browser console** (F12 → Console tab)
3. **Copy the JSON** that appears in console
4. **Open `posts.json` file** in your code editor
5. **Replace entire content** with the copied JSON
6. **Save and push** to GitHub:
   ```bash
   git add posts.json
   git commit -m "Add new blog post"
   git push origin main
   ```

## Example:
After posting, console shows:
```json
[
  {
    "id": 1673123456789,
    "title": "My New Post",
    "date": "January 20, 2025",
    "excerpt": "This is my new post...",
    "readTime": "2 min read",
    "category": "Personal"
  }
]
```

Copy this and replace `posts.json` content, then push to GitHub.

Now everyone can read your posts!