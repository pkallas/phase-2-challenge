When you run a command in the terminal, where does BASH look for that command?
BASH will look for that command in your $PATH, so if the command is contained anywhere
within your pwd, it will run that command.

On a UNIX computer, how do you stop a running process?
ctrl-c

What packages do you have installed via homebrew?
bash-completion git, hub, openssl, postgresql, readline

On a UNIX computer, how do you find the process id of a running process?
echo $$

In a terminal, what does control-c do?
It ends the current running process

What would be the result of typing the following commands?
$ cd /Users/steve --> move to a new directory, with the path ./Users/steve
$ mkdir foo --> create a new directory within ./Users/steve named foo
$ touch bar --> create a new file within ./Users/steve named bar
$ cd foo --> move to a new directory, with the path ./Users/steve/foo
$ touch bar --> create a new file within .Users/steve/foo named bar
$ pwd --> lists the present working directory, which would be .Users/steve/foo

How do you set an environment variable in your shell?
Type the name of the variable followed by it's value; for example, NAME=Patrick

What keyboard shortcut do you use to split the screen in your editor?
cmd + k followed by a directional arrow

How do you create an alias in your shell?
In the .bashrc file in your root directory, you create an alias with alias name = 'value'

When a terminal command completes, how can you tell if it was successful or not?
type $?, 0 indicates it completed successfully, otherwise it failed

What does your ~/.gitconfig have in it? (paste the whole file here)
[user]
	name = pkallas
[core]
	excludesfile = ~/.gitignore
	[color]
  status = auto
  diff = auto
  branch = auto
  interactive = auto
  ui = auto
  pager = true
[color "status"]
  added = green
  changed = yellow
  untracked = red


What is the difference between a relative and absolute path?
Absolute paths are specified from the root directory, whereas relative paths are
specified from the pwd

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?
cp README.md pinterest-for-dogs

What keyboard shortcut do you use, in your editor, when you want to open a specific file?
cmd-alt-o

What files or folders do you want all git repositories to ignore?
# Numerous always-ignore extensions
*.diff
*.err
*.log
*.orig
*.rej
*.swo
*.swp
*.vi
*.zip
*~

# OS or Editor files
._*
.cache
.DS_Store
.idea
.project
.settings
.tmproj
*.esproj
*.sublime-project
*.sublime-workspace
.irb-save-history
.pairs
.tags
.tags_sorted_by_file
.irb-save-history
.gems
.bin
.tags
.tags_sorted_by_file
.apdisk
.DS_Store
.sass-cache
.fseventsd
.bundle
chromedriver.log
.pryrc
.irbrc
libpeerconnection.log
.irb-save-history
.eslintcache
.scss-lint-cache

# Folders to ignore
bower_components
node_modules
.sass-cache
/tmp


What is the main difference between Array.map and Array.forEach in JavaScript?
Array.map will return a new array with altered values based on the function you
provided, whereas Array.forEach will run the function you provided for each element
in the array, and then return undefined
