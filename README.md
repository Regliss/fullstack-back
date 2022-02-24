# fullstack-back

# graphql

```
mutation {createProduct(
  title: "Titre",
  description: "decription",
  img: "https://vonguru.fr/wp-content/uploads/2021/12/sword-art-online-progressive-movie-breves-cine-series-vonguru.jpg",
  age: 12,
  language: "Français",
  releaseDate: 2021,
  duration: "1h30",
  director: "Thomas",
  scriptwriter: "Thomas",
  genres: ["62178bafb300d63ce41caf03", "62178bbab300d63ce41caf05"]
){id}
}
```
```
query{getProducts{id, title, genres{title}}}
```

```
query	{getProduct(id:"62178c38b300d63ce41caf07"){genres{title}}}
```

```
mutation {createGenre(title:"Fantasy"){title}}
```