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

    static load(id) {
        let a = new Article()
        let data = JSON.parse(localStorage.getItem(id))
        a.id = id
        a.title = data.title
        a.content = data.content
        
        return a

    }

    static del(id) {
        localStorage.removeItem(id)
    }
}