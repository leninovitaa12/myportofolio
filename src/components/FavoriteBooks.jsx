"use client"

export default function FavoriteBooks() {
  const books = [
    {
      id: 1,
      title: "Anak Semua Bangsa",
      cover: "/anak_semua_bangsa.jpg",
    },
    {
      id: 2,
      title: "Laut Bercerita",
      cover: "/laut_bercerita.jpg",
    },
    {
      id: 3,
      title: "Harry Potter Prisoner of Azkaban",
      cover: "/harry_potter.jpg",
    },
    {
      id: 4,
      title: "The Song of Achilles",
      cover: "/song_of_achilles.jpg",
    },
    // {
    //   id: 5,
    //   title: "Bumi Manusia",
    //   cover: "/bumi_manusia.jpg",
    // },
    {
      id: 5,
      title: "Teruslah Bodoh Jangan Pintar",
      cover: "/tere_liye.jpg",
    },
  ]

  return (
    <div className="favorite-books-section">
      <h3 className="books-subtitle">My Favorite Books</h3>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-cover">
              <img src={book.cover || "/placeholder.svg"} alt={book.title} />
            </div>
            <p className="book-title">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
