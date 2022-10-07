import db from "../db.js"


// Load all books
export const books = (req, res) => {
    const q = 'SELECT * FROM books';
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

// ADD ITEM
export const add = (req, res) => {
    const q = "INSERT INTO books (`name`, `writer`, `publisher`, `pdate`) VALUES (?)";
    const r = req.body;
    const values = [r.name, r.writer, r.publisher, r.pdate];
    console.log(values)
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
}

// DELETE ITEM
export const remove = (req, res) => {
    // DELETE FROM [TABLE NAME] WHERE CONDITION;
    const q = "DELETE from books WHERE id = (?) "
    const bookId = req.params.id;
    console.log(bookId)
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
}

// FETCH ONE ITEM 
export const fetchItem = (req, res) => {
    const itemId = req.params.id;
    // console.log(itemId)
    const q = "SELECT * FROM books WHERE id = ?"
    db.query(q, itemId, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}

// UPDATE ITEM
export const update = (req, res) => {
    
    // UPDATE [TABLE NAME] SET COLUMN1 =’’ WHERE COLUMN2 =’’;

    const bookId = req.params.id;
    const q = "UPDATE books SET `name` = ?, `writer` = ?, `publisher` = ?, `pdate` = ? WHERE id = ?"
    const values = [req.body.name, req.body.writer, req.body.publisher, req.body.pdate];
    // console.log(values)
    // console.log(bookId)
    db.query(q, [...values, bookId] , (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
}

