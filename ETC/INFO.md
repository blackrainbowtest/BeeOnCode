Start-Service -Name W32Time
w32tm /resync


code --list-extensions > extensions.txt
cat extensions.txt | xargs -n 1 code --install-extension

ctrl + k -> ctrl + t
