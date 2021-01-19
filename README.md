```
Basic sandbox project for tailwind 2.x without other frameworks
Trying to get it to compile to production on a windows machine
Not using anything fancy, no sass or some such stuff.
Also using this to configure vscode to be very tailwind friendly.

File -> Preferences -> Settings -> Extensions -> Scroll down and find
"Edit in settings.json". Do not forget to restart the visual studio code.
This will allow you to run the cross-env command inside the terminal
window in vscode.

"terminal.integrated.shellArgs.windows": ["-ExecutionPolicy", "Bypass"]

npm install -g cross-env

https://www.npmjs.com/package/cross-env

cross-env NODE_ENV=production npx tailwindcss-cli@latest build ./tailwind.css -o ./app.css

also disable css verify in vs code settings, so no irritating
underlines and crap in your css files.

you need to have a package.json in order for
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
to work properly.  This project as it currently stands does work
in vscode.

Using vscode extenstion Liveserver as well.

only need to run the build command if i add stuff that uses @apply

OR if i add a new css class I hadn't used before, because
when i do a production build it prunes off all unused classes
so you get weird behaviourk

otherwise changes in the html are picked up fine.

```
