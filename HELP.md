VScode -ի հավելումների ցուցակը ստանալու հրաման
code --list-extensions

ctrl + shift + p
Preferences: Configure User Snippets
create some snippets name
add snippets for example clg
{
  "Console log": {
    "prefix": "clg",
    "body": [
      "console.log($1);"
    ],
    "description": "Console log shortcut"
  }
}
