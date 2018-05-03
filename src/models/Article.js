export class Article {
    public 
        id
        title
        content

    save() {
        localStorage.setItem(this.id, JSON.stringify({title: this.title, content: this.content}))
    }
    static build(title, content = '') {
        let a = new Article()    
        a.id = title + Date.now()
        a.title = title
        a.content = content
        a.save()

        return a
    }

    static del(id) {
        localStorage.removeItem(id)
    }
}