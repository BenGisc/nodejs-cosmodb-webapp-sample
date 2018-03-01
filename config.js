let config = {}

config.host = process.env.HOST || "https://bgicosmos01.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "tT6oKQL2NFwaTX9hvKmLuuFkGOCFqRjU0pz166i7g0cJzeW2kx5Y3Aj4XkwI4uWduoi5TiNcpmEkfwhsfEZyww==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;